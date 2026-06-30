import { useState, useEffect } from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { supabase } from "@/lib/supabase";
import { Pin } from "lucide-react";

export default function Guestbook() {
  // Authentication state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);

  // Messages state
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchingMessages, setFetchingMessages] = useState(false);
  const [error, setError] = useState(null);

  // Realtime subscription
  const [realtimeChannel, setRealtimeChannel] = useState(null);

  /**
   * Check if user is already authenticated on component mount
   */
  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user || null);

        // Fetch messages regardless of auth state so visitors can browse
        await fetchMessages();

        if (session?.user && !realtimeChannel) {
          subscribeToMessages();
        }
      } catch (err) {
        console.error("Error checking user session:", err);
        setError("Failed to load user session");
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);

      if (session?.user) {
        await fetchMessages();
        subscribeToMessages();
      } else {
        if (realtimeChannel) {
          await realtimeChannel.unsubscribe();
          setRealtimeChannel(null);
        }
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  /**
   * Cleanup realtime subscription on unmount
   */
  useEffect(() => {
    return () => {
      if (realtimeChannel) {
        realtimeChannel.unsubscribe();
      }
    };
  }, [realtimeChannel]);

  /**
   * Subscribe to realtime message updates
   * New messages appear instantly without page refresh
   */
  const subscribeToMessages = async () => {
    try {
      const channel = supabase
        .channel("guestbook-updates")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "guestbook",
          },
          (payload) => {
            // Add new message to the list immediately
            if (payload.new) {
              setMessages((prev) => [payload.new, ...prev]);
            }
          },
        )
        .subscribe();

      setRealtimeChannel(channel);
    } catch (err) {
      console.error("Error subscribing to realtime updates:", err);
    }
  };

  /**
   * Fetch all guestbook messages ordered by created_at DESC
   */
  const fetchMessages = async () => {
    try {
      setFetchingMessages(true);
      setError(null);

      const { data, error } = await supabase
        .from("guestbook")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setMessages(data || []);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError(err.message || "Failed to load messages.");
    } finally {
      setFetchingMessages(false);
    }
  };

  /**
   * Handle Google Sign-in
   * Opens Supabase OAuth flow with Google
   */
  const handleSignInWithGoogle = async () => {
    try {
      setSigningIn(true);
      setError(null);

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/guestbook`, // Redirect back to guestbook after sign-in
        },
      });

      if (error) throw error;
    } catch (err) {
      console.error("Error signing in with Google:", err);
      setError("Failed to sign in. Please try again.");
    } finally {
      setSigningIn(false);
    }
  };

  /**
   * Handle user sign-out
   */
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setUser(null);
      setMessageText("");

      if (realtimeChannel) {
        await realtimeChannel.unsubscribe();
        setRealtimeChannel(null);
      }
    } catch (err) {
      console.error("Error signing out:", err);
      setError("Failed to sign out. Please try again.");
    }
  };

  /**
   * Submit a message to the guestbook
   * Only available for authenticated users
   */
  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    if (!messageText.trim()) {
      setError("Message cannot be empty");
      return;
    }

    if (!user) {
      setError("You must be signed in to leave a message");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      // Insert message with authenticated user's ID and display info
     const { error: insertError } = await supabase
  .from("guestbook")
  .insert([
    {
      user_id: user.id,
      display_name:
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.email,

      avatar_url: user.user_metadata?.avatar_url || null,

      email: user.email,

      message: messageText.trim(),
    },
  ]);

      if (insertError) throw insertError;

      // Clear the form
      setMessageText("");

      // Messages will be automatically added via realtime subscription
      // No need to manually fetch
    } catch (err) {
      console.error("Error submitting message:", err);
      setError("Failed to submit message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Format a timestamp as a relative "time ago" string,
   * e.g. "about 1 month ago", "5 months ago", "12 months ago"
   */
  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    if (seconds < 60) return "just now";

    const intervals = [
      { label: "year", secs: 31536000 },
      { label: "month", secs: 2592000 },
      { label: "week", secs: 604800 },
      { label: "day", secs: 86400 },
      { label: "hour", secs: 3600 },
      { label: "minute", secs: 60 },
    ];

    for (const { label, secs } of intervals) {
      const count = Math.floor(seconds / secs);
      if (count >= 1) {
        return count === 1 ? `about 1 ${label} ago` : `${count} ${label}s ago`;
      }
    }

    return "just now";
  };

  /**
   * Get a display name for a message author
   */
  const getDisplayName = (msg) => {
  return msg.display_name || "Anonymous";
};

  /**
   * Get an avatar image url for a message author, if available
   */
  const getAvatarUrl = (msg) => {
  return msg.avatar_url || null;
};
  /**
   * Deterministic background color for letter avatars,
   * based on the author's display name
   */
  const getAvatarColor = (name) => {
    const colors = [
      "bg-green-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-indigo-500",
      "bg-teal-500",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  /**
   * Initials for a letter avatar
   */
  const getInitials = (name) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen font-archivo bg-black text-white animate-fade-in">
        <NavbarDemo />
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 pt-32">
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-lg">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-archivo bg-black text-white animate-fade-in">
      {/* Universal Navbar */}
      <NavbarDemo />

      {/* Main Container */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 pt-32">
        {/* Breadcrumb */}
        
        {/* Header Section */}
        <div className="space-y-3 mb-8 animate-fade-in animation-delay-100">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-200">
            Shout<span className="text-green-400">outs.</span>
          </h1>
          <p className="text-gray-400 italic  animate-fade-in animation-delay-300">
              The universe may be harsh, but you can still share a kind word here.

          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 animate-fade-in">
            {error}
          </div>
        )}

        {/* Polaroid-style prompt card */}
        <div className="relative mb-12 rounded-xl overflow-hidden border border-slate-700/50 animate-fade-in animation-delay-400 group">
  {/* Background gif */}
  <div className="relative h-74 md:h-80 lg:h-96 w-full">
    <img
      src="/fire-writing.gif"
      alt="Profile"
      className="w-full h-full object-cover MB-10"
    />    
  </div>
</div>

        {/* Authentication / Message Form Section */}
        {!user ? (
          <div className="flex items-center gap-3 mb-12 animate-fade-in animation-delay-500">
            <button
              onClick={handleSignInWithGoogle}
              disabled={signingIn}
              className="px-5 py-1.5 text-sm border border-green-500/50 text-green-400 rounded-md hover:bg-green-500/30 hover:border-green-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {signingIn ? "Signing in..." : "Sign in"}
            </button>
            <span className="text-gray-400 text-sm">To leave a message</span>
          </div>
        ) : (
          <div className="mb-12 bg-slate-800/40 border border-slate-700/50 rounded-lg p-6 animate-fade-in animation-delay-500">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt={user.user_metadata?.full_name || "User"}
                    className="w-10 h-10 rounded-full border border-green-400"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${getAvatarColor(
                      user.user_metadata?.full_name || user.email || "U",
                    )}`}
                  >
                    {getInitials(
                      user.user_metadata?.full_name || user.email || "U",
                    )}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-white">
                    {user.user_metadata?.full_name || user.email}
                  </p>
                  <p className="text-xs text-gray-400">Signed in</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-1.5 text-sm border border-red-500/50 text-red-400 rounded-md hover:bg-red-500/10 transition-all duration-300 hover:border-red-400 font-semibold"
              >
                Sign Out
              </button>
            </div>

            <form onSubmit={handleSubmitMessage} className="space-y-3">
              <textarea
                placeholder="Share your thoughts, feedback, or just say hi..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                maxLength={500}
                rows="3"
                className="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-400 transition-colors duration-300 resize-none text-sm"
                disabled={isSubmitting}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {messageText.length}/500 characters
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting || !messageText.trim()}
                  className="px-6 py-2 border border-green-500/50 text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300 hover:border-green-400 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm"
                >
                  {isSubmitting ? "Submitting..." : "Sign Guestbook"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Messages Section */}
        <div className="animate-fade-in animation-delay-600">
          <h2 className="text-2xl font-bold text-white mb-6">
            Recent Messages
          </h2>

          {fetchingMessages ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-12 border-t border-slate-800">
              <p className="text-gray-400 text-lg">
                No messages yet. Be the first one to sign the guestbook!
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-800">
              {messages.map((msg, idx) => {
                const displayName = getDisplayName(msg);
                const avatarUrl = getAvatarUrl(msg);

                return (
                  <div
                    key={msg.id}
                    className="py-5 animate-fade-in"
                    style={{ animationDelay: `${0.7 + idx * 0.06}s` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {avatarUrl ? (
                        <img
                          src={avatarUrl}
                          alt={displayName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${getAvatarColor(
                            displayName,
                          )}`}
                        >
                          {getInitials(displayName)}
                        </div>
                      )}
                      <span className="font-semibold text-white">
                        {displayName}
                      </span>
                      <span className="text-sm text-gray-500">
                        {timeAgo(msg.created_at)}
                      </span>
                      {msg.user_id === user?.id && (
                        <span className="text-xs text-green-400 font-semibold border border-green-500/40 rounded-full px-2 py-0.5">
                          You
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 leading-relaxed break-words whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

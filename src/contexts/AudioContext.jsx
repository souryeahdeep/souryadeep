import { createContext, useContext, useRef, useCallback, useEffect, useState } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  // Initialize audio and restore state on mount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.crossOrigin = "anonymous";
    }

    // Restore audio state from sessionStorage
    const savedAudioState = sessionStorage.getItem("audioState");
    if (savedAudioState) {
      try {
        const { src, loop, isPlaying, currentTime } = JSON.parse(savedAudioState);
        if (src) {
          audioRef.current.src = src;
          audioRef.current.loop = loop;
          audioRef.current.currentTime = currentTime || 0;
          
          if (isPlaying) {
            audioRef.current.play().catch((error) => {
              console.log("Audio resume failed:", error);
            });
          }
        }
      } catch (error) {
        console.log("Error restoring audio state:", error);
      }
    }

    setInitialized(true);

    // Save audio state periodically
    const saveState = () => {
      if (audioRef.current) {
        const state = {
          src: audioRef.current.src,
          loop: audioRef.current.loop,
          isPlaying: !audioRef.current.paused,
          currentTime: audioRef.current.currentTime,
        };
        sessionStorage.setItem("audioState", JSON.stringify(state));
      }
    };

    // Save state every 500ms
    const interval = setInterval(saveState, 500);

    // Stop audio and clear state when page is being unloaded or hidden
    const handleBeforeUnload = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      sessionStorage.removeItem("audioState");
    };

    // Handle page visibility change (mobile tab switching, minimizing, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, stop audio
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const playAudio = useCallback((src, loop = false) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.crossOrigin = "anonymous";
    }
    if (audioRef.current.src !== src) {
      audioRef.current.src = src;
      audioRef.current.currentTime = 0;
    }
    audioRef.current.loop = loop;
    audioRef.current.play().catch((error) => {
      console.log("Audio play failed:", error);
    });

    // Save state to sessionStorage
    const state = {
      src,
      loop,
      isPlaying: true,
      currentTime: 0,
    };
    sessionStorage.setItem("audioState", JSON.stringify(state));
  }, []);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // Clear audio state from sessionStorage
      sessionStorage.removeItem("audioState");
    }
  }, []);

  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      // Save paused state
      const state = {
        src: audioRef.current.src,
        loop: audioRef.current.loop,
        isPlaying: false,
        currentTime: audioRef.current.currentTime,
      };
      sessionStorage.setItem("audioState", JSON.stringify(state));
    }
  }, []);

  const resumeAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio resume failed:", error);
      });
      // Save playing state
      const state = {
        src: audioRef.current.src,
        loop: audioRef.current.loop,
        isPlaying: true,
        currentTime: audioRef.current.currentTime,
      };
      sessionStorage.setItem("audioState", JSON.stringify(state));
    }
  }, []);

  const value = {
    playAudio,
    stopAudio,
    pauseAudio,
    resumeAudio,
    audioRef,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}

export function useGlobalAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useGlobalAudio must be used within AudioProvider");
  }
  return context;
}

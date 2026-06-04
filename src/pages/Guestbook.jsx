import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    name: "Ayan",
    text: "Bro your portfolio is insane 🔥",
    reactions: { "🔥": 3, "❤️": 2, "😎": 1 },
  },
  {
    id: 2,
    name: "Riya",
    text: "Love the cyberpunk theme!",
    reactions: { "🔥": 1, "❤️": 4, "😎": 2 },
  },
];

export default function FanWall() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMsg, setNewMsg] = useState("");
  const [name, setName] = useState("");

  const addMessage = () => {
    if (!newMsg || !name) return;

    const msg = {
      id: Date.now(),
      name,
      text: newMsg,
      reactions: { "🔥": 0, "❤️": 0, "😎": 0 },
      isNew: true,
    };

    setMessages([msg, ...messages]);
    setNewMsg("");
    setName("");

    setTimeout(() => {
      msg.isNew = false;
      setMessages((prev) => [...prev]);
    }, 1500);
  };

  const react = (id, emoji) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? {
              ...msg,
              reactions: {
                ...msg.reactions,
                [emoji]: msg.reactions[emoji] + 1,
              },
            }
          : msg
      )
    );
  };

  const getTopComment = () => {
    return messages.reduce((top, curr) => {
      const currScore = Object.values(curr.reactions).reduce(
        (a, b) => a + b,
        0
      );
      const topScore = Object.values(top.reactions).reduce(
        (a, b) => a + b,
        0
      );
      return currScore > topScore ? curr : top;
    }, messages[0]);
  };

  const topComment = getTopComment();

  return (
    <div className="fanwall-container">
      <h1 className="title">⚡ FAN WALL</h1>

      {/* Input */}
      <div className="input-box">
        <input
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Drop your message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button onClick={addMessage}>Post</button>
      </div>

      {/* Top Comment */}
      {topComment && (
        <div className="top-comment">
          🏆 Top Comment:
          <p>{topComment.text}</p>
          <span>- {topComment.name}</span>
        </div>
      )}

      {/* Messages */}
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.isNew ? "glitch" : ""}`}
          >
            <h4>{msg.name}</h4>
            <p>{msg.text}</p>

            <div className="reactions">
              {["🔥", "❤️", "😎"].map((emoji) => (
                <button key={emoji} onClick={() => react(msg.id, emoji)}>
                  {emoji} {msg.reactions[emoji]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
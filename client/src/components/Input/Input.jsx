import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="sendButton" type="submit">
        Send
      </button>
    </form>
  );
};

export default Input;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("Default Room");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && room) {
      navigate(`/chat?name=${name}&room=${room}`);
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="joinInput"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Room"
              className="joinInput mt-20"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />
          </div>
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;

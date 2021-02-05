import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase"

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(user);
    db.collection('posts').add({
        profilePic:user.photoURL,
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        username:user.displayName,
        image:inputUrl
    })
    setInput("");
    setInputUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <form>
          <Avatar src="https://i.pinimg.com/originals/f3/e4/ed/f3e4ed6f8193764373620fec76061cf4.jpg" />
          <input
            type="text"
            placeholder={`watsup man !! ${user.displayName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
          />
          <input
            type="text"
            placeholder="image url!"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="messageSender__option"
          />
          <button onClick={handlesubmit} type="submit">
            HIdden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

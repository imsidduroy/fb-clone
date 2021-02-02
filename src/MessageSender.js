import React from 'react'
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender() {

    const handlesubmit = (e)=>{
        e.preventDefault();
    }

    return (
      <div className="messageSender">
        <div className="messageSender__top">
            
          <form>
          <Avatar  src="https://i.pinimg.com/originals/f3/e4/ed/f3e4ed6f8193764373620fec76061cf4.jpg" />
            <input
              type="text"
              placeholder="watsup bro!!"
              className="messageSender__input"
            />
            <input
              type="text"
              placeholder="image mann!"
              className="messageSender__option"
            />
            <button onClick={handlesubmit} type="submit">
              HIdden Submit
            </button>
          </form>
          </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
    );
}

export default MessageSender

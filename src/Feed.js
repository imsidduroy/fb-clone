import React from 'react'
import StoryReel from './StoryReel.js';
import "./Feed.css";
import MessageSender from './MessageSender.js';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {/* storyReel */}
            {/* messegecomp */}
        </div>
    )
}

export default Feed
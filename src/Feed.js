import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
    // console.log('hey man',posts)
  }, [])
  
  const img="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/3bickkpx4phi51po_1608620921.jpeg?tr=w-758,h-433"
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
      <Post
        // key={Date.now()}
        // profilePic={img}
        // message="msg bro"
        // timestamp={Date.now()}
        // username='chanduboi'
        // image={img}
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
      />
       ))} 
    </div>
  );
}

export default Feed;
import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from '../../Firebase/firebase'
import TweetBox from './TweetBox/TweetBox'
import Post from '../../Post/Post'
import FlipMove from 'react-flip-move'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('post').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2>Home</h2>
        <StarBorderIcon className='starIcon' />
      </div>

      {/* Tweet box */}

      <TweetBox />
      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  )
}

export default Feed

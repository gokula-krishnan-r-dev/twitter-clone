import { Avatar, Button } from '@mui/material'
import React, { useState, useRef } from 'react'
import db from '../../../Firebase/firebase'
import './TweetBox.css'
// import inputRef from './'
const TweetBox = () => {
  const inputRef = useRef()
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')
  // const inputFocus = () => {
  //   inputRef.current.focus()
  // }
  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('post').add({
      displayName: 'gokula krishnan',
      username: '@gokula',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVW6tRa_qW83fppIYIFced0ZU96MQixbuoag8FH9umQQ&s',
    })
    setTweetImage('')
    setTweetMessage('')
  }
  return (
    <div className='tweetbox'>
      <form>
        <div className='tweetbox__input'>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVW6tRa_qW83fppIYIFced0ZU96MQixbuoag8FH9umQQ&s' />
          <input
            type='text'
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
          />
        </div>
        <input
          type='text'
          className='tweetbox__inputImage'
          placeholder='Optional: Enter image URL'
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
        />

        <Button
          className='tweetBox__tweetButton'
          type='submit'
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox

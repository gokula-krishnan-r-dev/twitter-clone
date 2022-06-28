import React from 'react'
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search'
const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's heppening</h2>
        <TwitterTweetEmbed tweetId={'1521202951230046210'} />
        <TwitterTweetEmbed tweetId={'1520650036865949696'} />
        <TwitterTweetEmbed tweetId={'1520155279769317377'} />
        <TwitterTweetEmbed tweetId={'1520150892456030208'} />
        <TwitterTweetEmbed tweetId={'1520017094007476224'} />
        <TwitterTweetEmbed tweetId={'1519500388738682880'} />
        <TwitterTweetEmbed tweetId={'1519461793604661248'} />
        <TwitterTweetEmbed tweetId={'1519226826706497537'} />
        <TwitterTweetEmbed tweetId={'1519164525731188736'} />
        <TwitterTweetEmbed tweetId={'1519046094461702145'} />
        <TwitterTweetEmbed tweetId={'1521185533719838722'} />
      </div>
    </div>
  )
}

export default Widgets

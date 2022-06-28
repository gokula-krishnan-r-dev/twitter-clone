import React, { useRef } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}
      <TwitterIcon className='sidebar__twittericon' />

      {/* sidebaroptions */}
      <SidebarOption active text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={ExploreIcon} />
      <SidebarOption text='Notifications' Icon={NotificationsNoneIcon} />
      <SidebarOption text='Messages' Icon={MailOutlineIcon} />
      <SidebarOption text='Bookmarks' Icon={BookmarkIcon} />
      <SidebarOption text='Lists' Icon={FormatListBulletedTwoToneIcon} />
      <SidebarOption text='Profile' Icon={PeopleOutlinedIcon} />
      <SidebarOption text='More' Icon={MoreHorizTwoToneIcon} />
      {/* sidebaroptions */}
      {/* sidebaroptions */}
      {/* sidebaroptions */}
      {/* sidebaroptions */}
      {/* sidebaroptions */}

      {/* Button -> tweet */}
      <button className='sidebar__tweet'>Tweet</button>
    </div>
  )
}

export default Sidebar

import React from 'react'
import './SidebarOption.css'
const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebaroption ${active && 'sidebar--active'}`}>
      <Icon />
      <h1>{text}</h1>
    </div>
  )
}

export default SidebarOption

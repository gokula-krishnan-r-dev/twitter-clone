import React from 'react'
import Sidebar from './Componats/Sidebar/Sidebar'
import './App.css'
import Feed from './Componats/Sidebar/Feed/Feed'
import Widgets from './Widgets/Widgets'
const App = () => {
  return (
    <div className='app'>
      {/* sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  )
}

export default App

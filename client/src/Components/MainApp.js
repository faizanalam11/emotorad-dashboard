import React from 'react'
import MainComponent from './MainComponent'
import Sidebar from './Sidebar'

const MainApp = ({setIsLoggedIn}) => {
  return (
    <div>
        <div className="App min-h-screen grid grid-cols-12">
            <Sidebar setIsLoggedIn={setIsLoggedIn}/>
            <MainComponent />
        </div>
    </div>
  )
}

export default MainApp

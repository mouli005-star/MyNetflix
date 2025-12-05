import React from 'react'
import './Navibar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile_img.png'
import drop_down from '../../assets/drop_down.png'

const Navibar = () => {
  return (
    <div className = 'navibar'>
      <div className="navibar-left">
        <img src={logo} alt="Logo" className="navibar-logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browsing Language</li>
        </ul></div>
        <div className="navibar-right">
        <img src={search_icon} alt="Search" className="icon" />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className="bell" />
        <div className="navibar-profile">
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={drop_down} alt=""  className = "drop" />
          <div className="dropdown"><p>
            Sign Out</p></div>
           
          </div>
        </div>

      </div>
    
  )
}
export default Navibar

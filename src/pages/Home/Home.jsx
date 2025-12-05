
import React from 'react'
import './Home.css'
import Navibar from '../../components/NaviBar/Navibar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.jpg'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
const Home = () => {
  return (
<div className="home">
  <Navibar />

  <div className="hero">
    <img src={hero_banner} alt="Hero Banner" className="bannerimg" />

    <div className="herocaption">
      <img src={hero_title} alt="Hero Title" className="captionimg" />

      <p>
Kalki 2898 AD is a futuristic sci-fi epic set in a dystopian world, blending mythology with advanced technology. The story follows powerful characters entangled in the prophecy of Kalki, the final avatar destined to restore balance. With grand visuals and intense world-building, the film reimagines ancient legends in a post-apocalyptic future.      </p>

      <div className="herobtns">
        <button className="btns">
          <img src={play_icon} alt="Play" /> Play
        </button>

        <button className="darkbtns">
          <img src={info_icon} alt="Info" /> More Info
        </button>
      </div>
    </div>  
  </div>
</div>
  )}
export default Home
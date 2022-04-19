import React from 'react'
import './styles/Videos.css'
import FILES from '../CONSTANTS/Files'
import { AiFillPlayCircle } from "react-icons/ai";
function Videos({title, airDate,description}) {

  const fullScree = ()=>{
    var full = document.getElementById('video-full')
    if (full.requestFullscreen) {
      full.requestFullscreen() 
    } else if (full.msRequestFullscreen) {
      full.msRequestFullscreen();
    } else if (full.mozRequestFullScreen) {
      full.mozRequestFullScreen();
    } else if (full.webkitRequestFullscreen) {
      full.webkitRequestFullscreen();
    }

  }

  const playVideo = ()=>{
    var full = document.getElementById('video-full')
    full.play()
  }
  return (
    <div className='main'>
        <div className='sub'> 
            <div className='video-main'>
            <video className='video-assets' id= 'video-full' >
                <source src={FILES.PLACEHOLDER_VIDEO} type="video/mp4"/>
            </video>
            <div className='play-button'>
              <AiFillPlayCircle size={60} onClick={()=>{fullScree(); playVideo() }}style={{color:"white"}}/>
            </div>
            </div>
            <div className='video-content'>
                <h1>{title}</h1>
                <p>{airDate}</p>
                <span>{description}</span>
            </div>
        </div>
    </div>
  )
}

export default Videos
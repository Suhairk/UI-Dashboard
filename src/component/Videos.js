import React from 'react'
import './styles/Videos.css'
import FILES from '../CONSTANTS/Files'
function Videos({title, airDate,description}) {
  return (
    <div className='main'>
        <div className='sub'>
            <div className='video-main'>
            <video className='video-assets' controls >
                <source src={FILES.PLACEHOLDER_VIDEO} type="video/mp4"/>
            </video>
            </div>
            <div className='video-content'>
                <h1>{title}</h1>
                <p>{airDate}</p>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Videos
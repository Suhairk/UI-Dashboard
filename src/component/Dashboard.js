import React, { useState } from 'react'
import './styles/Dashboard.css'

import Videos from './Videos'
import Carousel from "react-elastic-carousel";
import {getEpisodesAPI} from '../Services/API'
const breakPoints =[
    {width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: true },
    { width: 850, itemsToShow: 1 },
    { width: 1150, itemsToShow: 1, itemsToScroll: 1 , pagination:true},
    { width: 1450, itemsToShow: 1 },
    { width: 1750, itemsToShow: 1 },
]

// const body = [
//     {title:"title",originalAirDate:"airDate", desc:"A pizza delivery boy named Philip J. Fry accidentally stumbles into a cryogenic tube on Dеcember 31, 1999 and awakens on New Year's Eve in the year 2999, where he meets a mutant career counselor named Leela, an alcoholic robot named Bender, and his distant nephew Professor Farnsworth."},
//     {title:"aaa",originalAirDate:"aaa", desc:"A pizza delivery boy named Philip J. Fry accidentally stumbles into a cryogenic tube on Dеcember 31, 1999 and awakens on New Year's Eve in the year 2999, where he meets a mutant career counselor named Leela, an alcoholic robot named Bender, and his distant nephew Professor Farnsworth."},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
//     {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
// ]

function Dashboard() {
    const [episode, setEpisode] = useState('')
        getEpisodesAPI().then((res)=>{
            //console.log(res.data)
            setEpisode(res.data)
        })
   const body = Array.from(episode)
        //console.log(body)
       
    
  return (
    <div className='dash-board-main' >
        <Carousel  breakPoints = {breakPoints}>
        {body.map((itr, id)=>{
               return <Videos key={id} title = {itr?.title} airDate = {itr?.originalAirDate} description = {itr?.desc}/>
           })}
            
        </Carousel>  
        <svg viewBox="0 0 1440 319">
        <path fill="#fff" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> 
    </div>
    
  )
}

export default Dashboard
import React, { useState } from 'react'
import './styles/Dashboard.css'

import Videos from './Videos'
import Carousel from "react-elastic-carousel";
import {getEpisodesAPI} from '../Services/API'
const breakPoints =[
    {width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: true },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 1, itemsToScroll: 1 , pagination:true},
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
]

const body = [
    {title:"title",originalAirDate:"airDate", desc:"A pizza delivery boy named Philip J. Fry accidentally stumbles into a cryogenic tube on Dеcember 31, 1999 and awakens on New Year's Eve in the year 2999, where he meets a mutant career counselor named Leela, an alcoholic robot named Bender, and his distant nephew Professor Farnsworth."},
    {title:"aaa",originalAirDate:"aaa", desc:"A pizza delivery boy named Philip J. Fry accidentally stumbles into a cryogenic tube on Dеcember 31, 1999 and awakens on New Year's Eve in the year 2999, where he meets a mutant career counselor named Leela, an alcoholic robot named Bender, and his distant nephew Professor Farnsworth."},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
    {title:"aaa",originalAirDate:"aaa", desc:"aaa"},
]

function Dashboard() {
    const [epi, setEpi] = useState('')
        getEpisodesAPI().then((res)=>{
            //console.log(res.data)
           setEpi(res.data)
        })
   const body1 = epi;
        console.log(body1)
       
    //console.log("epi title is", epi.title)
    
  return (
    <div className='dash-board-main'>
        <div className='dash-board-title'>
            <h1>DASHBOARD</h1>
        </div>
        <Carousel  breakPoints = {breakPoints}>
        {body.map((itr, id)=>{
               return <Videos key={id} title = {itr?.title} airDate = {itr?.originalAirDate} description = {itr?.desc}/>
           })}
            
        </Carousel>        
    </div>
  )
}

export default Dashboard
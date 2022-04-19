import React, {} from 'react'
import './styles/Dashboard.css'

import Videos from './Videos'
import Carousel from "react-elastic-carousel";
import {getEpisodesAPI} from '../Services/API'
const breakPoints =[
    {width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: true },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 , pagination:true},
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
]

function Dashboard() {
    let array = []
        getEpisodesAPI().then((res)=>{
            //console.log(res.data)
           array.push(res.data)
        })
    console.log("array is", array)
    
  return (
    <div className='dash-board-main'>
        <div className='dash-board-title'>
            <h1>DASHBOARD</h1>
        </div>
        <Carousel  breakPoints = {breakPoints} >
            {array.map((itr,id)=>{
            <Videos key={id} title = {itr?.title} airDate = {itr?.originalAirDate} description = {itr?.desc}/>
                })}
        </Carousel>
        <Videos/>
        
    </div>
  )
}

export default Dashboard
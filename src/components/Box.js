import React from 'react'
// import {useState} from 'react'
import './Box.css'


export default function Box(props) {
  const styles ={
    backgroundColor: props.on ? "#222222":"white"
  }
  return (
   <div
    className="boxData" 
    style={styles}  
     onClick={props.toggle}
     
     ></div>
  )
}

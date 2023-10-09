import React from 'react'
import '../style.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";


const handleEmail = () =>{
    window.open('mailto:rluiscabrera10@gmail.com', '_blank');
}
const handleLinkedIn = () =>{
    window.open('https://www.linkedin.com/in/robert-cabrera-7ba5b722a', '_blank');
}


export default function Buttons(){
    return(
        <div className='buttons--wrap'>
                <button 
                onClick={handleEmail}
                className='buttons--email'>  <div className='--email--icon'> <FaRegEnvelope/> </div> Email </button>
                <button 
                onClick={handleLinkedIn}
                className='buttons--linkedin'>  <div className='--linkedin--icon'> <FaLinkedin/> </div> LinkedIn</button>
        </div>
    )
}
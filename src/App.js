import React from 'react'
import './style.css'
import headshot from './images/img_1.png'
import Info from './components/Info'
import Buttons from './components/Buttons'
import About from './components/About'


export default function App() {
    return (
        <>
        <div className='app--wrap'>
            <img src={headshot} alt='' className='app--wrap--headshot'></img>
                <Info />
                <Buttons />
                <About />
        </div>
        </>
    )
}
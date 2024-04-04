import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import { VscDebugRestart } from "react-icons/vsc";
import "./Cards.css"
const Card = () => {
  return (
    <div className='cards'>
        <div className='card1'><h3><CiDeliveryTruck className='card1icon' /></h3><h4>Worldwide Delivery</h4>
        <p>Far far away, behind the word mountains, far from the countries.</p> 
        </div>
        <div className='card2'><h3><GoShieldLock  className='card2icon'/></h3><h4>Secure Payments</h4>
        <p>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        <div className='card3'><h3><VscDebugRestart  className='card3icon'/></h3><h4>Simple Returns</h4>
        <p>Far far away, behind the word mountains, far from the countries.</p>
        </div>
    </div>
  )
}

export default Card
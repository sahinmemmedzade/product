import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
   <div className='allfooter'>
    <div className='footer1'>
     <div className='aboutus'>
        <h6>Help</h6>
        <span>Contact us</span>
        <span>Account</span>
        <span>Shipping</span>
        <span>Returns</span>
        <span>FAQ</span>
     </div>
     <div className='aboutus'>
        <h6>About</h6>
        <span>About us</span>
        <span>Press</span>
        <span>Careers</span>
        <span>Team</span>
        <span>FAQ</span>
     </div>
     <div className='aboutus'>
        <h6>Shop</h6>
        <span>Store</span>
        <span>Gift Cards</span>
        <span>Student Discount</span>
     </div>
     <div className='email'>
        <h6>Join our list and receive exclusives</h6>
        <div><input className='input' type="e-mail" placeholder='Email Adress' style={{height:"42px" , width:"400px"}} /><button style={{backgroundColor:"black" , color:"white" , fontSize:"12px" ,width:"120px", height:"42px", paddingTop:"5px"}} className='button'>SUBSCRIBE</button></div>
     </div>
   </div>
   <div className='footer2' >
    <span className='footer2span'>Copyright ©2024 All rights reserved | This template is made with ❤ <a href="" style={{color:"black"}}>Calorlib</a></span>
   </div>
   </div>
  )
}

export default Footer
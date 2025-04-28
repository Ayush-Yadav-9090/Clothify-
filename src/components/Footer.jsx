import './footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="company-info">
            <h2>CLOTHIFY</h2>
            <p>At Clothify, we’re passionate about bringing you the latest trends in fashion at great prices. Our goal is to offer stylish and high-quality clothing that fits your unique style and needs. With a wide range of options for every occasion, shopping with Clothify is always simple and fun. Let us help you express yourself through fashion!</p>
          </div>

          <div class="footer-links">
            <h2>SECTION</h2>
            <ul>
              <li><Link to="/Home" style={{ textDecoration: 'none',color:'none' }}>HOME</Link></li>
              <li><Link to="/ABOUT" style={{ textDecoration: 'none' }}>ABOUT</Link></li>
              <li><Link to="/Policypage" style={{textDecoration:'none'}}>DELIVERY</Link></li>
              <li><Link to="/Policypage" style={{textDecoration:'none'}}>PRIVACY POLICY</Link></li>
            </ul>
          </div>

          <div class="contact-info">
            <h2><Link to="/Contact" style={{ textDecoration: 'none' ,color:"white" }}>CONTACT_US</Link></h2>
            <p>Phone number: 9100******</p>
            <p>Email: <a href="mailto:abccompany@123.com">clothifycompany@123.com</a></p>
          </div>

        </div>
        <div className='copyright'>
          <p>Copyright 2024-Present@ CLOTHIFY.com-All Right Reserved</p>
        </div>
      </footer>

    </>
  )
}
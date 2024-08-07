import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="footer-container">

      <div className="row1">
        <div className="col1">
          <h3 className='footer-title'><span class="underline">WELCOME TO OUR FITNESS STUDIO</span></h3>
          <ul className='footer-text'>
            <li>CHENNAI</li>
            <li>WEST AMRAVATHI</li>
            <li>LULU FITNESS STUDIO</li>
          </ul>
        </div>

        <div className="col2">
          <h3 className='footer-title'><span class="underline">TRAINERS</span></h3>
          <ul className='footer-text'>
            <li><a href="/home">Rob Riches</a></li>
            <li><a href="/contact">oey Swoll</a></li>
            <li><a href="/contact">Bob Marley</a></li>
            <li><a href="/contact">Arnold</a></li>
          </ul>
        </div>
      </div>

      <div className="row3">
        <div className="col4">
          <h3 className='footer-title'><span class="underline">Contact</span></h3>
          <ul className='footer-text'>
            <li>+91 9874563210</li>
          </ul>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Footer
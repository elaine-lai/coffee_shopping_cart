import React from 'react'
import './footer.css'
import bb_logo from '../assets/bb_logo_cup.png'

export const Footer = () => {
  return (
      <footer className='footer'>
        <p><img src={bb_logo} alt="" className='logoFooter' style={{ verticalAlign: 'bottom' }}/> Beanstack Brews, 2024</p>
      </footer>
  )
}


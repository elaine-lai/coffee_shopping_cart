import "./navbar.css"
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom' 
import { ShoppingCart} from 'phosphor-react'
import logo from '../assets/bb_logo.png'

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className='navbar'>
      <Link to='/'className="logo">
        <img src={logo} alt="" className="logoImg" />
      </Link>
      <div>
        <span className="logoTitle">Beanstack Brews</span>
      </div>
      <div className="links">
        <Link to='/' className={`shop ${location.pathname === '/' ? 'active' : ''}`}>Shop</Link>
        <Link to='/cart' className={`cart ${location.pathname === '/cart' ? 'active' : ''}`}>
          <ShoppingCart className="shoppingCartIcon"/></Link>
      </div>
    </div>
  )
}
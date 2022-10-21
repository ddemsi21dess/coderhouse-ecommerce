import React from 'react'
import { Items } from './Items'

export const Navbar = () => {
  return (
    
    // <nav className='navbar'>
    //     <img src= './logo192.png' alt='logo'></img>     
    //       <Items name='TVs'/>
    //       <Items name='Notebooks'/>
    //       <Items name='Speakers'/>       
    // </nav>
    <>
      <header className='header'>
        <nav className='navbar'>
          <a href="#" class='logo'>Logo</a>
          <ul>
            <li className='nav-menu-item'>
              <a href='#' class='nav-menu-link'>TVs</a>
            </li>
            <li className='nav-menu-item'>
              <a href='#' class='nav-menu-link'>Notebooks</a>
            </li>
            <li className='nav-menu-item'>
              <a href='#' class='nav-menu-link'>Speakers</a>
            </li>
            <li className='nav-menu-item'>
              <a href='#' class='nav-menu-link'>Headphone</a>
            </li>
          </ul>
        </nav>
      </header>
    
    </>
  )
}

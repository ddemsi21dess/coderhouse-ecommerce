import React from 'react'

export const NavbarItem = ({name,key,isActive}) => {
  return (
    <>
     <li className={`nav-menu-item ${isActive ? 'nav-menu-link_active' : ''}`} key={key} >
      <a href="#" className="nav-menu-link nav-link">{name}</a>
     </li>    
    </>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NavbarItem = ({name , id , isActive}) => {
  const navigate = useNavigate();
  
  const onHandleClick = () =>{
    navigate(`/category/${id}`);
  }

  return (
    <>
      <li className={`nav-menu-item ${isActive ? 'nav-menu-link_active' : ''}`}  onClick={onHandleClick}>
        <a className="nav-menu-link nav-link">{name}</a>
      </li>
    </>
  )
}

export default NavbarItem;
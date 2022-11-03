import React from 'react'
import { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';

export const NavbarItem = ({name , id , isActive}) => {

  const {categoryId, setCategoryId} =  useContext(CategoryContext);

  return (
    <>
      <li className={`nav-menu-item ${isActive ? 'nav-menu-link_active' : ''}`}  onClick={()=>setCategoryId(id)}>
        <a href={"#"} className="nav-menu-link nav-link">{name}</a>
      </li>
    </>
  )
}

export default NavbarItem;
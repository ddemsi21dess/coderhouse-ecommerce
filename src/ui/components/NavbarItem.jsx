import React from 'react'
import { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';

export const NavbarItem = ({name , id , isActive}) => {

  const {categoryId, setCategoryId, setProductId} =  useContext(CategoryContext);

  const onHandleClick = () =>{
    setProductId(undefined);
    setCategoryId(id);
  }

  return (
    <>
      <li className={`nav-menu-item ${isActive ? 'nav-menu-link_active' : ''}`}  onClick={onHandleClick}>
        <a href={"#"} className="nav-menu-link nav-link">{name}</a>
      </li>
    </>
  )
}

export default NavbarItem;
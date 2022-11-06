import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryContext';

export const NavbarItem = ({name , id , isActive}) => {

  const navigate = useNavigate();
  
  const { setCategoryId } =  useContext(CategoryContext);

  const onHandleClick = () =>{
    setCategoryId(id);
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
import React, { useContext } from 'react'

import { CategoryContext } from '../../context/CategoryContext';

import { CartWidget } from './CartWidget';
import { NavbarItem } from './NavbarItem';

import { menuItems } from '../../data/menuItems';



export const Navbar = () => {
    const { categoryId, totalProducts } = useContext(CategoryContext);

  return (
    <>            
        <header className="header">
            <nav className="nav">
            
                <ul className="nav-menu">
                    <li className="nav-menu-item" key='logo'>
                        <a href="#" className="logo nav-link">
                            <img src= './logo.png' alt='logo' className='logo' />    
                        </a>
                    </li>
                
                    <li className="nav-menu-item company-name" key='company-name'>
                        <a href="#" className="nav-link ">QB Store</a>
                    </li>
                </ul>

            
                <ul className="nav-menu">
                {
                    menuItems.map(item =>(                
                        <NavbarItem 
                            name={item.name} 
                            id={item.id} 
                            key={item.id ? item.id : 'all'}
                            activeId={categoryId}
                            isActive={categoryId === item.id && categoryId}
                            />
                    ))
                }              
                </ul>



                <ul className="nav-menu">
                    <li className="nav-menu-item" key='search'>
                        <input className='input-search' placeholder='Buscar' type='text'></input>
                        <button className='search-button'>Ir</button>
                    </li>
                    <li className="nav-menu-item ">
                        <CartWidget products={totalProducts}/>
                    </li>
                    <li className="nav-menu-item " key='login'>                        
                        <img src='/login.png' alt='login' className='login-img' />              
                    </li>
                    
                </ul>
            </nav>
        </header>
    </>
  )
}

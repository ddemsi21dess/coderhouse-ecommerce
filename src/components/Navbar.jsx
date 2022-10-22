import React from 'react'
import { DropdownItem } from './DropdownItem';

import { NavbarItem } from './NavbarItem';

const menuItems = [
    {name:'Televisores'  ,id:'1'},
    {name:'Celulares'    ,id:'2'},
    {name:'Climatización',id:'3'},
    {name:'Heladeras'    ,id:'4'},
    {name:'Herramientas' ,id:'5'},
  ]
  
  

export const Navbar = () => {

  const [activeId, setActiveId] = React.useState(null);

  const onHandleSelectedItem = (id) => setActiveId(id);

  return (
    <>    
        <header className="header">
            <nav className="nav">
            
                <ul className="nav-menu">
                 <li className="nav-menu-item">
                     <a href="#" className="logo nav-link">
                     <img src= './logo512.png' alt='logo' className='logo' />    
                     </a>
                 </li>
                     <li className="nav-menu-item company-name">
                     <a href="#" className="nav-link ">QB Store</a>
                 </li>
                </ul>

            
                <ul className="nav-menu">
                {
                    menuItems.map(item =>(                 
                    // <li className={`nav-menu-item ${item.isActive ? 'nav-menu-link_active' : ''}`} key={item.id} >
                    //   <a href="#" className="nav-menu-link nav-link">{item.name}</a>
                    // </li>
                    // <NavbarItem name={item.name} id={item.id} isActive={item.isActive}  onHandleClickItem={onHandleClickItem}/>
                    <NavbarItem name={item.name} id={item.id} onHandleSelectedItem={onHandleSelectedItem} activeId={activeId}/>
                    ))
                }              
                </ul>



                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <input className='input-search' placeholder='Buscar' type='text'></input>
                        <button className='search-button'>Ir</button>
                    </li>
                    <li className="nav-menu-item ">                        
                        <a href="#" className="nav-link user-name">Ingresar</a>
                    </li>
                </ul>
            </nav>
            </header>
        </>
  )
}

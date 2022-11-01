import React, { useState } from 'react'
import { ItemListContainer } from '../../components';
import { CartWidget } from './CartWidget';
import { NavbarItem } from './NavbarItem';
import { Sidebar } from './Sidebar';

const menuItems = [
    
    {id:'100' ,type:'all'          ,name:'Ofertas'          , url:'categorias/all'},
    {id:'1'   ,type:'tv'           ,name:'Televisores'  , url:'categorias/televisores'},
    {id:'2'   ,type:'phone'        ,name:'Celulares'    , url:'categorias/celulares'},
    {id:'3'   ,type:'air'          ,name:'Climatización', url:'categorias/climatización'},
    {id:'4'   ,type:'refrigerator' ,name:'Heladeras'    , url:'categorias/heladeras'},
    {id:'5'   ,type:'tool'         ,name:'Herramientas' , url:'categorias/herramientas'},
  ]
  
  

export const Navbar = () => {

  const [activeId, setActiveId] = useState(undefined);
  const [activeName, setActiveName] = useState('');
  const [activeType, setActiveType] = useState(undefined);

  const onHandleSelectedItem = (id) => {
  
    setActiveId(id);
    
    const {name,type} =  menuItems.filter((item)=> item.id === id)[0];

    setActiveName(name);
    if (name === 'Ofertas') {
        setActiveType(undefined);
        return;
    }

    setActiveType(type);
  }
  return (
    <>            
        {/* <Sidebar name= {activeName}/> */}


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
                            key={item.id}
                            onHandleSelectedItem={onHandleSelectedItem} 
                            activeId={activeId}/>
                    ))
                }              
                </ul>



                <ul className="nav-menu">
                    <li className="nav-menu-item" key='search'>
                        <input className='input-search' placeholder='Buscar' type='text'></input>
                        <button className='search-button'>Ir</button>
                    </li>
                    <li className="nav-menu-item ">
                        <CartWidget products={100}/>
                    </li>
                    <li className="nav-menu-item " key='login'>                        
                        <img src='/login.png' alt='login' className='login-img' />              
                    </li>
                    
                </ul>
            </nav>
        </header>

                
        <ItemListContainer type={activeType}/>

    </>
  )
}

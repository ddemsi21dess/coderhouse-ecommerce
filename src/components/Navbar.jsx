import React from 'react'
import { NavbarItem } from './NavbarItem';
import { Sidebar } from './Sidebar';

const menuItems = [
    {id:'1',name:'Televisores'  , url:'categorias/televisores'},
    {id:'2',name:'Celulares'    , url:'categorias/celulares'},
    {id:'3',name:'Climatización', url:'categorias/climatización'},
    {id:'4',name:'Heladeras'    , url:'categorias/heladeras'},
    {id:'5',name:'Herramientas' , url:'categorias/herramientas'},
  ]
  
  

export const Navbar = () => {

  const [activeId, setActiveId] = React.useState(null);
  const [activeName, setActiveName] = React.useState('');

  const onHandleSelectedItem = (id) => {
    setActiveId(id);
    
    let name =  menuItems.filter((item)=> item.id === id)[0].name;
    setActiveName(name);
  }
  return (
    <>            
        <Sidebar name= {activeName}/>


        <header className="header">
            <nav className="nav">
            
                <ul className="nav-menu">
                    <li className="nav-menu-item" key='logo'>
                        <a href="#" className="logo nav-link">
                            <img src= './logo512.png' alt='logo' className='logo' />    
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
                    <li className="nav-menu-item " key='login'>                        
                        <a href="#" className="nav-link user-name">Cuenta</a>
                    </li>
                </ul>
            </nav>
        </header>


    </>
  )
}

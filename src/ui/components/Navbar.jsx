import React, { useEffect , useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import { CartWidget } from './CartWidget';
import { NavbarItem } from './NavbarItem';

import { menuItems } from '../../data/menuItems';

import LoginImage from './../resources/login.png';
import Logo from './../resources/logo.png';
import { useFetchCategories } from '../../components/hooks/useFetchCategories';

import { LoadingCategories } from './LoadingCategories';

export const Navbar = () => {

  const { categories, isLoading }  = useFetchCategories();
  const { total } =  useContext(CartContext);  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const [activeHome, setActiveHome] = useState(false);
  const [categoryName, setCategoryName] = useState(undefined);

  const showHomePage = () => navigate('/');
  const showCartPage = () => navigate('/cart');

  const getActiveCategory = () =>{
    const splitPathName = pathname.split("/");
    return splitPathName && splitPathName[2] ? splitPathName[2] : undefined;
  };


  useEffect(() => {
    setActiveHome(false);
    setCategoryName(getActiveCategory());
    if (pathname === '/') setActiveHome(true);  
  
  }, [pathname])


  return (
    <>            
        <header className="header">
            <div className="nav">
            
                <ul className="nav-menu">
                    <li className="nav-menu-item" key='logo'>
                        <a className="logo nav-link" onClick={showHomePage}>
                            <img src={Logo} alt='logo' className='logo' />
                        </a>
                    </li>
                
                    <li className="nav-menu-item company-name" key='company-name'>
                        <a className="nav-link "  onClick={showHomePage}>QB Store</a>
                    </li>
                </ul>

            
                <ul className="nav-menu">

                    <li className={`nav-menu-item ${ activeHome ? 'nav-menu-link_active' : ''}`}  onClick={showHomePage}>
                        <a className="nav-menu-link nav-link">Inicio</a>
                    </li> 

                    {

                        isLoading ? <LoadingCategories/>
                        :
                        categories.map(item =>(                
                            <NavbarItem 
                                name={item.name} 
                                id={item.id} 
                                key={item.id}
                                isActive={categoryName === item.id && categoryName}   
                                
                                />
                        ))
                    }              
                </ul>



                <ul className="nav-menu">
                    <li className="nav-menu-item ">
                        <a className="logo nav-link" onClick={showCartPage}>
                           
                            <CartWidget products={total}/>
                        </a>
                    </li>
                    <li className="nav-menu-item " key='login'>                        
                        <img src= {LoginImage} alt='login' className='login-img' />              
                    </li>
                    
                </ul>
            </div>
        </header>
    </>
  )
}

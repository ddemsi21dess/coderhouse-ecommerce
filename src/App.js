import './App.css';
import { NavbarItem } from './components/NavbarItem';

const menuItems = [
  {name:'TVs'       ,id:'cat-1', isActive:false},
  {name:'Smarphones',id:'cat-2', isActive:false},
  {name:'Speakers'  ,id:'cat-3', isActive:true},
  {name:'Headphones',id:'cat-4', isActive:false},
  {name:'SmartWatch',id:'cat-5', isActive:false},
]

function App() {
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
                  <a href="#" className="nav-menu-link nav-link ">QB</a>
              </li>
            </ul>

            <ul className="nav-menu">
              {
                menuItems.map(item =>(         
                  <NavbarItem name={item.name} key={item.id} isActive={item.isActive}/>
                ))
              }              
            </ul>
          </nav>
        </header>
    </>
  );
}

export default App;

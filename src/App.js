import './App.css';
import { Navbar } from './components/Navbar';

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
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">Blog</a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">Videos</a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">Sobre mí</a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link nav-menu-link_active"
              >Contacto</a
            >
          </li>
        </ul>
      </nav>
    </header>
  </>

    // <div classNameName="App">
    //   <Navbar/>
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

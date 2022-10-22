import React from 'react'

export const NavbarItem = ({name,id,onHandleSelectedItem,activeId}) => {

  const [active, setActive] = React.useState(false);

  const onHandleClick = () =>{
    onHandleSelectedItem(id);
  };
  
  React.useEffect(() => {
    if (activeId === id) setActive(true);
    else setActive(false);    
  }, [activeId]);
  

  return (
    <>
      <li className={`nav-menu-item ${active ? 'nav-menu-link_active' : ''}`}  key={id} onClick={onHandleClick}>
        <a href="#" className="nav-menu-link nav-link">{name}</a>
      </li>
    </>
  )
}

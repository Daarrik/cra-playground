import React from 'react';
import NavItem from './NavItem';
import { NavItems } from '../../constants/NavItems';
import { ReactComponent as PlaceholderLogo } from '../../icons/placeholder-logo.svg';

const NavBar = (props) => {
  return (
    <div className='header'>
      <a href='/'>
        <PlaceholderLogo className='logo'/>
      </a>
      <nav className='navbar'>
        {
          NavItems.map((item, idx) => (
            <NavItem
              key={idx}
              url={item.url}
              text={item.title}
              dropdown={item.dropdown}
            />
          ))
        }
      </nav>
    </div>
  );
}

export default NavBar;
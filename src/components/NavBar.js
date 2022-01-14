import React from 'react';
import NavItem from './NavItem';
import { NavItems } from '../constants/NavItems';
import { ReactComponent as PlaceholderLogo } from '../icons/placeholder-logo.svg';

const NavBar = (props) => {
  return (
    <div className='header'>
      <a href='/'>
        <PlaceholderLogo className='logo'/>
      </a>
      <div className='navbar'>
        {
          NavItems.map((button, idx) => (
            <NavItem
              key={idx}
              url={button.url}
              text={button.title}
            />
          ))
        }
      </div>
    </div>
  );
}

export default NavBar;
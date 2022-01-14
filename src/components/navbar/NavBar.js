import React from 'react';
import NavItem from './NavItem';
import { NavItems } from '../../constants/NavItems';
import { ReactComponent as PlaceholderLogo } from '../../icons/placeholder-logo.svg';

const NavBar = () => {
  const navItems =
    NavItems.map((navItem, idx) => (
      <NavItem
        key={idx}
        title={navItem.title}
        url={navItem.url}
      />
    ));

  return (
    <div className='header'>
      <a href='/'>
        <PlaceholderLogo className='logo' />
      </a>
      <nav className='navbar'>
        {
          navItems
        }
      </nav>
    </div>
  );
}

export default NavBar;
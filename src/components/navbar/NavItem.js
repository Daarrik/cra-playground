import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <Link className='nav-item' to={props.url}>
      {props.title}
    </Link>
  );
}

export default NavItem;
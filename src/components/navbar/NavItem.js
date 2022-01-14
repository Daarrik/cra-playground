import React, { useState } from 'react';

const NavItem = (props) => {
  return (
    <a className='nav-item' href={props.url}>
      {props.title}
    </a>
  );
}

export default NavItem;
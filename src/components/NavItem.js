import React from 'react';
import { ReactComponent as Chevron } from '../icons/chevron-down.svg';

const NavItem = (props) => {
  return (
    <li className='nav-item' key={props.key}>
      <a href={props.url} className='icon-button'>
        {props.text}
        <span className='chevron'>{ <Chevron /> }</span>
      </a>
    </li>
  );
}

export default NavItem;
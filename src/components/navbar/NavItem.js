import React, { useState } from 'react';
import { ReactComponent as Chevron } from '../../icons/chevron-down.svg';
import DropdownItem from '../dropdown/DropdownItem';
import DropdownMenu from '../dropdown/DropdownMenu';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <a
      className='nav-item'
      href={props.url}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {props.text}
      <span>{<Chevron />}</span>
    </a>
  );
}

export default NavItem;
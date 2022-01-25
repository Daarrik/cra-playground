import React from 'react';

const DropdownItem = (props) => {
  return (
    <li className='dropdown-item'>
      <a href={props.url}>
        {props.title}
      </a>
    </li>
  );
}

export default DropdownItem;
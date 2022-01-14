import React from 'react';

const DropdownItem = (props) => {
  return (
    <a className='nav-item'>
      {props.text}
    </a>
  )
}

export default DropdownItem;
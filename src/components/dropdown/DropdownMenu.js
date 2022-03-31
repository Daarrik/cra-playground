import React from "react";
import DropdownItem from "./DropdownItem";

const DropdownMenu = (props) => {
  return (
    <ul className="dropdown">
      {props.items.map((item, idx) => (
        <DropdownItem key={idx} title={item.title} url={item.url} />
      ))}
    </ul>
  );
};

export default DropdownMenu;

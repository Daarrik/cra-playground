const DropdownItem = (props) => {
  return (
    <li className="dropdown-item">
      <a href={props.url}>{props.title}</a>
    </li>
  );
};

export default DropdownItem;

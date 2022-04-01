import NavItem from "./NavItem";
import { NavItems } from "../../constants/NavItems";
import { ReactComponent as PlaceholderLogo } from "../../icons/placeholder-logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <Link to="/">
        <PlaceholderLogo className="logo" />
      </Link>
      <nav className="navbar">
        {NavItems.map((navItem, idx) => (
          <NavItem key={idx} title={navItem.title} url={navItem.url} />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;

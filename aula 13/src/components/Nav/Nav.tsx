import { Link } from "react-router-dom";
import { Menu } from "../../styles/Nav";

const Nav = () => {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Menu>
  );
};

export default Nav;

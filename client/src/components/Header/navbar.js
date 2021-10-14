import "./header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

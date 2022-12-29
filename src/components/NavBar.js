import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <Link to="/gallery">Gallery</Link>
      &nbsp; | &nbsp;
      <Link to="/gallery/cart">Cart</Link>
    </nav>
  );
}

export default NavBar;

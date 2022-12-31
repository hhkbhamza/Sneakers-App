import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service"

function NavBar(props, setUser) {
  function handleLogout () {
    userService.logOut()
    setUser(null)
  }



  return (
    <nav>
      <Link to="/gallery">Gallery</Link>
      &nbsp; | &nbsp;
      <Link to="/gallery/cart">Cart</Link>
      <p>Welcome, {props.user.name}</p>
      &nbsp;&nbsp;<Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}

export default NavBar;

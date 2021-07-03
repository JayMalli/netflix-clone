import StyledNavbar from "./StyledNavbar";
import logo from "../images/misc/logo-1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="navbar">
      <StyledNavbar>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/browse">
            <button type="button" className="btn">
              Sign In
            </button>
          </Link>
        </div>
        <div className="navbar-content">
          <h2>Unlimited films,TV,programmes and more</h2>
          <p>Watch anywhere.Cancel anytime</p>
          <Link to="/browse">
            <button type="button" className="btn">
              Watch Now
            </button>
          </Link>
        </div>
      </StyledNavbar>
    </header>
  );
};

export default Navbar;

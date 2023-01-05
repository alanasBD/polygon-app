import { Link } from "react-router-dom";
import "./Header.css";
import subtract from "../../images/subtract.svg";
import union from "../../images/union.svg";
import logo from "../../images/logo.svg";
function Header() {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-md-3 logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div className="col-md-6 center-menu d-flex justify-content-center align-items-center">
          <Link style={{ fontWeight: 600 }} to="#">
            Home
          </Link>
          <Link to="#">About</Link>
          <Link to="#">Service</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="col-md-3 right-menu">
          <div className="right-menu-left">
            <div>
              <span>Global | EN </span>
            </div>
            <div>
              <img src={subtract} />
            </div>
          </div>
          <div>
            <img src={union} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

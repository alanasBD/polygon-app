import { Link } from "react-router-dom";
import "./Header.css";
import subtract from "../../images/subtract.png";
import union from "../../images/union.png";
function Header() {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-md-3"></div>
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

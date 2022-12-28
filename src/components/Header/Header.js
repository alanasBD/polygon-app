
import { Link } from 'react-router-dom';
import './Header.css';
function Header(){
    return <div className="container-fluid border header-bg">
       <div className="row">
         <div className="col-md-9 center-menu">
             <Link to="#">Home</Link>
             <Link to="#">About</Link>
             <Link to="#">Service</Link>
             <Link to="#">Contact</Link>
         </div>
         <div className="col-md-3">
            <h2>Hello</h2>
         </div>
       </div>
    </div>
}


export default Header;
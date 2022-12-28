import "./Footer.css";
import fb from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
function Footer(){
    return <div className="footer d-flex justify-content-center align-items-center">
        <span>Follow us on:</span>
        <div className="icons">
         <img src={fb}/>
         <img src={twitter}/>
         <img src={youtube}/>
        </div>
    </div>
}


export default Footer;
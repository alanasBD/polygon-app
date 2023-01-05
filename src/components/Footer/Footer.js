import "./Footer.css";
import fb from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
function Footer() {
  return (
    <div className="">
      <div className="footer d-flex justify-content-center align-items-center">
        <span>Follow us on:</span>
        <div className="icons">
          <img src={fb} />
          <img src={twitter} />
          <img src={youtube} />
        </div>
      </div>
    </div>
  );
}

export default Footer;

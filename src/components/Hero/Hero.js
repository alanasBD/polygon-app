import "./Hero.css";
import frame from "../../images/frame.png";
import circle from "../../images/circle.png";
import dot from "../../images/dot.png";
import Lottie from "lottie-react";
import home from "../../lotties/home.json";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="row">
        <div className="col-md-5 lottie">
          {/* <img src={frame} /> */}
          <Lottie animationData={home} />
        </div>
        <div className="col-md-7 d-flex align-items-center">
          <div>
            <div>
              <h1>
                Building an <br /> economically empowered and self-reliant
                nation
              </h1>
            </div>
            <div className="button">
              <img src={circle} />
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      {/* dots section */}
      <div className="dots">
        <a href="#">
          <img src={dot} />
        </a>
        <a href="#stock">
          <img src={dot} />
        </a>
        <a href="#wallet">
          <img src={dot} />
        </a>
        <a href="#female">
          <img src={dot} />
        </a>
        <a href="#news">
          <img src={dot} />
        </a>
        <a href="#media">
          <img src={dot} />
        </a>
      </div>
    </div>
  );
}

export default Hero;

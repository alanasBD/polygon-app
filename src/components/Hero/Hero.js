import "./Hero.css";
import frame from "../../images/frame.png";
import circle from "../../images/circle.svg";
import dot from "../../images/dot.svg";
import Lottie from "lottie-react";
import home from "../../lotties/home.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const style = {
  mixBlendMode: "difference",
};
function Hero({ img, setImg }) {
  const [active, setActive] = useState(0);

  const [arr, setArr] = useState([false, false, false, false, false, false]);

  const handleClick = (index) => {
    for (let i = 0; i < 6; i++) {
      if (i === index) {
        arr[index] = true;
      } else {
        arr[i] = false;
      }
      setArr([...arr]);
    }

    if (index === 3 && img < 3) {
      setImg(img + 1);
    }
  };

  return (
    <div className="hero d-flex align-items-center" id="hero">
      <div className="row">
        <div className="col-md-7 lottie">
          {/* <img src={frame} /> */}
          <Lottie animationData={home} style={style} />
        </div>
        <div className="col-md-5 d-flex align-items-center hero-right">
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
        <a className="section-one" href="#hero">
          <img
            onClick={() => handleClick(0)}
            className={`${arr[0] ? "active-link" : ""}`}
            src={dot}
          />
        </a>
        <a className="section-two" href="#stock">
          <img
            onClick={() => handleClick(1)}
            className={`${arr[1] ? "active-link" : ""}`}
            src={dot}
          />
        </a>
        <a className="section-three" href="#wallet">
          <img
            onClick={() => handleClick(2)}
            className={`${arr[2] ? "active-link" : ""}`}
            src={dot}
          />
        </a>
        <a className="section-four" href="#female">
          <img
            onClick={() => handleClick(3)}
            className={`${arr[3] ? "active-link" : ""}`}
            src={dot}
          />
        </a>
        <a className="section-five" href="#news">
          <img
            onClick={() => handleClick(4)}
            className={`${arr[4] ? "active-link" : ""}`}
            src={dot}
          />
        </a>
        <a className="section-six" href="#media">
          <img
            onClick={() => handleClick(5)}
            className={`${arr[5] ? "active-link" : ""}`}
            src={dot}
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;

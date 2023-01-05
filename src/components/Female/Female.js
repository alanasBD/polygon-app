import "./Female.css";
import female from "../../lotties/portrait.json";
import Lottie from "lottie-react";
import signature from "../../images/signature.svg";
import quoteImage from "../../images/quote-image.jpeg";
const style = {
  mixBlendMode: "difference",
};
function Female({ img }) {
  return (
    <div
      className="container-fluid  d-flex align-items-center justify-content-center female"
      id="female"
    >
      <div className="female-container">
        <div className="row">
          <div className="col-md-6 text-center  d-flex align-items-center">
            {/* {img ? (
              <img
                width="640px"
                height="360px"
                src={quoteImage}
                style={style}
              />
            ) : ( */}
            <Lottie animationData={female} loop={img} style={style} />
          </div>
          <div className="col-md-6 female-right">
            <p>
              “Our mission is to catalyse Bangladesh's economic activity by
              enabling our citizen masses to participate in the financial
              markets.
            </p>
            <img src={signature} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Female;

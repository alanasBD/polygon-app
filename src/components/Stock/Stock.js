import "./Stock.css";
import Lottie from "lottie-react";
import stock from "../../lotties/stock-exchange.json";
import arrow from "../../images/arrow.svg";
const style = {
  mixBlendMode: "difference",
};
function Stock() {
  return (
    <div
      className="container-fluid stock  d-flex align-items-center"
      id="stock"
    >
      <div className="row stock-row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="stock-left">
            <h1>Stock Exchange</h1>
            <p>
              The Chittagong Stock Exchange (CSE) is one of the two stock
              exchanges in Bangladesh, located in the port city of Chittagong.
              Established in 1995, the CSE is an important financial hub in the
              region and plays a crucial role in the country's economy.
            </p>
            <div className="button">
              <a href="#">Learn More</a>
              <img src={arrow} />
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <Lottie animationData={stock} style={style} />
        </div>
      </div>
    </div>
  );
}

export default Stock;

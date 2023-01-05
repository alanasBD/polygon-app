import "./Wallet.css";
import Lottie from "lottie-react";
import wallet from "../../lotties/wallet.json";
import arrow from "../../images/arrow.svg";
const style = {
  mixBlendMode: "difference",
};

function Wallet() {
  return (
    <div
      className="wallet container-fluid d-flex align-items-center"
      id="wallet"
    >
      <div className="row wallet-row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1>ABG Wallet</h1>
            <p>
              Leave your wallet at home & Go digital with ABG's e-wallet.
              Experience the future of payments. Join the millions of users who
              have made the switch and never looked back.
            </p>
            <div className="button">
              <a href="#">Learn More</a>
              <img src={arrow} />
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <Lottie animationData={wallet} style={style} />
        </div>
      </div>
    </div>
  );
}

export default Wallet;

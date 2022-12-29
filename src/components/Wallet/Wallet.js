import "./Wallet.css";
import wallet from "../../images/wallet.png";
import arrow from "../../images/arrow.png";
function Wallet(){
    return <div className="wallet">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
             <div>
               <h1>Wallet</h1>
               <p>Id blandit convallis ipsum commodo fermentum urna pellentesque.
                 Consectetur fringilla sit sed morbi ultrices pellentesque eget elementum pharetra.</p>
                 <div className="button">
                       <a href="#">Learn More</a>
                       <img src={arrow}/>
                </div>
             </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={wallet}/>
          </div>
        </div>
    </div>
}

export default Wallet;
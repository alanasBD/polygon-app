import "./Wallet.css";
import wallet from "../../images/wallet.png"
function Wallet(){
    return <div className="container-fluid wallet  d-flex align-items-center">
        <div>
        <div className="row d-flex align-items-center">
           <div className="col-md-6 d-flex align-items-center wallet-left">
              <div>
              <h1>Wallet</h1>
               <p>Id blandit convallis ipsum commodo fermentum urna pellentesque. 
                Consectetur fringilla sit sed morbi ultrices pellentesque eget elementum pharetra.</p>
                <button type="button" class="btn btn-primary">Primary</button>
              </div>
           </div>
           <div className="col-md-6 wallet-right">
              <img src={wallet}/>
             
           </div>
        </div>
        </div>
    </div>
}


export default Wallet;
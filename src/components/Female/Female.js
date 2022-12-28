import "./Female.css";
import female from "../../images/female.png";
import an from "../../images/an.png";
function Female (){
    return <div className="container-fluid  d-flex align-items-center justify-content-center female">
         <div className="female-container">
         <div className="row">
              <div className="col-md-6 text-center">
                <img src={female}/>
              </div>
              <div className="col-md-6 female-right">
                 <p>“Id blandit convallis ipsum commodo fermentum urna pellentesque. Consectetur 
                    fringilla sit sed morbi ultrices pellentesque eget elementum pharetra.</p>
                 <img src={an}/>
              </div>
          </div>
         </div>
    </div>
}


export default Female;
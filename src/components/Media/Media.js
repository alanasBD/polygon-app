import "./Media.css";
import arrow from "../../images/arrow.png";
function Media (){
    return <div className="media">
         <h1 className="text-center">All Media</h1>
         <p className="text-center">Id blandit convallis ipsum commodo fermentum urna pellentesque.
          Consectetur fringilla sit sed morbi ultrices pellentesque <br/> eget elementum pharetra.</p>
         <div className="d-flex justify-content-center">
         <div className="button">
                       <a href="#">Learn More</a>
                       <img src={arrow}/>
                </div>
         </div>
    </div>
}

export default Media;
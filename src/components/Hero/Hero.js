import "./Hero.css";
import frame from "../../images/frame.png";
import circle from "../../images/circle.png";
function Hero(){
    return <div className="hero">
       <div className="row">
          <div className="col-md-4">
              <img src={frame}/>
          </div>
          <div className="col-md-8 d-flex align-items-center">
              <div>
              <div>
                <h1>Building an <br/> economically empowered and self-reliant nation</h1>
              </div>
              <div className="button">
                       <img src={circle}/>
                       <a href="#">Learn More</a>
                       
             </div>
              </div>
          </div>
       </div>
    </div>
}

export default Hero;
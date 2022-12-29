import "./News.css";
import arrow from "../../images/arrow.png"
function News(){
    return <div className="news">
        <div className="row">
             <div className="col-md-8 text-center">
                  carosul
             </div>
             <div className="col-md-4">
                 <h1>Top News</h1>
                 <p>Id blandit convallis ipsum commodo fermentum urna pellentesque. 
                    Consectetur fringilla sit sed morbi ultrices pellentesque eget elementum pharetra.</p>
                    <div className="button">
                       <a href="#">Learn More</a>
                       <img src={arrow}/>
                </div>
             </div>
            
         </div>
        </div>
    
}

export default News;
import "./Stock.css";
import stock from "../../images/stock.png";
import arrow from "../../images/arrow.png";
function Stock() {
  return (
    <div className="container-fluid stock" id="stock">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="stock-left">
            <h1>Stock Management</h1>
            <p>
              Id blandit convallis ipsum commodo fermentum urna pellentesque.
              Consectetur fringilla sit sed morbi ultrices pellentesque eget
              elementum pharetra.
            </p>
            <div className="button">
              <a href="#">Learn More</a>
              <img src={arrow} />
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={stock} />
        </div>
      </div>
    </div>
  );
}

export default Stock;

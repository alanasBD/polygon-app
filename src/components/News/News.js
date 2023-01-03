import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./News.css";
import cardOne from "../../images/card1.png";
import arrow from "../../images/arrow.png";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import { useState } from "react";
function News() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="news container-fluid" id="news">
      <div className="row">
        {/* news left side */}
        <div className="col-md-9 d-flex">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
          >
            <SwiperSlide className="card">
              <img src={cardOne} />
              <div className="card-body">
                <h3>Title</h3>
                <p>
                  Aliquam massa scelerisque varius nulla vitae mattis ac nunc
                  dignissim. Posuere consequat nibh varius auctor sit netus diam
                  sodales in.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={cardOne} />
              <div className="card-body">
                <h3>Title</h3>
                <p>
                  Aliquam massa scelerisque varius nulla vitae mattis ac nunc
                  dignissim. Posuere consequat nibh varius auctor sit netus diam
                  sodales in.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={cardOne} />
              <div className="card-body">
                <h3>Title</h3>
                <p>
                  Aliquam massa scelerisque varius nulla vitae mattis ac nunc
                  dignissim. Posuere consequat nibh varius auctor sit netus diam
                  sodales in.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={cardOne} />
              <div className="card-body">
                <h3>Title</h3>
                <p>
                  Aliquam massa scelerisque varius nulla vitae mattis ac nunc
                  dignissim. Posuere consequat nibh varius auctor sit netus diam
                  sodales in.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={cardOne} />
              <div className="card-body">
                <h3>Title</h3>
                <p>
                  Aliquam massa scelerisque varius nulla vitae mattis ac nunc
                  dignissim. Posuere consequat nibh varius auctor sit netus diam
                  sodales in.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* news right side */}
        <div className="col-md-3  news-right">
          <div>
            <h1>Top News</h1>
            <p>
              Id blandit convallis ipsum commodo fermentum urna pellentesque.
              Consectetur fringilla sit sed morbi ultrices pellentesque eget
              elementum pharetra.
            </p>
            <div className="button">
              <a href="#">View All</a>
              <img src={arrow} />
            </div>
            <div className="arrows">
              <div>
                <img
                  ref={(node) => setPrevEl(node)}
                  style={{ marginRight: 40 }}
                  src={leftArrow}
                />
                <img ref={(node) => setNextEl(node)} src={rightArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

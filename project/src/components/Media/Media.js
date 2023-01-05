import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Media.css";

import shapeOne from "../../images/shape1.png";
import shapeTwo from "../../images/shape2.png";
import shapeThree from "../../images/shape3.png";
import shapeFour from "../../images/shape4.png";
import shapeFive from "../../images/shape5.png";
import arrow from "../../images/arrow.png";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import { useState } from "react";

function Media() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <div className="media" id="media">
      <h1 className="text-center">All Media</h1>
      <p className="text-center">
        Id blandit convallis ipsum commodo fermentum urna pellentesque.
        Consectetur fringilla sit sed morbi ultrices pellentesque <br /> eget
        elementum pharetra.
      </p>

      <div className="slider">
        <div className="slider-inner-section">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={{ prevEl, nextEl }}
            modules={[EffectCoverflow, Navigation]}
          >
            <SwiperSlide>
              <img style={{ display: "block", width: "100%" }} src={shapeOne} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ display: "block", width: "100%" }} src={shapeTwo} />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ display: "block", width: "100%" }}
                src={shapeThree}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ display: "block", width: "100%" }}
                src={shapeFour}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ display: "block", width: "100%" }}
                src={shapeFive}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <img
          className="left-arrow"
          ref={(node) => setPrevEl(node)}
          src={leftArrow}
        />
        <img
          className="right-arrow"
          ref={(node) => setNextEl(node)}
          src={rightArrow}
        />
      </div>

      <div className="d-flex justify-content-center">
        <div className="button">
          <a href="#">Learn More</a>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
}

export default Media;

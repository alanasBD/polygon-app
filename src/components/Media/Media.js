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
import arrow from "../../images/arrow.svg";
import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";
import office from "../../images/office.png";
import { useState } from "react";

const imgStyle = {
  display: "block",
  width: "100%",
  borderRadius: 4,
};

function Media() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const handleScroll = (event) => {
    console.log(event);
  };
  return (
    <div className="media" id="media" onScroll={handleScroll}>
      <h1 className="text-center">Our Activities</h1>
      <p className="text-center">
        Take a look at our photo gallery to see behind-the-scenes shots of our
        company in action. From team building events to product launches, these
        photos showcase the hard work and dedication of our talented team. Get a
        glimpse into the daily operations of our business and see what makes us
        unique.
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
              <img style={imgStyle} src={office} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={imgStyle} src={shapeTwo} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={imgStyle} src={shapeThree} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={imgStyle} src={shapeFour} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={imgStyle} src={shapeFive} />
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

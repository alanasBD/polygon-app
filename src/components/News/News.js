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
import cardTwo from "../../images/cardTwo.png";
import arrow from "../../images/arrow.svg";
import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";

import partner from "../../images/partner.png";
import office from "../../images/office.png";
import person from "../../images/person.png";
import people from "../../images/people.png";

import { useState } from "react";
function News() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="news container-fluid" id="news">
      <div className="row">
        {/* news left side */}
        <div className="col-md-9 d-flex news-left">
          <Swiper
            slidesPerView={3}
            loop
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            className="my-swiper"
          >
            {/* partner slider */}
            <SwiperSlide className="card">
              <img src={partner} />
              <div className="card-body">
                <h3>CSE's strategic Partner</h3>
                <p>
                  The Bangladesh Securities and Exchange Commission (BSEC) has
                  approved a proposal to appoint ABG Limited as a strategic
                  partner of the Chittagong Stock Exchange (CSE)
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
            {/* office slider */}
            <SwiperSlide className="card">
              <img src={office} />
              <div className="card-body">
                <h3>ABG’s New Office</h3>
                <p>
                  Recently, ABG Tower has moved to a new office location - ABG
                  Tower located in the heart of Bashundhara R/A, a
                  state-of-the-art corporate workspace.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
            {/* person slider */}
            <SwiperSlide className="card">
              <img src={person} />
              <div className="card-body">
                <h3>Person of the Year</h3>
                <p>
                  ABG Limited Managing Director Sayem Sobhan Anvir has been
                  honoured as ‘Person of the Year’ at an international forum for
                  his leadership excellence for industries.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <img src={arrow} />
                </div>
              </div>
            </SwiperSlide>
            {/* people slider */}
            <SwiperSlide className="card">
              <img src={people} />
              <div className="card-body">
                <h3>Stands By People</h3>
                <p>
                  Bashundhara Group from a humanitarian perspective has provided
                  flood-affected people with emergency relief materials in
                  Sylhet.
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
            <h1>Notable News</h1>
            <p>
              Let's take a look at some of the recent highlights related to ABG
              Limited's activities in the business universe.
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

import React from "react";
import "./Section.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pic1 from "./images/sign in.png";
import pic2 from "./images/layer1b.png";
import pic3 from "./images/weather.png";
import pic4 from "./images/webcapture.jpeg";
import pic5 from "./images/tourism.jpeg";
import pic6 from "./images/Desktop.png";

import "./styles.css";
import { Autoplay, Pagination } from "swiper";

const Section = () => {
  return (
    <div className="section">
      <div className="project-mobile">
        <div className="project-mobilebox">
          <p
            style={{
              fontSize: "1.8rem",
              maxWidth: "200px",
              marginInlineStart: "10px",
              fontWeight: "600",
            }}
          >
            Mobile Development
          </p>
          <p
            style={{
              maxWidth: "300px",
              marginInlineStart: "20px",
              color: "white",
            }}
          >
            With React Native which is a frame work that allows one to code in
            Javascript and use libraries we can have Android , Ios and web apps
            that is of one code base and can be used in different environments.
            I have interacted with React native both in Android studio and while
            using expo and created the following apps
          </p>
        </div>
        {/* <div className="project-mobilebox1"> */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p>Dashboard screens</p>
            <img src={pic2} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <p>Signin screens</p>
            <img src={pic1} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <p>Weather app</p>
            <img src={pic3} alt="slide" />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </div>
      <div className="project-mobile">
        <div className="project-mobilebox">
          <p
            style={{
              fontSize: "1.8rem",
              maxWidth: "200px",
              marginInlineStart: "10px",
              fontWeight: "600",
            }}
          >
            Web Development
          </p>
          <p
            style={{
              maxWidth: "300px",
              marginInlineStart: "20px",
              color: "white",
            }}
          >
            Web pages and websites are a way for customers to reach service
            providers. Reactjs is a framework that makes rendering fast,
            efficient and well designed. React also gives a lot of flexibility
            when it comes to using components and css to style webpages. With
            Express, Axios and cloudbases we can have full stack websites just
            like these
          </p>
        </div>
        {/* <div className="project-mobilebox1"></div> */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p>Oncargo company website</p>
            <img src={pic4} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <p>Fast Forward website</p>
            <img src={pic5} alt="slide" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="project-mobile">
        <div className="project-mobilebox">
          <p
            style={{
              fontSize: "1.8rem",
              maxWidth: "200px",
              marginInlineStart: "10px",
              fontWeight: "600",
            }}
          >
            UI/UX Development
          </p>
          <p
            style={{
              maxWidth: "300px",
              marginInlineStart: "20px",
              color: "white",
            }}
          >
            In any development cycle prototyping and Design stand as the top
            most processes to see how an idea will actually look like. With
            Figma and Adobe we can have flexibility in playing around with
            designs to eventually have a final product. This are the designs i
            have comeup with and turned into code and finally into working
            projects
          </p>
        </div>
        {/* <div className="project-mobilebox1"></div> */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={pic2} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic6} alt="slide" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section;

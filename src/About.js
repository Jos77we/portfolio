import React from "react";
import WebFont from "webfontloader";
import { useEffect } from "react";
import "./About.css";
import { FaFigma } from "react-icons/fa";
import { SiJavascript, SiGmail } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { BsSkype, BsGithub } from "react-icons/bs";

const About = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  return (
    <div className="about-body">
      <div className="about">
        <p
          style={{
            fontSize: "2.0rem",
            marginLeft: "20px",
            color: "black",
          }}
        >
          About me
        </p>
        <p
          style={{
            fontSize: "1.4rem",
            marginLeft: "10px",
            color: "black",
            fontWeight: 700
          }}
        >
          Education
        </p>
        <p style={{ fontSize: "0.8rem", marginLeft: "10px", color: "white" }}>
          I have a bachelors degree in Computer Systems Engineering which i have
          attained from Kirinyage university in Nairobi, Kenya.
        </p>
        <p style={{ fontSize: "0.8rem", marginLeft: "10px", color: "white" }}>
          {" "}
          I do also have certificates from Coursea and freeCodeCamp
        </p>
        <p
          style={{
            fontSize: "2.0rem",
            marginLeft: "20px",
            color: "black",
          }}
        >
          Skills
        </p>
        <div className="icons">
          <FaFigma />
          <p className="word">Figma</p>
          <div style={{ marginLeft: "60px", display: "flex" }}>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks-1"></div>
          </div>
        </div>
        <div className="icons">
          <SiJavascript />
          <p className="word">JavaScript</p>
          <div style={{ marginLeft: "60px", display: "flex" }}>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks-1"></div>
            <div className="sticks-1"></div>
          </div>
        </div>
        <div className="icons">
          <FaJava />
          <p className="word">Java</p>
          <div style={{ marginLeft: "60px", display: "flex" }}>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks-1"></div>
            <div className="sticks-1"></div>
            <div className="sticks-1"></div>
          </div>
        </div>
        <div className="icons">
          <ImHtmlFive2 />
          <p className="word">HTML</p>
          <div style={{ marginLeft: "60px", display: "flex" }}>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks-1"></div>
          </div>
        </div>
        <div className="icons">
          <DiCss3 />
          <p className="word">CSS</p>
          <div style={{ marginLeft: "60px", display: "flex" }}>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks"></div>
            <div className="sticks-1"></div>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="boundary"></div>
      </div>
      <div className="contact">
        <p
          style={{
            fontSize: "2.0rem",
            marginLeft: "10px",
            color: "black",
            marginTop: "180px",
          }}
        >
          Contact me
        </p>

        <div className="icons">
          <SiGmail style={{ fontSize: "24px" }} />
          <p style={{ marginLeft: "20px" }}>josemaina207@gmail.com</p>
        </div>
        <div className="icons">
          <BsSkype style={{ fontSize: "24px" }} />
          <p style={{ marginLeft: "20px" }}>
            https://join.skype.com/invite/JjMdEkCtRS7u
          </p>
        </div>
        <div className="icons">
          <BsGithub style={{ fontSize: "24px" }} />
          <p style={{ marginLeft: "20px" }}>Jos77we</p>
        </div>
      </div>
    </div>
  );
};

export default About;

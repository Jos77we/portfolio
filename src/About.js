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
      <p
        style={{
          fontSize: "2.0rem",
          marginLeft: "20px",
          color: "black",
        }}
      >
        About me
      </p>
      <div className="about">
        <div className="about-box">
          <div style={{ padding: "8px 20px" }}>
            <p
              style={{
                fontSize: "1.4rem",
                marginLeft: "10px",
                color: "rgb(223, 13, 13)",
                fontWeight: 700,
              }}
            >
              Education
            </p>
            <p className="style-text">
              I have a bachelors degree in Computer Systems Engineering which i
              have attained from Kirinyage university in Nairobi, Kenya.
            </p>
            <p className="style-text">
              {" "}
              I do also have certificates from Coursea and freeCodeCamp
            </p>
          </div>
        </div>

        <div className="about-box2" style={{ padding: "8px 20px" }}>
          <p
            style={{
              fontSize: "1.4rem",
              marginLeft: "10px",
              color: "rgb(223, 13, 13)",
              fontWeight: 700,
            }}
          >
            Contact me
          </p>
          <div className="icons">
            <SiGmail style={{ fontSize: "1.2rem" }} />
            <p style={{ marginLeft: "20px" }}>josemaina207@gmail.com</p>
          </div>
          <div className="icons">
            <BsSkype style={{ fontSize: "1.2rem" }} />
            <p className="box2-word">joseph Maina</p>
          </div>
          <div className="icons">
            <BsGithub style={{ fontSize: "1.2rem" }} />
            <p style={{ marginLeft: "20px" }}>Jos77we</p>
          </div>
        </div>

        <div className="about-box1" style={{ padding: "10px 20px" }}>
          <p
            style={{
              fontSize: "1.4rem",
              marginLeft: "20px",
              color: "rgb(223, 13, 13)",
              fontWeight: 700,
            }}
          >
            Skills
          </p>
          <div className="box-layout">
            <div>
              <div className="icons">
                <FaFigma />
                <p className="word">Figma</p>
              </div>
              <div className="icons">
                <SiJavascript />
                <p className="word">JavaScript</p>
              </div>
              <div className="icons">
                <FaJava />
                <p className="word">Java</p>
              </div>
            </div>
            <div>
              <div className="icons">
                <ImHtmlFive2 />
                <p className="word">HTML</p>
              </div>
              <div className="icons">
                <DiCss3 />
                <p className="word">CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

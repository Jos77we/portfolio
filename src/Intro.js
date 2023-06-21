import React from "react";
import About from "./About";
import "./Intro.css";
import Skills from "./Skills";
import Topbar from "./Topbar";
import WebFont from "webfontloader";
import { useEffect } from "react";

const Into = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik Spray Paint", "Work Sans"],
      },
    });
  }, []);

  return (
    <div className="intro-body">
      <Topbar />
      <div className="intro-sub">
        <div className="intro">
          <p style={{ fontSize: "calc(0.9rem + 1.5vw)", color: "white" }}>
            Hello I'm
          </p>
          <p style={{ fontSize: "calc(0.9rem + 1.5vw)", color: "white" }}>
            a FullStack Developer
          </p>
          <p style={{ fontSize: "0.9rem", maxWidth: "400px", color: "white" }}>
            Hi again, I am Joseph Muigai and if you have found yourself here is
            because you may be looking for a FullStack developer, a Mobile
            developer or a UI/UX Designer. You can relax as I am all of those
            expertise put together. Welcome to my Portfolio.
          </p>
        </div>
        <div className="name">
          <div className="box">
            <p style={{ marginTop: "340px" }}>Joseph Muigai</p>
          </div>
        </div>
      </div>
      
      <div className="last">
        <p
          style={{
            fontSize: "2.0rem",
            color: "rgb(223, 13, 13)",
            fontFamily: "Work Sans",
          }}
        >
          Services I Offer
        </p>
        <Skills />
        <About />
      </div>
     
    </div>
  );
};

export default Into;

import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <div className="section-1">
        <div className="section-box">
          <p
            style={{
              maxWidth: "200px",
              marginLeft: "30px",
              marginTop: "40px",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Desktop Designs & Prototyping
          </p>
        </div>
        <div className="section-box">
          <p
            style={{
              maxWidth: "200px",
              marginLeft: "30px",
              marginTop: "60px",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Mobile App Designs & Prototyping
          </p>
        </div>
        <div className="section-box">
          <p
            style={{
              maxWidth: "200px",
              marginLeft: "30px",
              marginTop: "60px",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Web Designs & Development
          </p>
        </div>
      </div>
      <div className="section-2">
        <div className="section-box2">
          <div>
            <p style={{ maxWidth: "500px", color: "white", marginTop: "40px" }}>
              In this project i did a design of a prototype statistic display on
              a desktop. The project included API endpoints which do help
              provide the statistics that we are to display.
            </p>
            <p>*Note is a prototype project </p>
          </div>
          <div className="image1"></div>
        </div>
        <div className="section-box2">
          <div>
            <p style={{ maxWidth: "500px", color: "white", marginTop: "40px" }}>
              Weather App. This app tells you the weather updates according to
              your current location. The design was done on Figma. The front-end
              development by React Native in expo and the backend involved a
              combination of axios, API from metromatics and express. Its purely
              written in JavaScript with styling by tailwindcss.
            </p>
          </div>
          <div className="image2"></div>
        </div>

        <div className="section-box2">
          <div>
            <p style={{ maxWidth: "500px", color: "white", marginTop: "40px" }}>
              This is an example of a webpage done for Oncargo company. It
              involved the frontend and backend development with JavaScript,
              CSS, Axios, Express, React Js and MongoDB.
            </p>
          </div>
          <div className="image3"></div>
        </div>
      </div>
    </div>
  );
};

export default Section;

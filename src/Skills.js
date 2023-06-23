import React from "react";
import "./Skills.css";
import { BsCodeSlash } from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";
import { IoServer } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="skills-body">
      <div className="skills-box1">
        <BsCodeSlash
          style={{
            padding: "40px 0px 0px 10px",
            fontSize: "30px",
            color: "rgb(223, 13, 13)",
          }}
        />
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            marginLeft: "10px",
            maxWidth: "50px",
          }}
        >
          Coding Languages
        </p>
        <p className="style-word">
          Coding languages that i do know are JavaScript, HTML, CSS and Java.I
          am able to write code that is easy to maintain and best performing
          when it comes time to deploy.
        </p>
      </div>
      <div className="skills-box2">
        <CgDisplayFlex
          style={{
            padding: "40px 0px 0px 10px",
            fontSize: "30px",
            color: "rgb(223, 13, 13)",
            
          }}
        />
        <p style={{ color: "white", fontSize: "1.2rem", marginLeft: "10px", maxWidth: "100px" }}>
          Front-End Development
        </p>
        <p className="style-word">
          Front-End Development involves how users get to interact with a
          website or app. Having components like animations, interactive chat
          response and a good landing page with amazing color sheme and font
          will help win hearts of your users
        </p>
      </div>
      <div className="skills-box3">
        <IoServer
          style={{
            padding: "40px 0px 0px 10px",
            fontSize: "30px",
            color: "rgb(223, 13, 13)",
          }}
        />
        <p style={{ color: "white", fontSize: "1.2rem", marginLeft: "10px", maxWidth: "100px" }}>
          Back-End Development
        </p>
        <p className="style-word">
          In Back-End Development it involves rendering your project on a
          server, making API endpounts, storing data for your project and even
          cloud development. I can make resposive APIs both in Java or
          JavaScript depending on your project needs.
        </p>
      </div>
      <div className="skills-box4">
        <BsPhone
          style={{
            padding: "40px 0px 0px 10px",
            fontSize: "30px",
            color: "rgb(223, 13, 13)",
          }}
        />
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            marginLeft: "10px",
            maxWidth: "50px",
          }}
        >
          Mobile Development
        </p>
        <p className="style-word">
          Mobile apps are a booming industry which makes users able to acces
          different services from there phones. Having expereience with Java and
          JavaScript I can make apps for android.
        </p>
      </div>
      <div className="skills-box5">
        <MdOutlineDesignServices
          style={{
            padding: "40px 0px 0px 10px",
            fontSize: "30px",
            color: "rgb(223, 13, 13)",
          }}
        />
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            marginLeft: "10px",
            maxWidth: "50px",
          }}
        >
          UI/UX Design
        </p>
        <p className="style-word">
          Designing of your landing page or Mobile app help you in deciding on
          what you woukd like to get or what you would want your user to
          expereience whenever they do want to interact with your services
        </p>
      </div>
      <div className="skills-box6">
        <AiOutlineDatabase
          style={{
            padding: "40px 0px 0px 10px",
            fontSize: "30px",
            color: "rgb(223, 13, 13)",
          }}
        />
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            marginLeft: "10px",
            maxWidth: "50px",
          }}
        >
          Database Rendering
        </p>
        <p className="style-word">
          Relational databases and non relational database play a huge roll when
          it comes to storing clients data, backups and even analytics. I do
          have skills in MySql and MongoDB when it comes to data entry, query
          and even backups.
        </p>
      </div>
    </div>
  );
};

export default Skills;

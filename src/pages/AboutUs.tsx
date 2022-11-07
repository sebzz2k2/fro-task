import React, { FC } from "react";
import "./aboutus.css";
import { FiMail, FiGithub, FiPhone } from "react-icons/fi";

const AboutUs: FC = () => {
  return (
    <div className="container">
      <h4 className="heading">Sebin Chacko Mathew</h4>
      <div className="subContainer">
        <FiMail />
        <p className="subHeading">sebinsebzz2002@gmail.com</p>
      </div>
      <div className="subContainer">
        <FiGithub />
        <a
          href="https://github.com/sebzz2k2/"
          className="subHeading"
          target="_blank"
        >
          https://github.com/sebzz2k2/
        </a>
      </div>
      <div className="subContainer">
        <FiPhone />
        <p className="subHeading">+91 7356367026</p>
      </div>
      <div>
        <h4 className="contentHeading">Objective</h4>
        <p className="content">
          As a student who have successfully completed two internships I am well
          equipped with React Js. Although I specialise in React, TypeScript and
          its component libraries like Material Ui, Chakara Ui, React bootstrap
          I am also skilled in backend technologies like Node, Express and Mongo
          DB. As a quick learner I believe that i can adapt to changing
          technologies. I have a very good communication skills which is
          essential for conveying my ideas. Being a determined person im ready
          to work under pressure. If I get selected I am confident that i will
          use the above mentioned skills to contribute to the premium
          development process of the enterprise.
        </p>
      </div>
      <h4 className="contentHeading">Previous Internships</h4>

      <ol className="list">
        <div className="internDiv">
          <li>
            <b>Front-end Developer Intern (8th May - 8th June 2022)</b>
            <ul>
              <li>Made changes to the existing website in the client side</li>
              <li>Madechanges in the dashboard website used by employees</li>
              <li> Used chakra uiand material ui </li>
              <li>Made a manual QA testing workflow</li>
            </ul>
          </li>
          <li>
            <b>Web-developer Intern (26th Jan - 26th March 2022)</b>
            <ul>
              <li>Made good looking ui for various pages </li>
              <li>
                Checking for bugs in the code and editing the existing code
              </li>
              <li>
                Testing manually if the code written by other interns are
                readable and wont crash the website on pushing
              </li>
            </ul>
          </li>
        </div>
      </ol>
      <h4 className="contentHeading">Skills</h4>
      <ul className="list">
        <li>React Js</li>
        <li>Node, Express, Mongo DB</li>
        <li>TypeScript</li>
        <li>Material UI, Chakra UI, React Bootstrap, Tailwind CSS</li>
        <li>Git</li>
        <li>HTML/CSS/Js</li>
      </ul>
      <h4 className="contentHeading">Education</h4>
      <ul className="list">
        <li>Bachelor of Science (B.Sc), Computer Science (2020-present)</li>
        <li>Senior Secondary (XII) (2018-2020)</li>
        <li>Secondary (X)</li>
      </ul>
    </div>
  );
};

export default AboutUs;

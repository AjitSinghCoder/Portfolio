import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimage.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a dedicated Python Developer specializing in
              <i>
                <b className="purple"> Backend development </b>
              </i>
              with hands-on experience in
              <i>
                <b className="purple"> Django, FastAPI </b>
              </i>
              Over the past years, I have built scalable APIs and explored AI
              solutions, including implementing chatbots with Rasa.
              <br />
              <br />
              I’m also skilled in
              <i>
                <b className="purple"> React.js and Next.js, </b>
              </i>
              allowing me to create intuitive, user-friendly interfaces. My
              expertise extends to databases like
              <i>
                <b className="purple">
                  {" "}
                  Relational and No Relational databases{" "}
                </b>
              </i>
              where I excel in optimizing performance and managing data
              effectively.
              <br />
              <br />
              Driven by a passion for
              <i>
                <b className="purple"> problem-solving. </b>
              </i>
              I’m always eager to contribute innovative solutions and
              continuously evolve with the latest technologies. &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AjitSinghCoder"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/ajitkrsingh841/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ajitsingh841/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

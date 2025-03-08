import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import editor from "../../Assets/Projects/codeEditor.png";
import dylog from "../../Assets/Projects/dylog.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bookyourpandit from "../../Assets/Projects/bookyourpandit.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookyourpandit}
              isBlog={false}
              title="Book Your Pandit"
              description="A multi-platform app for booking religious services and ceremonies."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://play.google.com/store/apps/details?id=com.bookyourpandit.client&hl=en_IN&pli=1"
              skills={["Python", "Django", "NextJs", "React", "Typescript"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Morsmiles"
              description="Mor Smiles presents an extensive directory of doctors, spanning diverse medical fields. Fromcardiologists to dermatologists, find the expert you need to address your specific health concerns."
              demoLink="https://blogs.soumya-jit.tech/"
              skills={[
                "Python",
                "Django",
                "FastAPI",
                "NextJs",
                "React",
                "Typescript",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dylog}
              isBlog={false}
              title="Dylog Chatbot"
              description="Dylog is a chatbot designed for the B2B sector, helping improve communication between buyers and suppliers in industries like hardware products and defense services."
              demoLink="https://www.dylog.ai/"
              skills={["Python", "Rasa", "OpenAI"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

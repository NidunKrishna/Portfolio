import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project1.gif";
import projImg2 from "../assets/img/Trend.gif";
import projImg3 from "../assets/img/Wiki.jpg";
import p4 from '../assets/img/face.jpg'
import p5 from '../assets/img/p5.jpeg'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import tb from '../assets/img/tb.gif'
import qwen from '../assets/img/qwen.png'

export const Projects = () => {

  const projects = [
    {
      title: "Gaze Guard",
      description: "MediaPipe-powered lie detection through nuanced eye gestures",
      imgUrl: projImg1,
    },
    {
      title: "TrendTracks",
      description: "Forecast future sales with precision using the Prophet library's advanced time-series analysis",
      imgUrl: projImg2,
    },
    {
      title: "Dynamic JavaScript Application",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "CodeRank",
      description: "Cutting-edge coding platform",
      imgUrl: p5,
    },
    {
      title: "EmoNet",
      description: ": Deep Emotion Detection with CNNs",
      imgUrl: p4,
    },
    {
      title: "TriggerTalk Bot",
      description: " Automated Messaging with Telegram Triggers",
      imgUrl: tb,
      
    },
    {
      title: "Story Generator using Qwen_Vl",
      description: " A vision-language model based on Qwen that can understand and perceive both images and text",
      imgUrl: qwen,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The mentioned projects, developed by me, have not only secured victories but have also earned finalist positions in various hackathons. It's worth noting that these projects represent only a subset of my work, with many more showcased on my GitHub profile</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row >
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

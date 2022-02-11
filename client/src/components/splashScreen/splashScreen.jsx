import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import splashImage from "../../mediaComponents/images/splash.jpg";

const SplashScreen = ({ handleButtonStart }) => {
  return (
    <Container fluid>
      {/* <Row className="justify-content-md-center">
        <Col lg={6}>
          <h1 id="intro-text">Welcome to the KSR-500 series synthetiser</h1>
        </Col>
      </Row> */}
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <img src={splashImage} alt="splash-screen" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <Col lg={1}>
            <button
              id={"startButton"}
              onClick={() => {
                handleButtonStart();
              }}
            >
              START PLAYING
            </button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <div id="intro-description">
              <p>
                The KSR-500 series synthetiser, nicknamed{" "}
                <span className="labels">
                  "Forgive Me Father For I Have Synthed"
                </span>{" "}
                is an online simulator meant to test the capabilities of
                Tone.js, React, and of the creator,{" "}
                <span className="labels">kaiser899</span>.
              </p>
              <p>
                The current version offers MVP capabilities, showcasing keyboard
                control, metronome and octave action.
              </p>
              <a
                target={"_blank"}
                href="https://github.com/kaiser899/react-synth"
                rel="noreferrer"
              >
                Click here to see on GitHub
              </a>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default SplashScreen;

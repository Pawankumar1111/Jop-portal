import { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./NewApplicants.css";
import { Link } from "react-router-dom";

const NewApplicants = () => {
  const [expand, setexpand] = useState(false);
  const [showexpand, setshowexpand] = useState("none");
  const [showbtntxt, setshowbtntxt] = useState("Show Details");
  const [expand1, setexpand1] = useState(false);
  const [showexpand1, setshowexpand1] = useState("none");
  const [showbtntxt1, setshowbtntxt1] = useState("Show Details");
  const handleOnclick = () => {
    console.log("clicked");
    setexpand(!expand);
    if (expand) {
      setshowexpand("");

      setshowbtntxt("Hide");
    } else {
      setshowexpand("none");
      setshowbtntxt("Show Details");
    }
  };
  const handleOnclick1 = () => {
    console.log("clicked1");
    setexpand1(!expand1);
    if (expand1) {
      setshowexpand1("");

      setshowbtntxt1("Hide");
    } else {
      setshowexpand1("none");
      setshowbtntxt1("Show Details");
    }
  };
  return (
    <>
      <div className="widget">

        <div className="onclick">
          <Card.Body className="cardBod">
            <div className="maincardbox">
              <div className="maincardbox1">
                <div>
                  <Card.Img
                    className="img-card-top"
                    as="img"
                    variant="top"
                    src="https://mohammadtahzeebkhan-portfolio.surge.sh/back.jpg"
                  />

                  <p className="ApplicantName">mohammad Tahzeeb Khan </p>
                </div>
              </div>
              <div className="profile">
                <p>Profile</p>
                <h5>React-js Developer</h5>
                <div className="experience">
                  <p>Experience</p>
                  <h5>Fresher</h5>
                </div>
              </div>
              <div className="Location">
                <p>Location</p>
                <h6>Lucknow</h6>
                <div className="contact">
                  <p>Contact</p>

                  <h6>7486882890</h6>
                  <div className="email">
                    <h6 className="emailh6">mohammadtahzeebkhan@gmail.com</h6>
                  </div>
                </div>
              </div>
              <button className="showbtn" onClick={handleOnclick}>
                {showbtntxt}
              </button>
            </div>

            <div style={{ display: `${showexpand}` }}>
              <hr class="solid"></hr>
              <div className="expandbox">
                <div className="expandbox1">
                  <CircularProgressbar
                    value={50}
                    text={"50%"}
                    styles={buildStyles({
                      textColor: "red",
                      pathColor: "blue",
                      trailColor: "gold",
                      width: "13%",
                    })}
                  />
                  <p className="profilematch">Profile Match</p>
                </div>
                <div className="workexperience">
                  <p>Working Experience</p>
                  <div style={{ width: "100%", "text-align": "center" }}>
                    <h5>2</h5>
                  </div>
                </div>
                <div className="EduDeatails">
                  <p>Educational Detail</p>
                  <h6>High School or below</h6>
                </div>
              </div>
              <hr class="solid"></hr>
              <div
                style={{
                  display: "flex",
                  "flex-direction": "row",
                  "flex-wrap": "wrap",
                  "align-items": "center",
                  "justify-content": "space-evenly",
                  "margin-top": "3rem",
                }}
              >
                <div>
                  <div>
                    <p style={{ textAlign: "center" }}>Certificate</p>
                    <ListGroup
                      variant="flush"
                      style={{ "text-align": "center", marginBottom: "1rem" }}
                    >
                      <ListGroup.Item>
                        <h6>Google summer of code</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>Python core Udemy</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>Machine Learnig with Google </h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6> Internt Of Things Udemy 2022 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>

                <div>
                  <div>
                    <p style={{ textAlign: "center" }}>Projects</p>
                    <ListGroup
                      variant="flush"
                      style={{ "text-align": "center", marginBottom: "1rem" }}
                    >
                      <ListGroup.Item>
                        <h6>Gujarat industrial Hackathon 2019</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>Gujarat industrial Hackathon 2020</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6> Smart india Gujarat industrial Hackathon 2021</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>Vadodara Hackathon 2020</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                <div>
                  <div>
                    <p style={{ textAlign: "center" }}>Skills</p>
                    <ListGroup
                      variant="flush"
                      style={{ "text-align": "center", marginBottom: "1rem" }}
                    >
                      <ListGroup.Item>
                        <h6>C</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>C++</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>Java</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>Python</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </div>
        </div>
        <div className="widget">
          <div className="onclick">
            <Card.Body className="cardBod">
              <div style={{ display: "flex", cursor: "pointer" }}>
                <div style={{ width: "30%" }}>
                  <div>
                    <Card.Img
                      className="img-card-top"
                      as="img"
                      variant="top"
                      src="https://images.unsplash.com/photo-1553984658-d17e19aa281a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=331&q=80"
                    />

                    <p className="ApplicantName">Tahzeeb Khan </p>
                  </div>
                </div>
                <div style={{ display: "Block", marginLeft: "-3rem" }}>
                  <p>Profile</p>
                  <h5>Application Developer</h5>
                  <div style={{ "margin-top": "2rem" }}>
                    <p>Experience</p>
                    <h5>Fresher</h5>
                  </div>
                </div>
                <div style={{ display: "Block", marginLeft: "3rem" }}>
                  <p>Location</p>
                  <h6>Lucknow</h6>
                  <div style={{ "margin-top": "2rem" }}>
                    <p>Contact</p>

                    <h6>7486882890</h6>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        width: "100%",

                        marginTop: "3px",
                      }}
                    >
                      <h6
                        style={{
                          fontSize: "0.9rem",
                          width: "100%",
                          height: "20px",
                          marginTop: "3px",
                        }}
                      >
                        mohammadtahzeebkhan@gmail.com
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="showbtn" onClick={handleOnclick1}>
                  {showbtntxt1}
                </button>
              </div>

              <div style={{ display: `${showexpand1}` }}>
                <hr class="solid"></hr>
                <div style={{ display: "flex", "margin-top": "2rem" }}>
                  <div style={{ width: "13%", "margin-left": "36px" }}>
                    <CircularProgressbar
                      value={50}
                      text={"50%"}
                      styles={buildStyles({
                        textColor: "red",
                        pathColor: "blue",
                        trailColor: "gold",
                        width: "13%",
                      })}
                    />
                    <p style={{ marginTop: "1rem", "text-align": "center" }}>
                      Profile Match
                    </p>
                  </div>
                  <div style={{ "margin-left": "3.5rem" }}>
                    <p>Working Experience</p>
                    <div style={{ width: "100%", "text-align": "center" }}>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div style={{ "margin-left": "8rem" }}>
                    <p>Educational Detail</p>
                    <h6>High School or below</h6>
                  </div>
                </div>
                <hr class="solid"></hr>
                <div
                  style={{
                    display: "flex",
                    "flex-direction": "row",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "space-evenly",
                    "margin-top": "3rem",
                  }}
                >
                  <div>
                    <div>
                      <p style={{ textAlign: "center" }}>Certificate</p>
                      <ListGroup
                        variant="flush"
                        style={{ "text-align": "center", marginBottom: "1rem" }}
                      >
                        <ListGroup.Item>
                          <h6>Google summer of code</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Python core Udemy</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Machine Learnig with Google </h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6> Internt Of Things Udemy 2022 </h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </div>

                  <div>
                    <div>
                      <p style={{ textAlign: "center" }}>Projects</p>
                      <ListGroup
                        variant="flush"
                        style={{ "text-align": "center", marginBottom: "1rem" }}
                      >
                        <ListGroup.Item>
                          <h6>Gujarat industrial Hackathon 2019</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Gujarat industrial Hackathon 2020</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>
                            {" "}
                            Smart india Gujarat industrial Hackathon 2021
                          </h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Vadodara Hackathon 2020</h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p style={{ textAlign: "center" }}>Skills</p>
                      <ListGroup
                        variant="flush"
                        style={{ "text-align": "center", marginBottom: "1rem" }}
                      >
                        <ListGroup.Item>
                          <h6>C</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>C++</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Java</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>Python</h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
    
     
    </>
  );
};
export default NewApplicants;

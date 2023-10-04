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
import "./ShortList.css";
import { Link } from "react-router-dom";

const ShortList = () => {
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
                <h5>ShortListed</h5>
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
              <div className="resume section">
                <div className="container">
                  <div className="resume-inner">
                    <div className="row">
                      <div className="col-lg-12 ">
                        <div className="inner-content widget">
                          <div className="personal-top-content">
                            <div className="row">
                              <div className="col-lg-5 col-md-5 col-12">
                                <div className="name-head">
                                  <a className="mb-2" href="#">
                                    <img
                                      className="circle-54"
                                      src="../assets/images/client/client04.png"
                                      alt=""
                                    />
                                  </a>
                                  <h4>
                                    <a className="name" href="#">
                                      Pawan Shroff
                                    </a>
                                  </h4>
                                  <p>
                                    <a className="deg" href="#">
                                      Web Developer
                                    </a>
                                  </p>
                                  <ul className="social">
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-twitter"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-linkedin"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-instagram"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-pinterest"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-7 col-md-7 col-12">
                                <div className="content-right">
                                  <h5 className="title-main">Contact Info</h5>

                                  <div className="single-list">
                                    <h5 className="title">Location</h5>
                                    <p>New York , USA</p>
                                  </div>

                                  <div className="single-list">
                                    <h5 className="title">E-mail</h5>
                                    <p>
                                      <a
                                        href="#"
                                        className="__cf_email__"
                                        data-cfemail="20594f5552454d41494c60474d41494c0e434f4d"
                                      >
                                        [email&nbsp;protected]
                                      </a>
                                    </p>
                                  </div>

                                  <div className="single-list">
                                    <h5 className="title">Phone</h5>
                                    <p>1234-56789</p>
                                  </div>

                                  <div className="single-list">
                                    <h5 className="title">Website Linked</h5>
                                    <p>
                                      <a href="#">yourwebsite.com</a>
                                    </p>
                                  </div>

                                  {/* <button className="showbtn" onClick={handleOnclick}>
                {showbtntxt}
              </button> */}
                                </div>
                              </div>
                            </div>
                          </div>

                      
                            <div className="single-section">
                              <h4>About</h4>
                              <p className="font-size-4 mb-8">
                                A talented professional with an academic
                                background in IT and proven commercial
                                development experience as C++ developer since
                                1999. Has a sound knowledge of the software
                                development life cycle. Was involved in more
                                than 140 software development outsourcing
                                projects.
                              </p>
                              <p className="font-size-4 mb-8">
                                Programming Languages: C/C++, .NET C++, Python,
                                Bash, Shell, PERL, Regular expressions, Python,
                                Active-script.
                              </p>
                            </div>

                            <div className="single-section skill">
                              <h4>Skills</h4>
                              <ul className="list-unstyled d-flex align-items-center flex-wrap">
                                <li>
                                  <a href="#">Agile</a>
                                </li>
                                <li>
                                  <a href="#">Wireframing</a>
                                </li>
                                <li>
                                  <a href="#">Prototyping</a>
                                </li>
                                <li>
                                  <a href="#">Information</a>
                                </li>
                                <li>
                                  <a href="#">Waterfall Model</a>
                                </li>
                                <li>
                                  <a href="#">New Layout</a>
                                </li>
                                <li>
                                  <a href="#">Ui/Ux Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Design</a>
                                </li>
                                <li>
                                  <a href="#">Graphics Design</a>
                                </li>
                              </ul>
                            </div>

                            <div className="single-section exprerience">
                              <h4>Work Exprerience</h4>

                              <div className="single-exp mb-30">
                                <div
                                  className="
                        d-flex
                        align-items-center
                        pr-11
                        mb-9
                        flex-wrap flex-sm-nowrap
                      "
                                >
                                  <div className="image">
                                    <img
                                      src="../assets/images/client/work1.png"
                                      alt="#"
                                    />
                                  </div>
                                  <div className="w-100 mt-n2">
                                    <h3 className="mb-0">
                                      <a href="#">Lead Product Designer</a>
                                    </h3>
                                    <a href="#">Airabnb</a>
                                    <div
                                      className="
                            d-flex
                            align-items-center
                            justify-content-md-between
                            flex-wrap
                          "
                                    >
                                      <a href="#">
                                        Jun 2020 - April 2022- 3 years
                                      </a>
                                      <a
                                        href="#"
                                        className="font-size-3 text-gray"
                                      >
                                        <span className="mr-2">
                                          <i className="lni lni-map-marker"></i>
                                        </span>
                                        New York, USA
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="single-exp mb-30">
                                <div
                                  className="
                        d-flex
                        align-items-center
                        pr-11
                        mb-9
                        flex-wrap flex-sm-nowrap
                      "
                                >
                                  <div className="image">
                                    <img
                                      src="../assets/images/client/work2.png"
                                      alt="#"
                                    />
                                  </div>
                                  <div className="w-100 mt-n2">
                                    <h3 className="mb-0">
                                      <a href="#">Senior UI/UX Designer</a>
                                    </h3>
                                    <a href="#">Google Inc</a>
                                    <div
                                      className="
                            d-flex
                            align-items-center
                            justify-content-md-between
                            flex-wrap
                          "
                                    >
                                      <a href="#">
                                        Jun 2020 - April 2022- 3 years
                                      </a>
                                      <a
                                        href="#"
                                        className="font-size-3 text-gray"
                                      >
                                        <span className="mr-2">
                                          <i className="lni lni-map-marker"></i>
                                        </span>
                                        New York, USA
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="single-section education">
                              <h4>Education</h4>

                              <div className="single-edu mb-30">
                                <div
                                  className="
                        d-flex
                        align-items-center
                        pr-11
                        mb-9
                        flex-wrap flex-sm-nowrap
                      "
                                >
                                  <div className="image">
                                    <img
                                      src="../assets/images/client/work2.png"
                                      alt="#"
                                    />
                                  </div>
                                  <div className="w-100 mt-n2">
                                    <h3 className="mb-0">
                                      <a href="#">Masters in Art Design</a>
                                    </h3>
                                    <a href="#">Harvard University</a>
                                    <div
                                      className="
                            d-flex
                            align-items-center
                            justify-content-md-between
                            flex-wrap
                          "
                                    >
                                      <a href="#">
                                        Jun 2020 - April 2022- 3 years
                                      </a>
                                      <a
                                        href="#"
                                        className="font-size-3 text-gray"
                                      >
                                        <span className="mr-2">
                                          <i className="lni lni-map-marker"></i>
                                        </span>
                                        Brylin, USA
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="single-edu mb-30">
                                <div
                                  className="
                        d-flex
                        align-items-center
                        pr-11
                        mb-9
                        flex-wrap flex-sm-nowrap
                      "
                                >
                                  <div className="image">
                                    <img
                                      src="../assets/images/client/work2.png"
                                      alt="#"
                                    />
                                  </div>
                                  <div className="w-100 mt-n2">
                                    <h3 className="mb-0">
                                      <a href="#">
                                        Bachelor in Software Engineering
                                      </a>
                                    </h3>
                                    <a href="#">
                                      Manipal Institute of Technology
                                    </a>
                                    <div
                                      className="
                            d-flex
                            align-items-center
                            justify-content-md-between
                            flex-wrap
                          "
                                    >
                                      <a href="#">
                                        Fed 2019 - April 2022 - 4 years{" "}
                                      </a>
                                      <a
                                        href="#"
                                        className="font-size-3 text-gray"
                                      >
                                        <span className="mr-2">
                                          <i className="lni lni-map-marker"></i>
                                        </span>
                                        New York, USA
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </div>
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
    </>
  );
};
export default ShortList;

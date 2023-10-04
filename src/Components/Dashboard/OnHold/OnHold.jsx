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
/* import "./NewApplicants.css"; */
import { Link } from "react-router-dom";

const OnHold = () => {
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
     

<div className="manage-resumes section">
    <div className="container">
      <div className="resume-inner">
        <div className="row">
          <div className="col-12">
            <div className="inner-content">
              <div className="resume-item">
                <img src="../assets/images/client/client04.png" alt="Candidate"/>
                <div className="right row">
                  <div className="col-6">
                  <h5 className="title-main mt-3">Pawan Shroff</h5>
            
                  <span className="deg"> Web Developer</span>
                  
                  </div>
                  <div className="col-6">
                  <ul className="experience">
                    <li>Experience: <span>3-5 years</span></li>
                    
                    <li>
                    <i className="fa fa-map-marker"></i>
                      Delhi,India
                    </li>
                  </ul>
                  </div>

                 
               
                  
                </div>
                <div className="right">
                <ul className="skills">
                    <li>Php</li>
                    <li>jQuery</li>
                    <li>WordPress</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                  </ul>
                  <div className="update-date">
                    <p className="status">
                      <strong>Updated on:</strong> Fab 22, 2022
                    </p>
                    <div className="action-btn widget-search">
             
                            <button className="btn " onClick={handleOnclick}>
                              {showbtntxt}
                            </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  <div style={{ display: `${showexpand}` }}>
      <div className="resume ">
        <div className="container">
          <div className="resume-inner">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="inner-content widget">
                  <div className="personal-top-content">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="name-head">
                          <a className="mb-2" href="">
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
                          <div className="single-list">
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
                      </div>
                      <div className="col-lg-8 col-md-8 col-12">
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
                            <h5 className="title">Preferred Location</h5>
                            <p>
                              <a href="#">Delhi</a> <span>Gurgaon</span>
                            </p>
                          </div>
                         

                         
                        </div>
                      </div>
                    </div>
                  </div>

               
                    <div className="single-section skill">
                      <h4>About</h4>
                      <p className="font-size-4 mb-8">
                        A talented professional with an academic background in
                        IT and proven commercial development experience as C++
                        developer since 1999. Has a sound knowledge of the
                        software development life cycle. Was involved in more
                        than 140 software development outsourcing projects.
                      </p>
                      <p className="font-size-4 mb-8">
                        Programming Languages:
                      </p>
                      <ul className="list-unstyled d-flex align-items-center flex-wrap">
                        <li>
                          <a href="#">C</a>
                        </li>
                        <li>
                          <a href="#">C++</a>
                        </li>
                        <li>
                          <a href="#">.NET</a>
                        </li>
                        <li>
                          <a href="#">python</a>
                        </li>
                        <li>
                          <a href="#"> Bash</a>
                        </li>
                        <li>
                          <a href="#">PERL</a>
                        </li>
                       
                      </ul>
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
                              <a href="#">Jun 2020 - April 2022- 3 years</a>
                              <a href="#" className="font-size-3 text-gray">
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
                              <a href="#">Jun 2020 - April 2022- 3 years</a>
                              <a href="#" className="font-size-3 text-gray">
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
                              <a href="#">Jun 2020 - April 2022- 3 years</a>
                              <a href="#" className="font-size-3 text-gray">
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
                              <a href="#">Bachelor in Software Engineering</a>
                            </h3>
                            <a href="#">Manipal Institute of Technology</a>
                            <div
                              className="
                            d-flex
                            align-items-center
                            justify-content-md-between
                            flex-wrap
                          "
                            >
                              <a href="#">Fed 2019 - April 2022 - 4 years </a>
                              <a href="#" className="font-size-3 text-gray">
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
      </div>
    </>
  );
};
export default OnHold;

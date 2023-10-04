import { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Card,
} from "react-bootstrap";
import Footer from "../Home/Footer";
import NewApplicants from "../Dashboard/New Applicants/NewApplicants";
import ShortList from "../Dashboard/ShortList/ShortList";
import OnHold from "../Dashboard/OnHold/OnHold";
import PostNewJobs from "./PostNewJobs";
import PostedNewJobs1 from "./PostedNewJobs1";
const PostedJos = () => {
  const [ShowNewApplicants, setShowNewApplicants] = useState("");
  const [ShowShortList, setShowShortList] = useState("");
  const [ShowOnHold, setShowOnHold] = useState("");

  const [Applicants, setApplicants] = useState(true);
  const [OnHoldsjob, setOnHoldsjob] = useState(true);
  const [ShortListJob, setShortListJob] = useState(true);
  const [postedjob, setpostedjob] = useState("");
  const Handlenewapplicantbtn = () => {
    setApplicants(!Applicants);
    console.log(" Applicants Clicked");

    if (Applicants) {
      setShowNewApplicants("");
      setpostedjob("none");
      setShowShortList("none");
      setShowOnHold("none");
    } else {
      setShowNewApplicants("none");
      setShowShortList("none");
      setpostedjob("");
      setShowOnHold("none");
    }
  };
  const Sbtn = () => {
    setShortListJob(!ShortListJob);
    console.log(" shortListed Clicked");

    if (ShortListJob) {
      setShowNewApplicants("none");
      setpostedjob("none");
      setShowOnHold("none");
      setShowShortList("");
    } else {
      setShowNewApplicants("none");
      setShowShortList("none");
      setShowOnHold("none");
      setpostedjob("");
    }
  };
  const HandleOnHold = () => {
    setOnHoldsjob(!OnHoldsjob);
    console.log(" hold Clicked");
    setShortListJob(!ShortListJob);
    if (OnHoldsjob) {
      setShowNewApplicants("none");
      setpostedjob("none");
      setShowShortList("none");
      setShowOnHold("");
      console.log(" hold true");
    } else {
      setShowNewApplicants("none");
      setShowShortList("none");
      console.log(" hold false");
      setShowOnHold("none");
      setpostedjob("");
    }
  };
  return (
    <>
      <section className="feature-section  oh">
        <div className="container">
          {/* <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <div className="section-header mw-100">
                        <h5 className="cate">Posted Jobs</h5>
                    
                    </div>
                </div>
            </div> */}
          <ul className="nav nav-tabs feature-tab-menu mt-0">
            <li>
              <a data-toggle="tab" href="#posted" className="active">
                <i className="fa fa-home"></i> Home
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#one" className="">
                New Applicants(1)
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#two" className="">
                Short List(0)
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#three" className="">
                On Hold(1)
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#four" className="">
                Interviewed(1)
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#five" className="">
                Rejection(2)
              </a>
            </li>
          </ul>
         
          <div className="tab-content">
            <div className="tab-pane fade active show" id="posted">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-tab-header">
                    <h3 className="title">posted jobs</h3>
                    <PostedNewJobs1 />
            
                 
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade " id="one">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="feature-tab-header">
                    <h3 className="title">new applicants</h3>
                    <OnHold />
                    <div className="mb-2"></div>
                    <OnHold />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="two">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-tab-header">
                    <h3 className="title">short list</h3>

                    <OnHold />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="three">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="feature-tab-header">
                    <h3 className="title">on hold</h3>
                    <OnHold />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="four">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="feature-tab-header">
                    <h3 className="title">interviewed</h3>
                    <OnHold />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="five">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="feature-tab-header">
                    <h3 className="title">rejection</h3>
                    <OnHold />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      <Footer />
    </>
  );
};
export default PostedJos;

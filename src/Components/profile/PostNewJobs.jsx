import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Card,
} from "react-bootstrap";
import "./PostNewJobs.css";
import CountrySelect from "./country/Inputcountry";
import Skills from "./addskill/Skills";
import Qualification from "./qualification/Qualification";
import Jobtype from "./Jobtype/Jobtype";
import Experiance from "./experience/Experience";
import Salary from "./Salary/salary";
import Document from "./addskill/Documents/Document";
import DeliTimePicker from "./workingtime/timepicker/timepicker";
import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import Footer from "../Home/Footer";

const PostNewJobs = () => {
  const [time, settime] = useState("");

  const[job_title,setJob]=useState(''); 
  const[job_type,setType]=useState(''); 
  
  const[location,setLocation]=useState(''); 
  const[job_description,setDescription]=useState(''); 
  const[skill_id,setSkill]=useState(''); 
  const[experience,setExperience]=useState(''); 
  const[salary_range_from,setSalaryFrom]=useState('');
  const[salary_range_to,setSalaryTo]=useState('');
  const[total_opening,setOpening]=useState('');
  const[qualification,setQualiification]=useState(''); 
  const[working_days,setDays]=useState(''); 
  const[working_time_start,setStartTime]=useState(''); 
  const[working_time_end,setEndTime]=useState(''); 
  const[required_document,setDocument]=useState(''); 
  const[job_posted_by,setPostedBy]=useState('');
  const[employer_token,setToken]=useState('');

  // const data=[
  //   {country:'html',id:1},
  //   {country:'css',id:2},
  //   {country:'js',id:3},
  //   {country:'php',id:4},
  // ]
  // const [options]=useState(data);

  async function PostJob()
  {
    let item ={job_title,job_type,location,job_description,skill_id,experience,salary_range_from,salary_range_to,total_opening,qualification,working_days,working_time_start,working_time_end,job_posted_by,employer_token}
    console.warn(item)

   let result=await fetch("https://thecareerads.com/career-ads/api/employerJobPost",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result=await result.json()
    console.warn("result",result)
  }
  
 
  var token = JSON.parse(localStorage.getItem('Name'));

  return (
    <>
     <Navbar bg="" className="pnavbar feature-tab-menu" expand="lg">
        <Navbar.Brand href="/profile" style={{ color: "white" }}>
          DashBoard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Post Jobs
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "white" }}>
              New Job Posting
            </Nav.Link>
          </Nav>
          <Form className="pForm" inline>
            <FormControl
              type="text"
              placeholder="Search Job titles..."
              className="mr-sm-2 navsearch1"
            />
            <FormControl
              type="text"
              placeholder="Search Location..."
              className="mr-sm-2 navsearch1"
            />

            {/*  <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    <div>
    <section className="job-post section mb-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-12">
          <div className="job-information">
            <h3 className="title">Create New Job</h3>
            
              <div className="row">
              <div className="col-lg-12">
                  <div className="form-group">
                 
                    <input className="form-control" type="hidden" 
                    
                       value={employer_token}
                       onClick={(e) => setToken(token)}
                       
                       />
                  </div>
                </div>  
                <div className="col-lg-12">
                  <div className="form-group">
                    <Form.Label>Job title*</Form.Label>
                    <input className="form-control" type="text" 
                       value={job_title}
                       onChange={(e) => setJob(e.target.value)}
                       onClick={(e) => setToken(token)}/>
                  </div>
                </div>              
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Job Types*</Form.Label>
                    <select className="select mt-0"    value={job_type}
            onChange={(e) => setType(e.target.value)}>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Office">Office</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Job Location*</Form.Label>
                    <input className="form-control" type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Posted By*</Form.Label>
                    <input className="form-control" type="text"
                     value={job_posted_by}
                     onChange={(e) => setPostedBy(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Qualification*</Form.Label>
                    <select className="select mt-0"
                     value={qualification}
                     onChange={(e) => setQualiification(e.target.value)}>
                      <option value="Default">Default</option>
                      <option value="High school">High school</option>
                      <option value="intermediate">intermediate</option>
                      <option value="graduation">graduation</option>
                      <option value="post graduation">post graduation</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <Form.Label>Job Description*</Form.Label>
                    <textarea className="form-control" rows="5"
                     value={job_description}
                     onChange={(e) => setDescription(e.target.value)}></textarea>
                  </div>
                </div>
               
               
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Skills Required*</Form.Label>
                    <select className="select mt-0"
                     value={skill_id}
                     onChange={(e) => setSkill(e.target.value)}>
                      <option value="html">html</option>
                      <option value="css">css</option>
                      <option value="java">java</option>
                      <option value="graduation">js</option>
                      <option value="post graduation">php</option>
                    </select>
                    
                  </div>
                  {/* <Multiselect options={options} displayValue={"country"}
                  value={skill_id}
                  onChange={(e) => setSkill(e.target.value)} /> */}
                
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Number of Opening*</Form.Label>
                    <input className="form-control" type="number"
                     value={total_opening}
                     onChange={(e) => setOpening(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Experience*</Form.Label>
                    <select className="select mt-0"
                     value={experience}
                     onChange={(e) => setExperience(e.target.value)}>
                      <option value="" >Choose In Year</option>
                      <option value="2">0-1(year)</option>
                      <option value="3">1-3(year)</option>
                      <option value="4">3-5(year)</option>
                      <option value="5">5 and above</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Salary Range*</Form.Label>
                    <select className="select mt-0 w-50"  value={salary_range_from}
                     onChange={(e) => setSalaryFrom(e.target.value)}>
                      <option value="1" >fom</option>
                      <option value="2">10000</option>
                      <option value="3">20000</option>
                      <option value="4">30000</option>
                      <option value="5">40000</option>
                    </select>
                    <select className="select mt-0 w-50"  value={salary_range_to}
                     onChange={(e) => setSalaryTo(e.target.value)}>
                      <option value="1" >to</option>
                      <option value="2">10000</option>
                      <option value="3">20000</option>
                      <option value="4">30000</option>
                      <option value="5">40000</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Working Days*</Form.Label>
                    <input className="form-control" type="number"
                     value={working_days}
                     onChange={(e) => setDays(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <Form.Label>Working Time*</Form.Label>
                    <input className="form-control w-50" type="time"
                     value={working_time_start}
                     onChange={(e) => setStartTime(e.target.value)}/>
                    <input className="form-control w-50" type="time"
                     value={working_time_end}
                     onChange={(e) => setEndTime(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-12 ">
                <div className="form-group">
                <Form.Label>Document Required</Form.Label>
                </div>
            
                    <Document />
                
                </div>

               
              </div>
            
              <div className="row">
                <div className="col-lg-12 action-btn widget-search ">
                  <button className="btn" onClick={PostJob} >Post  Job</button>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>



    
      {/* <div className="job-post section">
        <div className="job-information">
        <Card.Title style={{ "text-align": "center", "margin-top": "2%" }}>
            <h3>Post New Job</h3>
          </Card.Title>
          <hr className="solid"></hr>
          <div>
            <Form.Label className="form-group">Job Name * </Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <FormControl
              type="text"
                value={job_title}
                       onChange={(e) => setJob(e.target.value)}
              placeholder="Enter Job titles..."
              className="mr-sm-2 pSearch1"
            />
          </Card.Body>

          <div>
            <hr className="solid"></hr>
            <Form.Label className="form-label2">Job type * </Form.Label>
            <p className="jobtype2">Job type must describe one positon </p>
          </div>

          <Card.Body className="cardBod">
            <div className="qualification">
            <select className="select mt-0"    value={job_type}
            onChange={(e) => setType(e.target.value)}>
                      <option value="1">Full Time</option>
                      <option value="2">Part Time</option>
                      <option value="3">Contract</option>
                      <option value="4">Internship</option>
                      <option value="5">Office</option>
                    </select>
            </div>
          </Card.Body>
          <hr className="solid"></hr>

          <div>
            <Form.Label className="form-label1">Job Location *</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <FormControl
              type="text"
              placeholder="Job Loaction"
              className="mr-sm-2 pSearch1"
            />
            <div className="country">
              <CountrySelect />
            </div>
          </Card.Body>

          <hr className="solid"></hr>

          <div>
            <Form.Label className="form-label1">Posted By *</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <FormControl
              type="text"
              placeholder="Name"
              className="mr-sm-2 pSearch1"
            />
          </Card.Body>

          <hr className="solid"></hr>

          <div>
            <Form.Label className="form-label1">Job Description *</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <FormControl
              type="text"
              placeholder="Job Description"
              className="mr-sm-2 pSearch1"
            />
          </Card.Body>

          <hr className="solid"></hr>

          <div>
            <Form.Label className="form-label1 skill">Skills *</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <div className="pSearch1">
              <Skills />
            </div>
          </Card.Body>
          <hr className="solid"></hr>
          <div>
            <div>
              <Form.Label className="form-label1 skill">
                Higher Qualification*
              </Form.Label>
              <p className="jobtype1">Job title must describe one positon </p>
            </div>
            <Card.Body className="cardBod">
              <div className="qualification">
                <Qualification />
              </div>
            </Card.Body>
            <hr className="solid"></hr>
            <Form.Label className="form-label1 Hiring">
              Number of Opening*
            </Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <FormControl
              type="text"
              placeholder="Opening"
              className="mr-sm-2 pSearch1"
            />
          </Card.Body>

          <hr className="solid"></hr>
          <div>
            <Form.Label className="form-label1">Experience *</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <div className="qualification">
              <Experiance />
            </div>
          </Card.Body>

          <hr className="solid"></hr>

          <div>
            <Form.Label className="form-label1">Salary*</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <div className="qualification">
              <Salary />
            </div>
          </Card.Body>
          <hr className="solid"></hr>

          <div>
            <Form.Label className="form-label1">Working Time*</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <div className="pSearch1">
              <DeliTimePicker value={time} onChange={(date) => settime(date)} />

              <DeliTimePicker value={time} onChange={(date) => settime(date)} />
            </div>
          </Card.Body>
          <hr className="solid"></hr>

          <div>
            <Form.Label className="form-label1">Document Required*</Form.Label>
            <p className="jobtype1">Job title must describe one positon </p>
          </div>
          <Card.Body className="cardBod">
            <div className="pSearch1">
              <Document />
            </div>
          </Card.Body>
          <hr className="solid"></hr>
          <button className="btn" onClick={PostJob} >Post  Job</button>
        </div>
      </div> */}
            <Footer/>
    </>
  );
};
export default PostNewJobs;

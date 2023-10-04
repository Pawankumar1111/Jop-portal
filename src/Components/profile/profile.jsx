import "./profile.css";
import PostedJos from "./PostedJobs";
import PostNewJobs from "./PostNewJobs";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Card,
} from "react-bootstrap";
const Profile = () => {
  return (
    <>
      <Navbar bg="" className="pnavbar feature-tab-menu" expand="lg">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          DashBoard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/postJob" style={{ color: "white" }}>
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

      <PostedJos />
      {/*  <PostNewJobs/>   */}
    </>
  );
};
export default Profile;

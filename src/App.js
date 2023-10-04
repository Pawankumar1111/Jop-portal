
import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Blog from './Components/Blog/Blogpage2';
import BlogDetails from './Components/Blog/BlogDetails';
import CandidateForm from "./Components/candidate/candidate-form"
import Contact from './Components/contact/contact'
import Service from './Components/Service/Service';
import About from "./Components/About/About";
import EmployeDetails from "./Components/employe/employe-details";
import Contractpage from "./Components/contracttohire/contract";
import Header from "./Components/Home/Navbar/Navbar";
import Term from "./Components/term-conditions/Term"
import Privacy from "./Components/Privacy/Privacy";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Singup/Signup";
import Profile from "./Components/profile/profile";
import NewSignup from "./Components/Singup/newsignup/NewSignup";
import EmailVerify from "./Components/Login/EmailVerify";
import OtpVerify from "./Components/Login/OtpVerify";
import ChangePassword from "./Components/Login/ChangePassword";
import PostNewJobs from "./Components/profile/PostNewJobs";

function App() {
  return (
    
    
    <Router>
      <Login/>
      {/* <Header/> */}
     {/* <Navbar /> */} 
 {/*    <MultiStepForm /> */}
    
       <Switch>
      
        <Route path="/"  exact component={Home} />
        <Route path="/home"  exact component={Home} />
        <Route path="/contact"  exact component={Contact} />
        <Route path="/services"  exact component={Service} />
        <Route path="/about"  exact component= {About} />
        
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:slug" ><BlogDetails/></Route>
       <Route path="/candidateform" exact component={CandidateForm} />
       <Route path="/employe" exact component={EmployeDetails} />
       <Route path="/contracttohire" exact component={Contractpage } />
       <Route path="/term" exact component={Term } />
       <Route path="/privacy" exact component={Privacy} />
       <Route path="/signup" exact component={NewSignup} />
       <Route path="/profile" exact component={Profile} />
       <Route path="/reset" exact component={EmailVerify} />
       <Route path="/verify" exact component={OtpVerify} />
       <Route path="/changePassword" exact component={ChangePassword} />
       <Route path="/postJob" exact component={PostNewJobs} />
       <Route path="/login" exact component={Login} />
      </Switch> 
    </Router>
    
  );
};
export default App;
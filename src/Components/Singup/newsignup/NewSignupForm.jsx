import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import {FcGoogle} from "react-icons/fc"

import GoogleLogin from 'react-google-login';
import { useState } from 'react';


const NewSignupForm = () => {
  const[LoginData,setLoginData]=useState(''); 


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhone] = useState("");

  const [location, setLocation] = useState("");
  const [company_name, setcompanyName] = useState("");

 
  const [ password, setpassword] = useState("");
  const [ confirm_password, setpasswordC] = useState("");

  const [  employer_device_type, setdevise] = useState("");

  const [  employer_device_token, settoken] = useState("");
  const [social_id, setsocial] = useState("");
  const [gst_no, setgst] = useState("");
  
 async function Submit()
  {
    let item ={email,name,phone_number,location,company_name,employer_device_type,employer_device_token,social_id,password,confirm_password,gst_no}
    console.warn(item)

   let result=await fetch("https://thecareerads.com/career-ads/api/employerSignup",{
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



  const handleLogin = (googleData) => {
console.log("google data------>",googleData.profileObj)
setLoginData(googleData.profileObj);
console.log("Logindata----->",LoginData.email)
    };
    
  return (
    <Container>
      <Form id="insertForm" method="post">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="email"
            placeholder="Enter Name"
            name="Name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
            name="Email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={phone_number}
            onChange={(e) => setPhone(e.target.value)}
            type="Phone"
            placeholder="Enter Phone"
            name="Phone"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Address"
            name="username"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter State"
            name="username"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter State"
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Industry</Form.Label>
          <Form.Control
            type="password"
            placeholder="Industry"
            name="Industry"
          />
          
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Company Location</Form.Label>
          <Form.Control
           value={location}
           onChange={(e) => setLocation(e.target.value)}
            type="password"
            placeholder="Company Location"
            name="Location"
          />
          
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
     
          value={company_name}
          onChange={(e) => setcompanyName(e.target.value)}
            type="password"
            placeholder="Company Name"
            name="CompanyName"
          />
          
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Designation"
            name="Designation"
          />
          
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
                 value={password}
                 onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
          />
          
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
              value={confirm_password}
              onChange={(e) => setpasswordC(e.target.value)}
          
            type="password"
            placeholder="Confirm Password"
            name="password"
          />
          
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>document</Form.Label>
          <Form.Control
              value={gst_no}
              onChange={(e) => setgst(e.target.value)}
          
            type="file"
            placeholder="upload document"
            name="password"
          />
          
        </Form.Group>


        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Device type</Form.Label>
          <Form.Control
     
          value={employer_device_type}
          onChange={(e) => setdevise(e.target.value)}
            type="password"
            placeholder="Company Name"
            name="CompanyName"
          />
          
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Device token</Form.Label>
          <Form.Control
     
          value={employer_device_token}
          onChange={(e) => settoken(e.target.value)}
            type="password"
            placeholder="Company Name"
            name="CompanyName"
          />
          
        </Form.Group>
       
        <Form.Group controlId="formBasicPassword">
          <Form.Label>social</Form.Label>
          <Form.Control
     
          value={ social_id}
          onChange={(e) => setsocial(e.target.value)}
            type="password"
            placeholder="Company Name"
            name="CompanyName"
          />
          
        </Form.Group> */}
       
       
        <Button  style={{"margin-left": "6px"}}variant="primary" onClick={Submit}>SignUp</Button>
       {/*  <span ><p className="orbtn">OR</p></span> */}
{/*         <GoogleLogin className="Googlebtn"
clientId={"981076608199-v331kdmfjt2oq2r2ha36s2kopmq0hsrl.apps.googleusercontent.com"}
onSuccess={handleLogin}
onFailure={handleLogin}
></GoogleLogin> */}
 
      </Form>
    </Container>
  );
};
export default NewSignupForm;



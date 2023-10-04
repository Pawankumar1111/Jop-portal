import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { validateEmail} from "./EmailValidator"
import "./Signup.css";
import { Form } from "react-bootstrap";
import usePasswordValidator from "./password";
import { handle } from "express/lib/router";

function SignUp ()
 {
   
   
      const [email, setEmail] = useState("");
      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      // const [address, setAddress] = useState("");
      // const [state, setState] = useState("");
      // const [country, setCountry] = useState("");
      // const [company, setCompany] = useState("");
      // const [industry, setIndustry] = useState("");
      // const [location, setLocation] = useState("");
      // const [designation, setDesignation] = useState("");

      // const [emailError, setEmailError] = useState("");
      // const [designationError, setDesignationError] = useState("");
      // const [locationError, setLocationError] = useState("");
      // const [addressError, setAddressError] = useState("");
      // const [stateError, setStateError] = useState("");
      // const [countryError, setCountryError] = useState("");
      // const [nameError, setNameError] = useState("");
      // const [phoneError, setPhoneError] = useState("");
      // const [industryError, setIndustryError] = useState("");
      // const [companyError, setCompanyError] = useState("");
      // const [confirmPassword, setConfirmPassword] = useState("");
      // const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
      // const [password, setPassword, passwordError,setpasswordError] = usePasswordValidator({
      //   min: 8,
      //   max: 15
      // });
      // useEffect(
      //   () => {
      //     if (!email) {
      //       setEmailError("");
      //     } else {
      //       if (validateEmail(email)) {
      //           setEmailError("");
      //       } else {
      //         setEmailError("Please enter a valid email.");
      //       }
      //     }
      //   },
      //   [email]
      // );

      function Submit()
      {
        let item ={email,name,phone}
        console.warn(item)
      }
      
    //  const handleSubmit =() => {
    //       if (name) {
    //         setNameError("");
    //       }
    //        else {
    //           setNameError("Please enter a  name.");
    //         }

    //         if(phone){
    //             setPhoneError("");
    //         }
    //         else{
    //             setPhoneError("please enter  phone number")
    //         }
    //         if(email){
    //             setEmailError("");
    //         }
    //         else{
    //             setEmailError("Please Enter Email")
    //         }
    //         if(address){
    //             setAddressError("");
    //         }
    //         else{
    //             setAddressError("Please Fill Address ")
    //         }
    //         if(state){
    //             setStateError("");
    //         }
    //         else{
    //             setStateError("Please Enter your State ")
    //         }
    //         if(company){
    //             setCompanyError("");
    //         }
    //         else{
    //             setCompanyError("Please Enter your Country ")
    //         }
    //         if(country){
    //           setCountryError("");
    //       }
    //       else{
    //           setCountryError("Please Enter your Country ")
    //       }
    //         if(industry){
    //             setIndustryError("");
    //         }
    //         else{
    //             setIndustryError("Please Enter your Country ")
    //         }
    //         if(location){
    //             setLocationError("");
    //         }
    //         else{
    //             setLocationError("Please Enter your Country ")
    //         }
    //         if(designation){
    //             setDesignationError("");
    //         }
    //         else{
    //             setDesignationError("Please Enter your Designation ")
    //         }
          
         
        
            

          
    //     }
     
   
    
    //   useEffect(
    //     () => {
    //       if (!confirmPassword || !password) {
    //         setConfirmPasswordError("");
    //       } else {
    //         if (password !== confirmPassword) {
    //           setConfirmPasswordError("The passwords must match.");
    //         } else {
    //           setConfirmPasswordError("");
    //         }
    //       }
    //     },
    //     [password, confirmPassword]
    //   );
    
      return (
        
          <div>
            <h3 className="pleasesignup">Please sign up</h3>
            <div className="signupform">
            <div className="formdiv">
            
            
            <label className="label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder=" Enter Name "
              
            />
            {/* <div className="error">{nameError}</div> */}
            
            
            <label className="label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            {/* <div className="error">{emailError}</div> */}
            <label className="label">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter Contact Number"
            />
            {/* <div className="error">{phoneError}</div> */}
            {/* <label className="label">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter Address"
            />
            <div className="error">{addressError}</div>
            
           
            <label className="label">State</label>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="Enter State"
            />
            <div className="error">{stateError}</div>
            <label className="label">Country</label>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              placeholder="Enter Country"
            />
            <div className="error">{countryError}</div>
            <label className="label">Company Name</label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Enter Your Company Name"
            />
            <div className="error">{companyError}</div>
            <label className="label">Industry</label>
            <input
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              type="text"
              placeholder="Enter Industry type"
            />
            <div className="error">{industryError}</div>
            <label className="label">Company Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter Company Location"
            />
            <div className="error">{locationError}</div>
            <label className="label">Designation</label>
            <input
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              type="text"
              placeholder="Your Designation"
            />
            <div className="error">{designationError}</div>
            <label className="label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <div className="error">{passwordError}</div>

            <label className="label">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder=" Confirm Password"
            />
            <div className="error">{confirmPasswordError}</div> */}
            </div>
          
                   
            <button className="btnsub" onClick={Submit}>Submit</button>
            </div>
          </div>
        
        
      );
    }

export default SignUp;

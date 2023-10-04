import React, { useState } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import { AiOutlineClose } from "react-icons/ai";
import Header from "../Home/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import OtpVerify from "./OtpVerify";

function EmailVerify() {
  const [email, setEmail] = useState("");
  const [EmailVerify, showForm] = useState(true);
  async function Submit() {
    let item = { email };
    console.warn(item);

    let result = await fetch(
      "https://thecareerads.com/career-ads/api/employerForgotPassword",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.warn("result", result);
    if (result.status=='SUCCESS'){
        toast.success(result.message);
        showForm(false);
    }
    else{
        toast.error(result.message);
    }
  }

  return (
    <div>
              <ToastContainer className="p-0 "/>
       {EmailVerify ?        <div className="container">
        <div className="account-wrapper top-gap">
          <div className="account-body">
              
              
            <div className="form-head">
              <h4 className="title mb-20">Reset Your Passsword</h4>
              <p>
                Please enter your email address to receive a verification
                password
              </p>
            </div>
      <Form className="account-form">
              <Form.Group controlId="formBasicEmail" className="form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                  name="Email"
                />
              </Form.Group>
              <div className="form-group text-center">
                <Button
                  style={{ "margin-left": "6px" }}
                  variant="primary"
                  onClick={Submit}
                >
                  Send otp
                </Button>
              </div>
            </Form>
            

          </div>
        </div>
      </div>
       :<OtpVerify/>  
} 
    </div>
    
  );
}

export default EmailVerify;

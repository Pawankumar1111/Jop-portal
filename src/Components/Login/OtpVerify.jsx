import React, { useState } from "react";
import "./Login.css";
import { Button, Form, Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import { AiOutlineClose } from "react-icons/ai";
import Header from "../Home/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import ChangePassword from "./ChangePassword";

function OtpVerify() {
  const [email, setEmail] = useState("");
  const [otp, setotp] = useState("");
  const [OtpVerify, showForm] = useState(true);
  async function Submit() {
    let item = { email, otp };
    console.warn(item);

    let result = await fetch(
      "https://thecareerads.com/career-ads/api/employerVerifyOTP",
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
    {OtpVerify ?        <div className="container">
        <div className="account-wrapper top-gap">
          <div className="account-body">
            <div className="form-head">
              <h4 className="title mb-20">OTP Verification</h4>
              <p>Please enter your 4 digit code sent to your email address</p>
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

              <Form.Group controlId="formBasicEmail" className="form-group">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  type="password"
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
                  OTP Verification
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
            :<ChangePassword/>  
        } 
    </div>
  );
}

export default OtpVerify;

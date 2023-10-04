import React, { useState } from "react";
import "./Login.css";
import { Button, Form, Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import { AiOutlineClose } from "react-icons/ai";
import Header from "../Home/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./Login";
import Home from "../Home/Home";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm] = useState("");
  const [ChangePassword, showForm] = useState(true);

  async function Submit() {
    let item = { email, password, confirm_password };
    console.warn(item);

    let result = await fetch(
      "https://thecareerads.com/career-ads/api/employerChangePassword",
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
    {ChangePassword ?     <div className="container">
        <div className="account-wrapper top-gap">
          <div className="account-body">
            <div className="form-head">
              <h4 className="title mb-20">Change Password</h4>
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
                <Form.Label> Password </Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="text"
                  placeholder="Enter new password"
                  name="Email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="form-group">
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control
                  value={confirm_password}
                  onChange={(e) => setconfirm(e.target.value)}
                  type="text"
                  placeholder="confirm password"
                  name="Email"
                />
              </Form.Group>
              <div className="form-group text-center">
                <Button
                  style={{ "margin-left": "6px" }}
                  variant="primary"
                  onClick={Submit}
                >
                  Change Password
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
           :<Home/>  
        } 
    </div>
  );
}

export default ChangePassword;

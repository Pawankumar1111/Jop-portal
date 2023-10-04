import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";

import GoogleLogin from "react-google-login";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const history = useHistory();
  const [LoginData, setLoginData] = useState("");

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [employer_device_type, setdevise] = useState("");

  const [employer_device_token, settoken] = useState("");
  const [social_id, setsocial] = useState("");
  const [LoginForm, showForm] = useState(true);

  async function login() {
    let item = {
      email,
      password,
      employer_device_type,
      employer_device_token,
      social_id,
    };
    console.warn(item);

    let result = await fetch(
      "https://thecareerads.com/career-ads/api/employerLogin",
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
    localStorage.setItem(
      "Name",
      JSON.stringify(result.employerLogin.employer_token)
    );
    if (result.status == "SUCCESS") {
      toast.success(result.message);
      showForm(false);
      history.push("/profile");
    } else {
      toast.error(result.message);
    }
  }

  const handleLogin = (googleData) => {
    console.log("google data------>", googleData.profileObj);
    setLoginData(googleData.profileObj);
    console.log("Logindata----->", LoginData.email);
  };

  return (
    <Container>
      <ToastContainer className="p-0 " />
      <Form id="insertForm" method="post">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter username"
            name="username"
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

        <span class="sign-in-recovery">
          Forgot your password? <a href="/reset">recover password</a>
        </span>

        <Button
          style={{ "margin-left": "6px" }}
          variant="primary"
          onClick={login}
        >
          Login
        </Button>
        <span>
          <p className="orbtn">OR</p>
        </span>
        <GoogleLogin
          className="Googlebtn"
          clientId={
            "981076608199-v331kdmfjt2oq2r2ha36s2kopmq0hsrl.apps.googleusercontent.com"
          }
          onSuccess={handleLogin}
          onFailure={handleLogin}
        ></GoogleLogin>
      </Form>
    </Container>
  );
};
export default LoginForm;

import React, { useState } from "react";
import "./Login.css";
import { Button, Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import {AiOutlineClose} from "react-icons/ai"
import Header from "../Home/Navbar/Navbar";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header variant="primary" onclick={handleShow}/>
       
      <Modal show={show} onHide={handleClose}  style={{"marginTop":"2%"}}>
      <Modal.Header> 
          <Modal.Title >Login</Modal.Title> <AiOutlineClose style={{"fontSize":"150%","cursor":"pointer"}} onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer>
         
        <a className="AnRegister" href="/home"> <Button className="BtnRegister" variant="primary"  >
           Register
          </Button></a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;

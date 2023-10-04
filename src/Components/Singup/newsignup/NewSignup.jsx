import React, { useState } from "react";
import "./NewSignup.css";
import { Button, Modal } from "react-bootstrap";
import NewSignupForm from "./NewSignupForm";

import { AiOutlineClose } from "react-icons/ai";


function NewSignup(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="Signupinfo">
       <h3 className="Signupinfotitle">Please SignUp</h3>
       <Button  href="/signup"className="Signupinfobtn"variant="success">Success</Button>
       </div>
      <Modal show={show} onHide={handleClose}  style={{"marginTop":"5%"}}>
      <Modal.Header> 
          <Modal.Title> Employer Signup</Modal.Title> <AiOutlineClose style={{"fontSize":"150%","cursor":"pointer"}} onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body className="Modal">
          <NewSignupForm />
        </Modal.Body>
        <Modal.Footer>
         
       
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewSignup;

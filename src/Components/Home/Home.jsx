import About from "../Home/About"
import Amazing from "../Home/Amazing"
import Counter from "../Home/Counter"
import How from "../Home/How"
import Coverage from "../Home/Coverage"
import Features from "../Home/Features"
import Customplans from "../Home/Customplans"
import Download from "../Home/Download"
import Footer from "../Home/Footer"
import Banner from "../Home/Banner"
import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import NewSignupForm from "../Singup/newsignup/NewSignupForm";

import { AiOutlineClose } from "react-icons/ai";


const Home=()=>{
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
         <div>
     <Modal show={show} onHide={handleClose}  style={{"marginTop":"5%"}}>
      <Modal.Header> 
          <Modal.Title> Employer Signup</Modal.Title> <AiOutlineClose style={{"fontSize":"150%","cursor":"pointer"}} onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
          <NewSignupForm />
        </Modal.Body>
        <Modal.Footer>
         
       
        </Modal.Footer>
      </Modal>
    </div>
        <Banner/>
        < About/>
        <Amazing/>
        
      <Counter/>
      <How/>
      <Coverage/>
      <Features/>
      <Customplans/>
      <Download/>
      <Footer/>
        </>
    )
}

export default Home;
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import{ GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

import {IoIosArrowDown} from "react-icons/io"

export default function Header(props) {
  console.log("pros-->",props)
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [show,setshow]=useState("none");
 
  const [navColor, setnavColor] = useState("transparent");
  
  const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");

  };

  useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
          window.removeEventListener("scroll", listenScrollEvent);
      };
  }, []);



  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);

  };
const  handleMouseOver=()=>{
    
    setshow("")
  }
  const handleMouseOut=()=>{
   setshow("none")
  }

  return (
    <header className="Header" style={{"background-color":navColor}}>
      <img src="https://www.thecareerads.com/assets/images/logo/logo.png" className="thecareersadsLogo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/home">Home</a>
          <a href="/about">About</a>
           <a className="Serivce" >Services<a  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>< IoIosArrowDown /></a></a> 
           <div class="dropdown1" style={{display:show}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
     
       
     <div class="service">
     
       <ul>
         <li><a className="submenu" href="/candidateform">Verified Candidates</a></li>
         <li><a className="submenu" href="/employe">Job Posting</a></li>
         <li><a  className="submenu" href="/contracttohire">Contract to Hire</a></li>
        
       </ul>
       
     </div>
   </div>
        
          <a href="/contact">Contact</a>
          <a href="/blog">Blogs</a>
          <a style={{"cursor":"pointer"}} onClick={props.onclick}>Login/SignUp</a>
          <a href="#download" className="down">Download</a>

        
          
        </nav>
        
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <span role="img" aria-label="">
        {isNavVisible?<AiOutlineClose style={{color:"black"}}/>:<GiHamburgerMenu style={{color:"black"}}/>}
        </span>
      </button>
    </header>
  );
}

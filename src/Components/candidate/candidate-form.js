import "./candidate-form.css"
import {ImCross} from "react-icons/im";
import {FiCheck} from "react-icons/fi";
import { useState } from "react";
import validator from 'validator'



const CadidateForm=()=>{
    
    const [mobileVerify,setmobileVerify]=useState("true");
    const[emailVerify,setemailVerify]=useState("true");
    const[space,setspace]=useState(true);

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value
        console.log(e.target.value);
        if(e.target.value){
      if (validator.isEmail(e.target.value)) {
        setEmailError("");
        setspace(true);
      } else {
        setEmailError('Enter valid Email!');
        setspace(false);
      }
    }
    else {
        setEmailError('Enter Email!')
        setspace(false);
    }
}

   const handleUserInput=()=>{

    }
   const MobileVerify=()=>{
    setmobileVerify(!mobileVerify);

    }
   const EmailVerify=()=>{

    setemailVerify(!emailVerify);
    }
    
    
    return(
    <div>

    <div className="form-section">
         
        <div>
            <h1>Candidates References</h1>
        </div>
        <div>
            
                <div>
            <div><label>Mobile Number</label></div>
              <input className="input-form"
                type="text"
                name="firstName"
              
                onChange={event => handleUserInput(event)}
                placeholder=" Enter Mobile Number"
              />
             
              <button className="button" onClick={MobileVerify}>verify</button>
              <p className="error">error</p>
             
              <div className="mobile-verification-block">
              { mobileVerify?
                  <div className="notverified">
                <ImCross/>
                  <h4>Not Verified</h4>
                  </div>:
                  <div className="verified">
                  <FiCheck fontSize={"30px"}/>
                  <h4>Verified</h4> 
                  </div>
                }
              </div>
            </div>
            <div>
            <div><label>Email Id</label></div>
              <input className="input-form"
                type="text"
                name="firstName"
               /*  value={fields.firstName} */
                onChange={e => validateEmail(e)}
                placeholder="Enter Email Id "
              />
              
                <button className="button" onClick={EmailVerify}>verify</button>
                <p className="error">{emailError}</p>
                <div className={space?"email-verification-block2":"email-verification-block"}>
              { emailVerify?
                  <div className="notverified">
                <ImCross/>
                  <h4>Not Verified</h4>
                  </div>:
                  <div className="verified">
                  <FiCheck fontSize={"30px"}/>
                  <h4 >Verified</h4> 
                  </div>
                }
              </div>
            </div>
            <div>
            <div className="message-div"><label>Message</label></div>
              <input className="message-input input-form"
                type="text"
                name="firstName"
               /*  value={fields.firstName} */
                onChange={event =>handleUserInput(event)}
                placeholder=""
              />
              
            </div>
            <button className="submit-button button">Submit</button>
           
            
        </div>
       
        </div> 
        <div className="side-img">
        <img src="https://www.thecareerads.com/assets/images/about/about.png" className="form-side-img"/>
        </div>
    </div>
    );
};
export default CadidateForm;
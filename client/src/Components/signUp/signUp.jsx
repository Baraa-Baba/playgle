import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import { useUserAuth } from "../../context/Auth"; 
import GoogleSignIn from "./GoogleSignIn";
import EmailSignIn from "./EmailSignIn";
import PhoneSignUp from "./PhoneSignUp";
import './SignUp.scss'
import {
  FaPhone,
  FaTimes
} from "react-icons/fa";
const SignIn = ({setIsSignUpOpen,signUp}) => { 
  const [IsPhone,setIsPhone]=useState(false) 
  const [isSignUp,setissignUp]=useState(signUp)
  const { user } = useUserAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(user?.uid){ 
      navigate('/dashboard')
    }
  },[user,navigate]) 
  return (
    <div style={{maxWidth:'100vw'}}>
    <div className="blackOverlay"></div>
    <div onClick={()=>setIsSignUpOpen(false)} className="centerFlex">
      <div onClick={(e)=>e.stopPropagation()} className="signCont">
        <div onClick={()=>setIsSignUpOpen(false)} className="closeIconSign">
        <FaTimes />
        </div>
        <div className="subSignCont">
       {!IsPhone&& <div className="everythingElse">
          <div className="flexRow">
      <p className="signInTitle">
        {!isSignUp ? 'log in' : 'Sign up'}
        </p>
      <button className="switchSign" onClick={()=>setissignUp(!isSignUp)}>
        {!isSignUp ?'Sign up' :'log in '}
      </button>
      </div>
        <EmailSignIn isSignUp={isSignUp} />
       
        
        <GoogleSignIn />
        </div>}
       {!IsPhone&& <div onClick={()=>setIsPhone(true)} className="signInbutton phoneNumberButton">
       <div className="PhoneIconCont">
       <FaPhone />
       </div> 
       <span className="center">
       log in using phone number
       </span>
        </div>}
        { IsPhone&&
        <PhoneSignUp setIsPhone={setIsPhone} />
        }
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;    

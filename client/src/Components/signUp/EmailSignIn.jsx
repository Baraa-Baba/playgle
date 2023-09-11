import {   
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink
} from "firebase/auth"; 
import React, { useState,useEffect } from 'react';
import { auth } from "../../firebase"; 
 

export default function EmailSignIn({isSignUp}) { 
    const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
  };

  const handleSignInWithEmailLink = () => { 
    const actionCodeSettings = {
      url: 'http://localhost:3000/signup', // Replace with your app URL 
      handleCodeInApp: true,

    };

    sendSignInLinkToEmail(auth,email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        setStatus('Check your email for the sign-in link!');
      })
      .catch((error) => {
        setStatus(`Error sending sign-in link: ${error.message}`);
      });
  };
  useEffect(() => { 
    if (isSignInWithEmailLink(auth, window.location.href)) { 
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) { 
        email = window.prompt('Please provide your email for confirmation');
      }
      // The client SDK will parse the code from the link for you.
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          alert('logged') 
          window.localStorage.removeItem('emailForSignIn'); 
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  }, []); 
  return (
    <div>
      
      <div> 
        <input placeholder="Enter your Email" className="signInput" type="email" value={email} onChange={(e)=>handleEmailChange(e)} /> 
        
      <div>{status}</div> 
        <button className="signInbutton" onClick={(e)=>handleSignInWithEmailLink(e)}>
          {isSignUp? 'Sign up' : 'log in'}
          </button> 
      </div>
      <style jsx>{`
        body{
          color:black
        }
      `}</style>
    </div>
  ) 
}

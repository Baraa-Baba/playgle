import React,{useState,useEffect} from "react";
import "../Navigation/Navigation.scss"; 
import SignIn from "../signUp/signUp";
import { useUserAuth } from "../../context/Auth"; 
import '../../index.scss'
import{
  FaUser
  } from "react-icons/fa";
import Dashboard from "../Dashboard/Dashboard";
const Navigation = ({setisDashboard,isDashboard}) => {
  const { user } = useUserAuth();
  const [isSignUpOpen,setIsSignUpOpen]=useState(false)  
  const [isSignUpOpenL,setIsSignUpOpenL]=useState(false)  
  const [isSignUpOpenM,setIsSignUpOpenM]=useState(false)    
  return (
    <div className='navgation'> 
      <style jsx>{`
    .goog-logo-link{
      display:none

    } 
                `}</style>
            <div className="logoText">Playgle</div>  
        {!user?.uid &&    <>
      <button onClick={()=>setIsSignUpOpen(!isSignUpOpen)} className='signUp'>sign up</button> 
      {isSignUpOpen&& <SignIn signUp={true} setIsSignUpOpen={setIsSignUpOpen} />  }
       {isSignUpOpenM&& <SignIn signUp={true} setIsSignUpOpen={setIsSignUpOpenM} />  }
      <svg onClick={()=>setIsSignUpOpenM(!isSignUpOpenM)} className='sigininpop scaler' xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
<g filter="url(#filter0_d_507_139)">
<g filter="url(#filter1_dd_507_139)">
<path d="M20.6833 17.8333C22.2271 17.8333 23.7076 17.1749 24.7992 16.0028C25.8908 14.8307 26.5041 13.2409 26.5041 11.5833C26.5041 9.92574 25.8908 8.33603 24.7992 7.16393C23.7076 5.99182 22.2271 5.33334 20.6833 5.33334C19.1396 5.33334 17.6591 5.99182 16.5675 7.16393C15.4759 8.33603 14.8626 9.92574 14.8626 11.5833C14.8626 13.2409 15.4759 14.8307 16.5675 16.0028C17.6591 17.1749 19.1396 17.8333 20.6833 17.8333ZM30.6833 30.3333C30.6833 25.4958 26.2014 21.5833 20.6833 21.5833C15.1653 21.5833 10.6833 25.4958 10.6833 30.3333" fill="#005691"/>
<path d="M30.6833 30.3333C30.6833 25.4958 26.2014 21.5833 20.6833 21.5833C15.1653 21.5833 10.6833 25.4958 10.6833 30.3333M20.6833 17.8333C22.2271 17.8333 23.7076 17.1749 24.7992 16.0028C25.8908 14.8307 26.5041 13.2409 26.5041 11.5833C26.5041 9.92574 25.8908 8.33603 24.7992 7.16393C23.7076 5.99182 22.2271 5.33334 20.6833 5.33334C19.1396 5.33334 17.6591 5.99182 16.5675 7.16393C15.4759 8.33603 14.8626 9.92574 14.8626 11.5833C14.8626 13.2409 15.4759 14.8307 16.5675 16.0028C17.6591 17.1749 19.1396 17.8333 20.6833 17.8333V17.8333Z" stroke="#005691" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<circle cx="21" cy="20" r="18.5" stroke="#005691" stroke-width="3"/>
</g>
<defs>
<filter id="filter0_d_507_139" x="-3" y="0" width="57" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_139"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_139" result="shape"/>
</filter>
<filter id="filter1_dd_507_139" x="5.93333" y="4.58334" width="29.5" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_139"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_507_139" result="effect2_dropShadow_507_139"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_507_139" result="shape"/>
</filter>
</defs>
</svg>
     <div onClick={()=>setIsSignUpOpenL(!isSignUpOpenL)}  className="logInCont">
        <div className="logInSubCont">
      <div className="profileCircleImage">
        <img className="profileImage" alt='profile circle' src='/assets/userIcons/profileCircleGreen.png' />
      </div>
      <span  className="logIn">login</span>
      {isSignUpOpenL&& <SignIn signUp={false} setIsSignUpOpen={setIsSignUpOpenL} />
      }
      </div> 
      </div>  
      </>}
      {isDashboard &&
      <Dashboard setisDashboard={setisDashboard} isDashboard={isDashboard} />
      }
      {user?.uid&& !isDashboard&&
      <a href="/dashboard" >
        <svg className='sigininpop mobileOnly scaler' xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
        <g filter="url(#filter0_d_507_139)">
        <g filter="url(#filter1_dd_507_139)">
        <path d="M20.6833 17.8333C22.2271 17.8333 23.7076 17.1749 24.7992 16.0028C25.8908 14.8307 26.5041 13.2409 26.5041 11.5833C26.5041 9.92574 25.8908 8.33603 24.7992 7.16393C23.7076 5.99182 22.2271 5.33334 20.6833 5.33334C19.1396 5.33334 17.6591 5.99182 16.5675 7.16393C15.4759 8.33603 14.8626 9.92574 14.8626 11.5833C14.8626 13.2409 15.4759 14.8307 16.5675 16.0028C17.6591 17.1749 19.1396 17.8333 20.6833 17.8333ZM30.6833 30.3333C30.6833 25.4958 26.2014 21.5833 20.6833 21.5833C15.1653 21.5833 10.6833 25.4958 10.6833 30.3333" fill="#005691"/>
        <path d="M30.6833 30.3333C30.6833 25.4958 26.2014 21.5833 20.6833 21.5833C15.1653 21.5833 10.6833 25.4958 10.6833 30.3333M20.6833 17.8333C22.2271 17.8333 23.7076 17.1749 24.7992 16.0028C25.8908 14.8307 26.5041 13.2409 26.5041 11.5833C26.5041 9.92574 25.8908 8.33603 24.7992 7.16393C23.7076 5.99182 22.2271 5.33334 20.6833 5.33334C19.1396 5.33334 17.6591 5.99182 16.5675 7.16393C15.4759 8.33603 14.8626 9.92574 14.8626 11.5833C14.8626 13.2409 15.4759 14.8307 16.5675 16.0028C17.6591 17.1749 19.1396 17.8333 20.6833 17.8333V17.8333Z" stroke="#005691" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <circle cx="21" cy="20" r="18.5" stroke="#005691" stroke-width="3"/>
        </g>
        <defs>
        <filter id="filter0_d_507_139" x="-3" y="0" width="57" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_139"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_139" result="shape"/>
        </filter>
        <filter id="filter1_dd_507_139" x="5.93333" y="4.58334" width="29.5" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_139"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_507_139" result="effect2_dropShadow_507_139"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_507_139" result="shape"/>
        </filter>
        </defs>
        </svg>
        </a>}
      {user?.uid &&   
      <div onClick={(e)=>{setisDashboard(true)
      e.stopPropagation()}}>
      <div  className="logInCont" style={{right:'0'}} > 
        <div  className="logInSubCont myAccountlogInSubCont"> 
      <div className="profileCircleImage">
        <img className="profileImage profileImage" alt='profile circle' src='/assets/userIcons/profileCircleGreen.png' />
      </div>
<span  className="logIn myAccountextt">my account</span> 
      </div> 
      </div> 
      </div>  }
    </div>
  );
};
export default Navigation;

import PhoneInput from "react-phone-number-input"; 
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react"; 
import "react-phone-number-input/style.css";
import { useUserAuth } from "../../context/Auth"; 
import './SignUp.scss' 
import {FaArrowLeft} from 'react-icons/fa'
const PhoneSignUp = ({setIsPhone}) => {
    
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [isDisabled,setIsDisabled] =useState(false)
  const [otp, setOtp] = useState("");  
  const { setUpRecaptha } = useUserAuth();
  const [result, setResult] = useState("");
  const getOtp = async (e) => {
    if(!isDisabled){
    e.preventDefault();
    setIsDisabled(true)
    console.log(number);
    setError("");
    if (number === "" || number === undefined){ 
      setIsDisabled(false)
      return setError("Please enter a valid phone number!");
    }
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
      setIsDisabled(false)
    } catch (err) {
      setIsDisabled(false)
       if(err.message==='Firebase: TOO_SHORT (auth/invalid-phone-number).'){
        setError( 'number to short')
      }if(err.message==='reCAPTCHA has already been rendered in this element'){ 
      }else{
        setError(err.message);
      }
    }
  }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);  
      
         
    } catch (err) {
      if(err.message ==='Firebase: Error (auth/invalid-verification-code).'){
        setError('wrong otp')
      }else if(err.message==='Firebase: TOO_SHORT (auth/invalid-phone-number).'){
        setError( 'number is to short')
      }
      else{
      setError(err.message);
      }
    }
  };
  return (
    <div> 
      <div  className='returnPhone' onClick={()=>setIsPhone(false)}><FaArrowLeft /></div>
      <p>Sign in using phone number</p>
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput  
            className='PhoneInput'
             dir="left"
              defaultCountry="LB"
              value={number}
              countries=  {["US","IS","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI","RU","KZ","EG","ZA","GR","NL","BE","FR","ES","HU","IT","VA","RO","CH","AT","GB","GG","IM","JE","DK","SE","NO","SJ","PL","DE","PE","MX","CU","AR","BR","CL","CO","VE","MY","AU","CC","CX","ID","PH","NZ","SG","TH","JP","KR","VN","CN","TR","IN","PK","AF","LK","MM",'LB',"SS","MA","EH","DZ","TN","LY","GM","SN","MR","ML","GN","CI","BF","NE","TG","BJ","MU","LR","SL","GH","NG","TD","CF","CM","CV","ST","GQ","GA","CG","CD","AO","GW","IO","AC","SC","SD","RW","ET","SO","DJ","KE","TZ","UG","BI","MZ","ZM","MG","RE","YT","ZW","NA","MW","LS","BW","SZ","KM","SH","TA","ER","AW","FO","GL","GI","PT","LU","IE","AL","MT","CY","FI","AX","BG","LT","LV","EE","MD","AM","BY","AD","MC","SM","UA","RS","ME","XK","HR","SI","BA","MK","CZ","SK","LI","FK","BZ","GT","SV","HN","NI","CR","PA","PM","HT","GP","BL","MF","BO","GY","EC","GF","PY","MQ","SR","UY","CW","BQ","TL","NF","BN","NR","PG","TO","SB","VU","FJ","PW","WF","CK","NU","WS","KI","NC","TV","PF","TK","FM","MH","KP","HK","MO","KH","LA","BD","TW","MV","LB","JO","SY","IQ","KW","SA","YE","OM","PS","AE","BH","QA","BT","MN","NP","TJ","TM","AZ","GE","KG","UZ"]}
              onChange={setNumber}
              placeholder="Enter your phone number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right"> 
            &nbsp;
            <Button  className='signInbutton verfiy' type="submit" variant="primary">
              send sms 
            {isDisabled&&  <span id="spinner" class="spinner"></span>
}
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              className='signInput'
              placeholder="Enter the otp that has been sent via sms"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right"> 
            &nbsp;
            <Button className='signInbutton' type="submit" variant="primary">
              verfiy
            </Button>
          </div>
        </Form> 
      
      {error && <Alert className='black' variant="danger">{error}</Alert>}
      <style jsx>{`
        .black{
          color:black
        }
        `}</style>
    </div>
  )
}

export default PhoneSignUp
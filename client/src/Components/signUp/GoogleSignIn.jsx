import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { useUserAuth } from '../../context/Auth'; 

const GoogleSignIn = () => {
  const { googleSignIn, user } = useUserAuth(); 
  const handleGoogleSignIn = async () => { 
    try {
      await googleSignIn(); 
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    console.log('useras',user)
    if (user != null) {  
    } 
  }, [user]);

  return (
    <div> 
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton className='GoogleButton' onClick={()=>handleGoogleSignIn()} />
      </div>
    </div>
  );
};

export default GoogleSignIn; 
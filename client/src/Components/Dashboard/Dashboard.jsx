import React, { useEffect,useState,useRef } from 'react';
import { useUserAuth } from '../../context/Auth';
import { useNavigate } from 'react-router-dom'; 
import { db,auth } from "../../firebase";
import { setDoc,doc,getDoc,onSnapshot} from "firebase/firestore";  
import {  updateProfile } from "firebase/auth"; 
import GoogleTranslate from '../ChooseGame/ChooseGame';  
import {countryList} from '../../countryList' 
import Message from '../Chat/Message/Message';
import "../Chat/Chat.scss";
import { 
  FaTimes
} from "react-icons/fa";
import './Dashboard.scss'
import '../signUp/SignUp.scss' 
import ImageInputDisplay from './ImageInputDisplay';
import DarkMode from '../DarkMode/DarkMode'; 
import ChooseGame from '../ChooseGame/ChooseGame';
const Dashboard = ({setisDashboard,isDashboard}) => { 
    const divRref = useRef(null);


    useEffect(()=>{
      function doNothing(x){

      }
      setisDashboard=setisDashboard||doNothing()
      let IsITPage=!setisDashboard?true:false
       setIsPage(IsITPage)
      isDashboard=isDashboard||true
    },[])

  
  const { logOut, user } = useUserAuth(); 
  useEffect(()=>{
    console.log(user)
  },[user])
  const [isDisplayChatRooms,setisDisplayChatRooms]=useState(false) 
  const [userName,setUserName]=useState('') 
  const [lastName,setLastName]=useState('') 
  const [firstName,setFirstName]=useState('') 
  const [isPage,setIsPage]=useState(false)
  const [isDarkMode,setIsDarkMode]=useState(false)
  const [userGenderPrefrence,setUserGenderPrefrence]=useState('')
  const [emailPhone,setemailPhone]=useState('')
  const [UserCountryPrefrence,setUserCountryPrefrence]=useState('')
  const [userGender,setUserGender] =useState('anygender')
  const [introMessage,setintroMessage]=useState('')
  const [userLangue,setuserLangue]=useState('')
  const [isEmail,setIsEmail]=useState(null)  
  const [CurrentRoomId,setCurrentRoomId]=useState('')
  const [messeages,setMessges] =useState([])
  const [InputValue,setInputValue]=useState('')
  const [DisplayedMesseages,setDisplayedMesseages]=useState([])
  const [userGame,setUserGame]=useState('')
  const [count,setCount]=useState(0)   
  const navigate =useNavigate()  
  useEffect(()=>{
    console.log(count)
  },[count])
    useEffect(()=>{
      if(isDisplayChatRooms){
        var chatbox = document.getElementById("chatBox");
        if(chatbox){
            chatbox.scrollTop = chatbox.scrollHeight;
        }
        setTimeout(()=>{
          var chatbox = document.getElementById("chatBox");
          if(chatbox){
              chatbox.scrollTop = chatbox.scrollHeight;
          }
        },1)
      }
    },[isDisplayChatRooms])
    useEffect(()=>{
      if(window.innerWidth > 860){
        navigate('/')
      }
      window.addEventListener('resize',()=>{
        if(window.innerWidth > 860){
          navigate('/')
        }
      })
    },[navigate])
  useEffect(()=>{
    if(document.getElementById('chatBox')){   
      if(window.innerWidth<860){
      let isNotFocusedOnMesseageRoomMobile = isPage&&CurrentRoomId===''
    if(isNotFocusedOnMesseageRoomMobile){ 
      document.getElementById('chatBox').style.display='none'
      document.getElementById('messegingContainer').style.display='none'   
      document.getElementById('ChatRoomsCont').style.display='none'
      document.getElementById('ChatRoomsCont').style.display='none'
      document.getElementById('MesseagingMobileNav').style.display='none'
    }else{
      document.getElementById('messegingContainer').style.display='block'
      document.getElementById('chatBox').style.display='block' 
      document.getElementById('ChatRoomsCont').style.display='block'
      document.getElementById('MesseagingMobileNav').style.display='block'
    }
  }
  }
  },[CurrentRoomId,isPage,isDisplayChatRooms])
  useEffect(()=>{
    var chatbox = document.getElementById("chatBox");
    if(chatbox){
        chatbox.scrollTop = chatbox.scrollHeight;
    }
    setTimeout(()=>{
      var chatbox = document.getElementById("chatBox");
      if(chatbox){
          chatbox.scrollTop = chatbox.scrollHeight;
      }
    },100)
  },[])
  function createMessage(){  
    if(InputValue.trim()==='') return
    async function run(){
      let TheData
      if(messeages.length!==0){
       TheData={
        id:CurrentRoomId,
        messeages:[...messeages,{
          sender:user?.uid,
          text:InputValue
        }]
      }
    }else{
       TheData={
        id:CurrentRoomId,
        messeages:[{
          sender:user?.uid,
          text:InputValue
        }]
      }
    }   
    try{
        await setDoc(doc(db, "chatRooms",CurrentRoomId), TheData);   
    }catch(e){
      alert(e)
    }
    }
    run()
    setInputValue('')
  } 
  function handleKeyDownInput(event){
    if(event.keyCode===13){
      createMessage()
    }
  }  
  useEffect(()=>{ 
    var chatbox = document.getElementById("chatBox");
    if(chatbox){
      chatbox.scrollTop = chatbox.scrollHeight;
      setTimeout(()=>{
        chatbox.scrollTop = chatbox.scrollHeight;
      },1)
    }

  },[messeages]) 
  useEffect(()=>{
    var chatbox = document.getElementById("chatBox");
    if(chatbox){
        chatbox.scrollTop = chatbox.scrollHeight;
    }
    setTimeout(()=>{
    var chatbox = document.getElementById("chatBox");
    if(chatbox){
        chatbox.scrollTop = chatbox.scrollHeight;
    }
  },100)
  },[CurrentRoomId])
  useEffect(()=>{
    if(CurrentRoomId){
      setMessges([])
      async function run(){ 
          onSnapshot(doc(db, "chatRooms",CurrentRoomId ), (doc) => {
          console.log("Current data: ", doc.data()); 
          console.log('roomchbbdbiehod',doc?.data())
          let recivedData=doc?.data()
          if(recivedData?.messeages){
            console.log(recivedData?.messeages)
          if(Array.isArray(recivedData?.messeages)){
            setMessges(recivedData?.messeages) 
          }else{
            setMessges([])
          }
          setDisplayedMesseages([])
          let displayMessegaesTmp=[]
            recivedData?.messeages.forEach((message)=>{
              message.type=message.sender===user?.uid ? 'you'  : 'partner'
              displayMessegaesTmp.push(message)
            })
            setDisplayedMesseages(displayMessegaesTmp)
            console.log(displayMessegaesTmp)
          }
      }) 
        } 
      run() 
    }
  },[CurrentRoomId,user?.uid])
  useEffect(()=>{
    console.log('messeages')
    console.log(messeages)
  },[messeages])
  useEffect(()=>{
    var chatbox = document.getElementById("chatBox");
    if(chatbox){
        chatbox.scrollTop = chatbox.scrollHeight;
    }
  setTimeout(()=>{
    var chatbox = document.getElementById("chatBox");
    if(chatbox){
        chatbox.scrollTop = chatbox.scrollHeight;
    }
  },1000)
},[DisplayedMesseages])
  useEffect(()=>{
    console.log(user?.uid)
    console.log(user?.photoURL)
    if(user?.photoURL){ 
    }
  },[user])
  
  useEffect(()=>{
    if(user?.uid){
      setUserName(user.displayName)
      if(user?.email){
        setIsEmail(true)
      }else{
        setIsEmail(false)
      }
      setemailPhone(user.email||user.phoneNumber)
    async function getUserData(){
       const docRef= doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const userData=docSnap.data()
        console.log(userData,'userData') 
        setFirstName(userData?.firstName)
        setLastName(userData?.lastName)
        setUserGender(userData?.gender)
        setUserGenderPrefrence(userData?.userGenderPrefrence)
        setUserCountryPrefrence(userData?.UserCountryPrefrence) 
        setintroMessage(userData?.introMessage)  
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
         console.log(docRef)
  }
  setTimeout(()=>{ 
    getUserData()
  },200)
}
  },[user])  
  const handleSignOut = async () => { 
    try {
      await logOut();
      navigate('/');
      setisDashboard(false)
      
    } catch (error) {
      console.log(error);
    }
  }; 
  function handleSaveChanges(){
    async function storeUser(){
      try {   
          await setDoc(doc(db, "users",user?.uid), {  
          id:user?.uid,
          firstName:firstName?firstName:'',
          lastName:lastName?lastName:'',
          displayName: userName?userName:''  ,
          photoURL:document.getElementById('display-image').src?document.getElementById('display-image').src:user?.photoURL,
          introMessage:introMessage?introMessage:'', 
        },{merge:true});   
        alert('changes were successfully saved')
        navigate('/')
      } catch (e) { 
        alert('error',e)
        console.error("Error adding document: ", e); 
      }
    }
    storeUser()
    updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL:document.getElementById('display-image').src?document.getElementById('display-image').src:user?.photoURL
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }  
  return (
    <>
   {!isPage&& <div className="blackOverlay"></div>}
    <div className="centerFlex" onClick={()=>setisDashboard(false)}>
    <div className='dashboardCont' onClick={(e)=>e.stopPropagation()}>
    { !isPage &&           
    <div onClick={()=>setisDashboard(false)} style={{color:isDarkMode?'white':'black',padding:'1rem',top:'0'}} className="closeIconSign  ">
        <FaTimes />
        </div>} 
        <> 
      <div className="flexRowWebColumnMobile"><div className="Section">
        <div  className='flexRow w88Mobile'>
          <h1 className='dashboard'>Dashboard</h1>
          <ImageInputDisplay user={user} userId={user?.uid} />
        </div>

      <div className="fullNameCont">
      <div> 
          <label htmlFor="FirstNameInput" className='labelDashboardInput'>first name</label>
        <input id='FirstNameInput' className='dashBoardInput' type='text' placeholder='first name' value={firstName} onInput={(e)=>setFirstName(e.target.value)} />
      </div>
      <div> 
          <label htmlFor="LastNameInput" className='labelDashboardInput'>last name</label>
        <input id='LastNameInput' className='dashBoardInput' type='text' placeholder='last name' value={lastName}
         onInput={(e)=>setLastName(e.target.value)} />
      </div>
      </div>
      <div> 
          <label htmlFor="userNameInput" className='labelDashboardInput'>user name</label>
        <input id='userNameInput' className='dashBoardInput' type='text' placeholder='username' value={userName} onInput={(e)=>setUserName(e.target.value)} />
      </div>
      <label htmlFor="emailPhoneInput" className='labelDashboardInput'>{isEmail===false&&'phone'}
      {isEmail===true&&'email'}
      </label>
      <input value={emailPhone} id='emailPhoneInput' disabled className=' dashBoardInput' /> 
          <label htmlFor="introMessage" className='labelDashboardInput'>intro message</label>
         <input id='introMessage' value={introMessage} className='dashBoardInput' placeholder='enter intro message'
          onInput={(e)=>setintroMessage(e.target.value)} />
    
         
      </div>
      <div className="Section">
      <div className='googleTranslateCont'>
          <label htmlFor="" className='labelDashboardInput'>choose your language </label>
          <ChooseGame setuserLangue={setuserLangue} userGame={userGame} />
        </div> 
      <label className='labelDashboardInput' htmlFor="">chat filters:</label>
      <div className='chatFiltersContDashBoard w88Mobile'>
        <div className="GenderPrefrence">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
<path d="M17.5 17.5C19.4339 17.5 21.2885 16.7317 22.656 15.3643C24.0234 13.9968 24.7917 12.1422 24.7917 10.2083C24.7917 8.27442 24.0234 6.41976 22.656 5.05231C21.2885 3.68485 19.4339 2.91663 17.5 2.91663C15.5661 2.91663 13.7114 3.68485 12.344 5.05231C10.9765 6.41976 10.2083 8.27442 10.2083 10.2083C10.2083 12.1422 10.9765 13.9968 12.344 15.3643C13.7114 16.7317 15.5661 17.5 17.5 17.5ZM4.9729 32.0833C4.9729 26.4395 10.5875 21.875 17.5 21.875L4.9729 32.0833ZM26.5417 31.2083C27.7793 31.2083 28.9663 30.7166 29.8415 29.8415C30.7167 28.9663 31.2083 27.7793 31.2083 26.5416C31.2083 25.304 30.7167 24.117 29.8415 23.2418C28.9663 22.3666 27.7793 21.875 26.5417 21.875C25.304 21.875 24.117 22.3666 23.2418 23.2418C22.3666 24.117 21.875 25.304 21.875 26.5416C21.875 27.7793 22.3666 28.9663 23.2418 29.8415C24.117 30.7166 25.304 31.2083 26.5417 31.2083ZM32.0833 32.0833L30.625 30.625L32.0833 32.0833Z" fill={isDarkMode?'#E4EDDC': '#005691'}/>
<path d="M4.9729 32.0833C4.9729 26.4395 10.5875 21.875 17.5 21.875M32.0833 32.0833L30.625 30.625M17.5 17.5C19.4339 17.5 21.2885 16.7317 22.656 15.3643C24.0234 13.9968 24.7917 12.1422 24.7917 10.2083C24.7917 8.27442 24.0234 6.41976 22.656 5.05231C21.2885 3.68485 19.4339 2.91663 17.5 2.91663C15.5661 2.91663 13.7114 3.68485 12.344 5.05231C10.9765 6.41976 10.2083 8.27442 10.2083 10.2083C10.2083 12.1422 10.9765 13.9968 12.344 15.3643C13.7114 16.7317 15.5661 17.5 17.5 17.5ZM26.5417 31.2083C27.7793 31.2083 28.9663 30.7166 29.8415 29.8415C30.7167 28.9663 31.2083 27.7793 31.2083 26.5416C31.2083 25.304 30.7167 24.117 29.8415 23.2418C28.9663 22.3666 27.7793 21.875 26.5417 21.875C25.304 21.875 24.117 22.3666 23.2418 23.2418C22.3666 24.117 21.875 25.304 21.875 26.5416C21.875 27.7793 22.3666 28.9663 23.2418 29.8415C24.117 30.7166 25.304 31.2083 26.5417 31.2083Z" stroke={isDarkMode?'#E4EDDC': '#005691'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="26.5" cy="26.5" r="5.5" fill={isDarkMode?'#E4EDDC': '#23D172'}/> 
</svg>
        <select onClick={(e)=>e.preventDefault} value={userGenderPrefrence} id='selectGenderPrefrence'  onInput={(e)=>
        {e.preventDefault() 
          setUserGenderPrefrence(e.target.value)}} > 
        <option className='genderOptions' value='anygender'>all</option>
          <option className='genderOptions' value='male'>male</option>
          <option className='genderOptions' value='female'>female</option>
        </select>   
        <div>
        </div>
        </div>
        <div className="countryPrefrence">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
<path d="M32.0834 17.5C32.0834 9.44996 25.5501 2.91663 17.5001 2.91663C9.45008 2.91663 2.91675 9.44996 2.91675 17.5C2.91675 25.55 9.45008 32.0833 17.5001 32.0833" stroke={isDarkMode? '#E4EDDC': '#005691'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6666 4.375H13.125C10.2813 12.894 10.2813 22.106 13.125 30.625H11.6666M21.875 4.375C23.2895 8.63333 24.0041 13.0667 24.0041 17.5L21.875 4.375Z" stroke={isDarkMode? '#E4EDDC': '#005691'} />
<path d="M11.6666 4.375H13.125C10.2813 12.894 10.2813 22.106 13.125 30.625H11.6666M21.875 4.375C23.2895 8.63333 24.0041 13.0667 24.0041 17.5" stroke={isDarkMode? '#E4EDDC': '#005691'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.375 23.3333V21.875C8.63333 23.2895 13.0667 24.0041 17.5 24.0041M4.375 13.125C12.894 10.2813 22.106 10.2813 30.625 13.125M32.0833 32.0833L30.625 30.625M26.5417 31.2083C27.7793 31.2083 28.9663 30.7166 29.8415 29.8415C30.7167 28.9663 31.2083 27.7793 31.2083 26.5416C31.2083 25.304 30.7167 24.117 29.8415 23.2418C28.9663 22.3666 27.7793 21.875 26.5417 21.875C25.304 21.875 24.117 22.3666 23.2418 23.2418C22.3667 24.117 21.875 25.304 21.875 26.5416C21.875 27.7793 22.3667 28.9663 23.2418 29.8415C24.117 30.7166 25.304 31.2083 26.5417 31.2083Z" stroke={isDarkMode?'#E4EDDC': '#005691'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <input onInput={(e)=>setUserCountryPrefrence(e.target.value)} 
        list="selectCountrys" placeholder={'all'} value={UserCountryPrefrence}
        size={UserCountryPrefrence ? UserCountryPrefrence.length:1}  name="selectCountry" id="selectCountry" />

        <datalist style={{display:'none'}}
           id='selectCountrys' className='selectGender'> 
        <option value='anycountry'>all</option>
        { 
      countryList.map(fruit => <option  key={fruit}  value={fruit}
          >{fruit}</option>)
    }
        </datalist>
        </div> 
      </div> 
      <div className="startbuttonsCont">
      <button className='saveChanges'  onClick={()=>handleSaveChanges()}>save changes</button>
      <button className='logOut' onClick={handleSignOut} >
        Logout
      </button>
      </div>
      </div>
      </div> 
      </>
    </div>
    </div> 
    {isDarkMode && <DarkMode /> }
    {isPage &&
    <style jsx>{` 
    .centerFlex{
      position:static
    }
    `}
    </style>
    }
  {isPage || isDashboard ? <style jsx>{`
           .goog-te-combo{ 
            max-width: 100% !important;
            height: 46px;
            width: 100%;
            font-size: 18px !important; 
            border: 1px solid gray;
            outline: none;
            margin-bottom: 20px;
        }
        @media screen and (max-width: 860px) { 
          .goog-te-combo{
              width: 80%;
          }
      }
      `}</style>:null}
    </>
  );
};

export default Dashboard;
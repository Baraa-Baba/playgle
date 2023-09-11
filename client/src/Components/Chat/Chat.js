import React, { useEffect, useRef } from "react";
import "./Chat.scss";
import Message from "./Message/Message";

const Chat = (props) => {
  const divRref = useRef(null);

  useEffect(() => { 
    var scrollBle = document.getElementById("scrollBle"); 
    if(scrollBle){ 
        scrollBle.scrollTop=100000
    }
    setTimeout(()=>{
      var scrollBle = document.getElementById("scrollBle"); 
      if(scrollBle){ 
          scrollBle.scrollTop=100000
      }
    },1)
  },[props.messages]);

  return (
    <div className="chatBox" id='chatBox'>
      <div id='scrollBle' style={{overflow:'auto'}}>
      {props.messages.map((message, index) => (
        <Message key={index} message={message} isMargin={index===props.messages.length-1} />
      ))}
      <div style={{ float:"left", clear: "both" }}
             ref={(el) => { divRref.current = el; }}>
        </div>
        </div>
    </div>
  );
};

export default Chat;

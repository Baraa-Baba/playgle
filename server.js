const express = require("express");
const http = require("http");
// const enforce = require("express-sslify");
const app = express();
const server = http.createServer(app);
//const socket = require('socket.io', { rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling'] })
const socket = require("socket.io");
const io = socket(server);
const path = require("path");
const _ = require("lodash");


// app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static("./client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

let users = [];
let queue = [];

io.on("connection", (socket) => {
  let isBusy = false;
  if (!_.includes(users, socket.id)) {
    users.push(socket.id);
  } 
    // Handle signaling events
    socket.on('offer', (offer) => {   
      io.to(offer.id).emit("offer", offer) 
    });
  
    socket.on('answer', (answer) => { 
      io.to(answer.id).emit("answer", answer) 
    });
  
    socket.on('candidate', (candidate) => {
      // Broadcast candidate to all other clients
      socket.broadcast.emit('candidate', candidate);
    });
  
    socket.on('disconnect', () => { 
    }); 
  if (!_.includes(users, socket.id)) {
    users.push(socket.id);
  }
  socket.emit("yourID", socket.id);
  io.sockets.emit("allUsers", users);

  socket.on("disconnect", () => {
    _.pull(users, socket.id);

    const userInQueue = _.find(queue, u => u.id === socket.id);

    if (userInQueue) {
      _.remove(queue, { id: userInQueue.id });
      isBusy = false;
    }
  });

  socket.on("leaveQueue", () => {
    const userInQueue = _.find(queue, u => u.id === socket.id);

    if (userInQueue && isBusy) {
      isBusy = false;
      _.remove(queue, { id: userInQueue.id });
    }
  });

  socket.on("sendMessage", (data) => {
    socket.emit("messageSent", {
      message: data.message,
    });

    io.to(data.peerId).emit("receiveMessage", {
      message: data.message,
    });
  });
  socket.on("endCall",(data)=> {
    io.to(data.peerId).emit("isCallEnded", { 
      message: data.message,
    });
  })
  socket.on('sendFriendRequst',(data)=>{
    io.to(data.peerId).emit("recivedFriendRequst", {
      message: data.message,
    });
  })
  socket.on('sendIsAceptedFriend',(data)=>{
    console.log(data.peerId)
    io.to(data.peerId).emit("reciveIsAceptedFriend", {
      message: data.message,
    });
  })
  socket.on("sendIsInverted", (data) => {
    io.to(data.peerId).emit("isInverted", {
      message: data.message,
    });
  }
  );
  socket.on("findPartner", (data) => {
    let uAchievedThierPrefrence 
    let dataAchievedThierPrefrence
    let uAchievedThierCountryPrefrence
    let datadataAchievedThierPrefrence
    viablePartner = _.find(queue, u => {  
      if(u.id !== socket.id && u.onlyChat === data.onlyChat){
         uAchievedThierPrefrence = u.userGenderPrefernce === data.userGender
        || u.userGenderPrefernce=='anygender'
         dataAchievedThierPrefrence=  data.userGenderPrefernce == u.userGender 
        || data.userGenderPrefernce=='anygender' 
        
        datadataAchievedThierPrefrence=data.userCountryPrefrence == u.userCountry 
        || data.userCountryPrefrence=='anycountry' 

        uAchievedThierCountryPrefrence= u.userCountryPrefrence === data.userCountry
        || u.userCountryPrefrence=='anycountry'
        if(uAchievedThierPrefrence&&dataAchievedThierPrefrence&&datadataAchievedThierPrefrence
          &&uAchievedThierCountryPrefrence){
          return true
        }
      } 
       
     
    });

    if (!viablePartner && !isBusy) {
      isBusy = true;
      const userInQueue = _.find(queue, u => u.id === socket.id);
      if (!userInQueue) {
        queue.push({ id: socket.id, onlyChat: data.onlyChat,userGender:data.userGender,prevUser:data.prevUser,
          roomId:data.roomId,
        userGenderPrefernce:data.userGenderPrefernce,userCountryPrefrence:data.userCountryPrefrence,uid:data.uid,
        userCountry:data.userCountry});
      }
    } else if (!isBusy) {
      isBusy = true; 
      _.remove(queue, { id: viablePartner.id }); 
      io.to(viablePartner.id).emit("peer", {
        peerId: socket.id, 
        initiator: true,
        userGender:data.userGender,
        userCountry:data.userCountry,
        roomId:data.roomId,
        uid:data.uid

      });

      socket.emit("peer", {
        peerId: viablePartner.id, 
        initiator: false,
        userGender:viablePartner.userGender,
        userCountry:viablePartner.userCountry,
        roomId:viablePartner.roomId,
        uid:viablePartner.uid
      });
    }
  }); 
  socket.on("signal", (data) => {
    if (!data.peerId) {
      return;
    }

    isBusy = false;
    io.to(data.peerId).emit("signal", {
      signal: data.signal,
      peerId: socket.id,
    });
  });

  // socket.on("close", (data) => {
  //   io.to(data.peerId).emit("close");
  // });
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import React,{useState,useEffect} from 'react';
import {Avatar} from '@material-ui/core';
import "./SidebarChat.css"
import {Link} from "react-router-dom"
import db from "./firebase"


function SidebarChat({id,name,addNewChat}) {
    const [seed,setSeed] = useState("");
    const [messages,setMessages] = useState("")

    useEffect(() => {
        if(id){
        db.collection("rooms").doc(id).collection("messages").orderBy("timestamp","desc").
        onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc)=>doc.data()
        )))
        }
    },[id])

   
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    const createChat = async (e)=>{
        const roomName = prompt("Please enter Room name")
       if(roomName){
           db.collection('rooms').add({
               name: roomName,
           })
       }

    }

//    console.log(messages)
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
             <div className="sidebarChat"> 
         <Avatar src ={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
        
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>

            </div>
        
       </div>
        </Link>
        
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Room</h2>
        </div>
    )
}

export default SidebarChat

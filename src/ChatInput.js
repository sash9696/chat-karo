import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/compat/app';
import { db } from './firebase';

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("channelId", channelId)
        
        if(!channelId){
            return false
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Sahil Chopra',
            userImage: ''
        })
        setInput('');
    }
    console.log(input);
  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Message #Room'/>
            <Button onClick={sendMessage} type='submit'>Send</Button>
        </form>
        
    </ChatInputContainer>
    
    )
  ;
}

export default ChatInput;
const ChatInputContainer = styled.div`
    position: absolute;
    bottom:5%;
    margin-left:50px;
    display:flex;
   
    
    > form > input{
        padding:15px 25px;
        width:900px;
    }
`;
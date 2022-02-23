import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/compat/app';
import { auth, db } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { userDetails } from './features/appSlice';

function ChatInput({channelName, channelId, chatRef}) {
    const [user] = useAuthState(auth);
    const [input, setInput] = useState('');

    const dispatch = useDispatch();
    
    const sendMessage = (e) => {
        e.preventDefault();
        
        if(!channelId){
            return false
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            userId: user.uid,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
            likeBy : []
        })
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
        setInput('');
    }
    
  return (
    <ChatInputContainer>
        <form>
            <input 
                value={input} 
                onChange={(e)=> setInput(e.target.value)} 
                placeholder={channelId ? `Message #${channelName}`: ('Message #room')}/>
                <Button  onClick={sendMessage} type='submit'>Send</Button>
            
        </form>
        
    </ChatInputContainer>
    
    )
  ;
}

export default ChatInput;
const ChatInputContainer = styled.div`
    position: fixed;
    bottom:5%;
    margin-left:50px;
    display:flex;

> form > .MuiButton-root{
    display:none;
} 
    
> form > input{
        padding:15px 25px;
        width:900px;
    }
`;
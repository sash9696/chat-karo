import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import { selectRoomId } from './features/appSlice';
import {useSelector} from 'react-redux';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from './firebase';
import Message from './Message';



function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    
    const [roomMessages, loading] = useCollection(
        roomId && 
        db.collection('rooms')
        .doc(roomId)
        .collection('messages').orderBy("timestamp", "asc")
    )
    useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    },[roomId, loading])


    return (
            <ChatContainer>
                {roomDetails && roomMessages && (

<>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#{roomId ? roomDetails?.data().name : ('Select a Room')}</strong></h4>
                        <StarBorderOutlinedIcon/>
                    </HeaderLeft>
                    <HeaderRight>
                        <p><InfoOutlinedIcon/>Details</p>

                    </HeaderRight>
                </Header>
                <ChatMessages>
                    {roomMessages?.docs.map((doc) => {
                        const {message, timestamp, user, userImage} = doc.data()

                        return(
                            <Message
                                key = {doc.id}
                                message = {message}
                                timestamp = {timestamp}
                                user = {user}
                                userImage = {userImage}

                            />
                        )

                    })}
                    <ChatBottom ref={chatRef}/>
                </ChatMessages>
                <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name}
                        channelId={roomId}
                    />
            </>

                )}
            
            </ChatContainer>
        
        
    )
}

export default Chat;
const ChatBottom = styled.div`
    padding-bottom:200px;
`;
const ChatContainer = styled.div`
    flex:0.7;
    flex-grow:1;
    overflow-y: scroll;
    margin-top:50px;
    margin-left:390px;
    


`
const Header = styled.div`
    padding:20px;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid black;
    
    
    
`
const HeaderLeft = styled.div`
    display:flex;
    align-items:center;
`
const HeaderRight = styled.div`
    margin-top:5px;
>p{
    display:flex;
    align-items:center;
}
> p > .MuiSvgIcon-root{
    font-size:16px;
    margin-right:5px;
    align-items:center

}
    
`
const ChatMessages = styled.div`
    padding-left:20px;
`



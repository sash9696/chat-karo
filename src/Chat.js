import React from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import { selectRoomId } from './features/appSlice';
import {useSelector} from 'react-redux';



function Chat() {

    const roomId = useSelector(selectRoomId);
    console.log("roomId", roomId)
    return (
            <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#room-name</strong></h4>
                        <StarBorderOutlinedIcon/>
                    </HeaderLeft>
                    <HeaderRight>
                        <p><InfoOutlinedIcon/>Details</p>

                    </HeaderRight>
                </Header>
                <ChatMessages>
                    <ChatInput //Channel Name
                        channelId={roomId}
                    />

                </ChatMessages>
            </>
            </ChatContainer>
        
        
    )
}

export default Chat;
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
const ChatMessages = styled.div``



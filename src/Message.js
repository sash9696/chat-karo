import React from 'react';
import styled from 'styled-components';
import MessageOptions from './MessageOptions';

function Message({id,message, timestamp, user, userImage, likeBy}) {
  return (
      <Container>
      <MessageContainer>
          <img src= {userImage} alt=''/>
          <MessageInfo>
              <h4>
                  {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
              </h4>
              <p>{message}</p>
          </MessageInfo>
          
      </MessageContainer>
      <MessageOptions id={id} likeBy={likeBy} />
      </Container>
  );
}

export default Message;
const Container = styled.div`
display: flex;
justify-content: space-between;
padding-right:20px;
align-items: center;

`
const MessageContainer = styled.div`
    display:flex;
    align-items:center;
    padding:20px;

>img{
    height:50px;
    border-radius:10px;
}
`;
const MessageInfo = styled.div`
    padding-left:10px;

> h4 > span{
    color:gray;
    font-weight:400;
    font-size:12px;
    margin-left:5px;
}
`;

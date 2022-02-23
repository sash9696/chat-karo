
import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSelector } from 'react-redux';
import { selectRoomId } from './features/appSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from './features/userSlice';
import { useEffect } from 'react';


function MessageOptions({id, likeBy}) {

   const user = useSelector(selectUser);
   const roomId = useSelector(selectRoomId); 

   const likeButton = () => {
        if(likeBy.includes(user.uid)) {
            decreaseLike()
        }
        else {
            increaseLike()
        }
   }

    const increaseLike = () => {
        db.collection('rooms').doc(roomId).collection('messages').doc(id).update({
            likeBy: firebase.firestore.FieldValue.arrayUnion(user.uid)
        })
    }
    const decreaseLike = () => {
        db.collection('rooms').doc(roomId).collection('messages').doc(id).update({
            likeBy: firebase.firestore.FieldValue.arrayRemove(user.uid)
        })
    }

  return (
    <MesssageOptionsContainer>
        {likeBy.includes(user.uid) ? <FavoriteIcon onClick={likeButton} className='p'/>
            : <FavoriteBorderIcon onClick={likeButton} className='p'/>
        }
            <span>{likeBy.length}</span>
        <EditIcon className='p'/>
        <DeleteIcon className='p'/>
    </MesssageOptionsContainer>
        
    
  )
}

export default MessageOptions;

const MesssageOptionsContainer = styled.div`
 display : flex;
 margin-top: 10px;
 width:300px;
 height:30px;
 align-items:center;
 justify-content: space-evenly;
 border: 2px solid black;

  .p{
     font-weight:bolder;
     cursor: pointer;
 }
 .p:hover{
    opacity:0.6;
    background-color: whitesmoke;
}
`
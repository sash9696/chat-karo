
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
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
function MessageOptions({id, userId, likeBy,editMessage, setEditMessage }) {

   const user = useSelector(selectUser);
   const roomId = useSelector(selectRoomId); 
   
   let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);
 
   function openModal() {
    
    if(user.uid == userId){
      setIsOpen(true);
    }
    else{
      alert("You cannot edit other's post.")
    }
     
   }
 
   function afterOpenModal() {
     // references are now sync'd and can be accessed.
     subtitle.style.color = '#f00';
   }
 
   function closeModal() {
     setIsOpen(false);
   }

   const likeButton = () => {
        if(likeBy.includes(user?.uid)) {
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
 const updateMessage = (e) => {
    e.preventDefault()
        db.collection('rooms').doc(roomId).collection('messages').doc(id).update({
          message: editMessage
      })
      closeModal()
      setEditMessage("")
   
 
 }
  const deleteMessage = () => {
    if(user?.uid == userId){
      db.collection('rooms').doc(roomId).collection('messages').doc(id).delete()
    }
    else{
      alert("You cannot delete other's post.")
    }
  }
  return (
    <MesssageOptionsContainer>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Message</h2>
        <button onClick={closeModal}>&#10539;</button>
        <form>
          <input
             value={editMessage} 
             type='text' 
             placeholder='Type message' 
             onChange={(e) => setEditMessage(e.target.value)}
          />
          <button onClick={updateMessage} >Done</button>
        </form>
      </Modal>
        {likeBy.includes(user?.uid) ? <FavoriteIcon onClick={likeButton} className='p'/>
            : <FavoriteBorderIcon onClick={likeButton} className='p'/>
        }
            <span className='span'>{likeBy.length}</span>
        { user.uid == userId &&
        <>
        
          <EditIcon onClick={openModal}  className='p'/>
          <DeleteIcon onClick={deleteMessage} className='p'/>
        </>
        }
    </MesssageOptionsContainer>
        
    
  )
}

export default MessageOptions;

const MesssageOptionsContainer = styled.div`
 display : flex;
 margin-top: 10px;
 width:200px;
 height:30px;
 align-items:center;
 justify-content: space-evenly;


  .p{
     font-weight:bolder;
     cursor: pointer;
 }
 .span{
   margin-left: -20px;
 }
 .p:hover{
    opacity:0.6;
    background-color: whitesmoke;
}
`
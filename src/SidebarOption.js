import React from 'react';
import styled from 'styled-components';
import { enterRoom } from './features/appSlice';
import { db } from './firebase';
import {useDispatch} from 'react-redux';

function SidebarOption({Icon, title, addChannelOption, id}) {
    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt("Enter channel name");

        if(channelName){
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }
    return (

        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            
            {Icon && <Icon fontSize="small" style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            ) }

        </SidebarOptionContainer>
        
    )
}

export default SidebarOption;
const SidebarOptionContainer = styled.div`
    color:whitesmoke;
    display:flex;
    align-items:center;
    font-size: 0.7rem;
    cursor: pointer;

:hover{
    border: 1px solid whitesmoke;
    margin-right:10px;
    background-color:black;
    border-radius:15px;
}
`;
const SidebarOptionChannel = styled.div`
    padding: 10px 0;
    font-weight: 800;
    font-size:0.8rem;
  > span {
    padding: 15px;
  }

`;

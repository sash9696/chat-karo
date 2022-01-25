import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import {
    FiberManualRecord,
    Create,
    InsertComment,
    Inbox,
    Drafts,
    BookmarkBorder,
    PeopleAlt,
    Apps,
    FileCopy,
    ExpandLess,
    ExpandMore,
    Add
  } from "@mui/icons-material";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from './firebase';

function Sidebar() {

    const [rooms, loading, error] = useCollection(db.collection('rooms'));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Team</h2>
                    <h3>
                        <FiberManualRecord />
                        Sahil Chopra
                    </h3>
                </SidebarInfo>
                <Create/>
            </SidebarHeader>
            
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />

            <hr/>

            <SidebarOption Icon={ExpandMore} title="Channels" />
            
            <hr/>
            <SidebarOption Icon={Add} addChannelOption title="Add Channel"  />

            {rooms?.docs.map((doc) => (
                <SidebarOption  
                    key={doc.id}
                    id={doc.id}
                    selectChannel
                    title={doc.data().name} 
                
                
                />
            ))}
            
        


        </SidebarContainer>
    )
}

export default Sidebar;
const SidebarContainer = styled.div`
    height:100vh;
    background-color:#1D2226;
    width:400px;
    margin-top:40px;
    padding-top:35px;
    position:fixed;
    top:10px;
 > hr{
    background-color:black; 
    border:none; 
    height:1px; 
    margin-top:10px;
    margin-bottom:10px;

 }  


`;
const SidebarHeader = styled.div`
    display:flex;
    justify-content:space-between;
    padding-left:10px;
    padding-top:10px;
    padding-bottom:10px;
    border-top: 1px solid rgba(7, 7, 7, .7);
    border-bottom: 1px solid rgba(7, 7, 7, .7);

 
 > .MuiSvgIcon-root{
    color:black;
    opacity: 0.7;
    background-color:whitesmoke;
    border-radius:999px;
    padding:9px;
    font-size:small;
    margin-right: 20px;
    margin-top:10px;
   
    
}
`;
const SidebarInfo = styled.div`

> h2{
    color:white;
    font-weight:bolder;

}
> h3{
    color:white;
    font-size:0.8rem;
    margin-top:5px;
    font-weight:lighter;
}
> h3 > .MuiSvgIcon-root{
    opacity: 0.7;
    font-size:0.6rem;
    margin-right:7px;
    
}


`;


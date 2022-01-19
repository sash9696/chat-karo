import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
function Home() {
    return (
            <HeaderContainer>
                <HeaderLeft>
                    <HeaderAvatar 
                    //onclick 
                        Avatar src=""  
                    />
                    <AccessTimeIcon/>

                </HeaderLeft>
                <HeaderSearch>
                    <SearchIcon/>
                    <input type='text' placeholder='Search'/>
                </HeaderSearch>
                <HeaderRight>
                    <HelpOutlineIcon/>
                </HeaderRight>
            </HeaderContainer>
            
    )
}

export default Home;

const HeaderContainer = styled.div`
    display:flex;
    background-color:#1D2226;
    position:fixed;
    top:0;
    width:100%
`;
const HeaderLeft = styled.div`
    display:flex;
    flex:0.3;
    justify-content:space-between;
    padding:8px 0;

> .MuiSvgIcon-root{
    margin-top:7px;
    margin-right:25px;
    color:whitesmoke;
}
`;
const HeaderAvatar = styled(Avatar)`
    margin-left:20px;
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    border: 1px solid whitesmoke;
    border-radius:5px;
    margin: 15px 0;
    display:flex;
    padding-left:35px;

> input{
        background: transparent;
         border: none;
         outline-width: 0;
         color:white;
         flex:1;
}

.MuiSvgIcon-root{
    color:whitesmoke;
    opacity: 0.7;
}
`;

const HeaderRight = styled.div`
    flex:0.3;
    display:flex;
    justify-content:flex-end;
    align-items: center;
    margin-right:25px;


.MuiSvgIcon-root{
    color:whitesmoke;
}
`;






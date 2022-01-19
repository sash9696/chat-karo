import React from 'react';
import styled from 'styled-components';

function SidebarOption({Icon, title}) {
    return (

        <SidebarOptionContainer>
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

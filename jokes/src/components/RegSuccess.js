import React from 'react';
import styled from 'styled-components'

const SuccessMessage = styled.div`
background: #670C16;
border-radius: 5px;
color: #D7CEC7;
display: flex;
align-items: center;
flex-direction: column;
height: 35vh; 
justify-content: space-between;
margin: 3% auto;
padding: 30px 10px;
width: 85%;
`;

const StyledButton = styled.button`
  background: #062532;
  border: 1px solid #D7CEC7;
  border-radius: 3px;
  color: #D7CEC7;
  cursor: pointer;
  padding: 7px;
  margin-top: 10px;

  &&:hover {
    background: #D7CEC7;
    border: qpx solid #062532;
    color: #062532;
  }
`;

const RegSuccess = props => {
    return (
    <SuccessMessage>
    <h3>Registration was successful</h3><h3>Please login with these new credentials</h3>
    <StyledButton onClick={props.goToLogin} >Login Now</StyledButton>
    </SuccessMessage>
    )
}

export default RegSuccess;

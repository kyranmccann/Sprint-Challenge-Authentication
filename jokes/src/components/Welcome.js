import React from 'react';
import styled from 'styled-components';

import img from '../assets/laugh.jpeg';

const WelcomeHolder = styled.div`
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-position: bottom center; 
width: 100%;
height: 90vh;
border: 1px solid black;
`;
const Welcome = () => {
    return (
    <WelcomeHolder>Hi</WelcomeHolder>
    )
}

export default Welcome;

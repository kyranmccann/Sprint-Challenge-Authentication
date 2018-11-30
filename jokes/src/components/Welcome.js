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
color: white;
padding: 15%; 
`;
const Welcome = () => {
    return (
    <WelcomeHolder>
    <h1>DadJokes!</h1>
    <h2>Because everyone needs terrible jokes</h2>
    </WelcomeHolder>
    )
}

export default Welcome;

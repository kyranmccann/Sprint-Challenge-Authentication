import React from 'react';
import { LoginForm } from '../components';
import styled from 'styled-components';

import img from '../assets/man-laughing.jpeg';

const LoginHolder = styled.div`
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 90vh;
`;

class LoginView extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <LoginHolder>
        <LoginForm />
      </LoginHolder>
    )
  }
}

export default LoginView;

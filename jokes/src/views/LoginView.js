import React from 'react';
import { LoginForm } from '../components';
import styled from 'styled-components';

import img from '../assets/man-laughing.jpeg';

const LoginHolder = styled.div`
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-position: -20vw 0;
width: 100%;
height: 90vh;
position: relative;
`;

const FormHolder = styled.div`
  width: 60%;
  padding: 5%;
  position: absolute;
  right: 0;
`;

class LoginView extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <LoginHolder>
      <FormHolder>
        <LoginForm history={this.props.history} />
      </FormHolder>
      </LoginHolder>
    )
  }
}

export default LoginView;

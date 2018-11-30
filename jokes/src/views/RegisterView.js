import React from 'react';
import { RegForm } from '../components';
import styled from 'styled-components';

import img from '../assets/man-laughin-two.jpeg';

const RegisterHolder = styled.div`
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 90vh;
`;

class RegisterView extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <RegisterHolder>
      <RegForm />
      </RegisterHolder>
    )
  }
}

export default RegisterView;

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

const FormHolder = styled.div`
  width: 60%;
  padding: 5%;
  margin: 0 5%;
`;

class RegisterView extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <RegisterHolder>
      <FormHolder>
      <RegForm history={this.props.history} />
      </FormHolder>
      </RegisterHolder>
    )
  }
}

export default RegisterView;

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import img from '../assets/laugh.jpeg';

const NavHolder = styled.div`
  background: #062532;
  color: white; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  border: 1px solid black;
  font-size: 1.6rem;
`;

const NavBar = () => {
    return (
    <NavHolder>
    <NavLink to='/signup'>Register</NavLink>
    <NavLink to='/signin'>Login</NavLink>
    <NavLink to='/jokes'>See Jokes!</NavLink>
    <NavLink to='/'>Logout</NavLink>
    </NavHolder>
    )
}

export default NavBar;

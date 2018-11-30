import React from 'react';
import styled from 'styled-components';

const JokeContainer = styled.div`
  background: #062532;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  width: 60%;
  margin: 5%;
  cursor: pointer;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

const Joke = props => {
    return (
    <JokeContainer>
    <h3>{props.joke.setup}</h3>
    <h3>{props.joke.punchline}</h3>
    </JokeContainer>
    )
}

export default Joke;

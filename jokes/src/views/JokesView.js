import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import img from '../assets/woman-laughing.jpeg';

const JokesHolder = styled.div`
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 90vh;
`;

const url = process.env.REACT_APP_API_URL;

class JokesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      message: '',
      isLoggedIn: false,
    }
  }
  componentDidMount() {
    this.authenticate();
  }


  authenticate = () => {
    const token = localStorage.getItem('super_secret');
    if (token) {
      const options = {
        headers: {
          authorization: token,
        },
      }
      axios
        .get(`${url}/api/jokes`, options)
        .then(response => {
          console.log(response.data);
          this.setState({
            jokes: response.data,
            isLoggedIn: true,
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (<JokesHolder><h2>It looks like you're not signed in. </h2><h2> Please <Link to='/signin'>Login</Link> or <Link to='/signup'>Register</Link></h2></JokesHolder>)
    }
    return (
    <JokesHolder>
    {this.state.jokes.length > 0 ? <h4>Jokes!</h4> : <h4>Loading...</h4>}
    {this.state.jokes.map(joke => {
      return <p key={joke.id}>{joke.setup}</p>
    })}
    </JokesHolder>
    )
  }
}

export default JokesView;

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Joke } from '../components'

import img from '../assets/woman-laughing.jpeg';

const JokesHolder = styled.div`
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 90vh;
padding: 2%;
`;

const url = process.env.REACT_APP_API_URL;

class JokesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      currentJoke: null,
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
          this.setState({
            jokes: response.data,
            isLoggedIn: true,
            currentJoke: 0,
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  nextJoke = () => {
    console.log(this.state.currentJoke)
    if (this.state.currentJoke < 9) {
    this.setState(prevState => ({
      currentJoke: prevState.currentJoke + 1,
    }))} else {
      this.authenticate();
    }
  }

  clickHandler = event => {
    this.nextJoke();
  }

  render() {
    console.log(this.state.currentJoke);
    if (!this.state.isLoggedIn) {
      return (<JokesHolder><div className='loggedout'><h2>It looks like you're not signed in. </h2><h2> Please <Link to='/signin'>Login</Link> or <Link to='/signup'>Register</Link></h2></div></JokesHolder>)
    }
    return (
    <JokesHolder>
    {this.state.jokes.length > 0 ? <h4></h4> : <h4>Loading...</h4>}
    <div onClick={this.clickHandler}>
    <Joke joke={this.state.jokes[this.state.currentJoke]} /> </div>
    </JokesHolder>
    )
  }
}

export default JokesView;

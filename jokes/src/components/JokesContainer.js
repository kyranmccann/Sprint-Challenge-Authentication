import React from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

class JokesContainer extends React.Component {
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
        .get(`${url}/api/users`, options)
        .then(response => {
          console.log(response.data);
          this.setState({
            users: response.data.users,
            department: response.data.department,
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
      return (<div className='users'><h2>It looks like you're not signed in. </h2><h2> Please <Link to='/signin'>Login</Link> or <Link to='/signup'>Register</Link></h2></div>)
    }
    return (
    <div className='users'>
    {this.state.users.length > 0 ? <h4>Here is the list for the {this.state.department} department:</h4> : <h4>Loading...</h4>}
    {this.state.users.map(user => {
      return <p key={user.id}>{user.username}</p>
    })}
    </div>
    )
  }
}

export default JokesContainer;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Search from './components/search';
import UpdateForm from './components/updateForm';
import Profile from './components/profile';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

class App extends React.Component {
  state = { 
    cityState: "",
    radius: "",
    riverLimit: "",
    riverData: [],
    user: {}
  };
  
  componentDidMount() {
    this.getUser()
  };

  getUser = () => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => {
        this.setState({user: users[0]})
      })
  };
  
  addFavorite = (...riverStuff) => {
    const arr = riverStuff
    fetch('http://localhost:3000/favorites' , {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        itself: arr[0],
        cfs: arr[1],
        height: arr[2],
        status: arr[3],
        gaugeLocation: arr[4],
        dateTime: arr[5]
      })
    }).then(response => this.getUser() )
  };

  deleteFavorite = (id) => {
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: 'DELETE'
    })
      .then(response => this.getUser())
  };

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  };
  
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.aerisapi.com/rivers/${this.state.cityState}?&format=json&radius=${this.state.radius}mi&limit=${this.state.riverLimit}&client_id=6V1JGjeRhVG6jNmrN6960&client_secret=RXHhdgXNBviwzrH6J7v0hHhrMEgT5AS9Ml8FQW0p`)
      .then(response => response.json())
      .then(riverStats => this.setState({riverData: riverStats.response})
    )
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar>
            <Navbar.Brand href="#home" src="https://us.123rf.com/450wm/djem/djem1311/djem131101210/23570865-abstract-fly-fishing-in-black-color-on-white-background.jpg?ver=6"></Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">RiverSearch</Nav.Link>
                <Nav.Link href="/profile/">Profile</Nav.Link>
              </Nav>
          </Navbar>
          <Switch>
              <Route path="/" exact render={() => {
                return ( 
                  <Search 
                    cityState={this.state.cityState} 
                    radius={this.state.radius} 
                    riverLimit={this.state.riverLimit} 
                    riverData={this.state.riverData}
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    addFavorite={this.addFavorite} 
                  />
                )
              }} />
              <Route path="/updateForm/"  exact render={() => {
                return (
                  <UpdateForm 
                    user={this.state.user} 
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    getUser={this.getUser}
                  />
                )
              }}/>
              {this.state.user.favorites ? <Route path="/profile/" exact render={() => {
                return (
                  <Profile 
                    user={this.state.user} 
                    updateUser={this.updateUser}
                    deleteFavorite={this.deleteFavorite}
                  /> 
                )
              }} /> : null}
          </Switch>
        </Router>
      </div>

    )
  }
};

export default App;

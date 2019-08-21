import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Search from './components/search'
import Rivers from './components/rivers'
import Profile from './components/profile'



class App extends React.Component {
  state = { 
    cityState: "",
    radius: "",
    riverLimit: "",
    riverData: [],
    user: {}
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => this.setState({user: users[0]})
    )
  }
  
  
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
    })
  }
  
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
    console.log(this.state.user);
    return (
      <div>
        <Router>
          <div className="navbar">
            <Link className="link" to="/">River Search</Link>
            <Link className="link" to="/rivers/">Rivers</Link>
            <Link className="link" to="/profile/">Profile</Link>
          </div>
          <Switch>
              <Route path="/" exact render={() => {
                return <Search 
                cityState={this.state.cityState} 
                radius={this.state.radius} 
                riverLimit={this.state.riverLimit} 
                riverData={this.state.riverData}
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} 
                addFavorite={this.addFavorite} />
              }} />
              <Route path="/rivers/"  exact component={Rivers} />
              <Route path="/profile/" exact render={() => {
                return <Profile user={this.state.user}/>
              }} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;

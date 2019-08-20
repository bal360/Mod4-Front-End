import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Rivers from './components/rivers'
import Profile from './components/profile'


class App extends React.Component {
  state = { 
    cityState: "",
    radius: "",
    riverLimit: "",
    riverData: []
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
    return (
      <div>
        <Router>
          <div className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/rivers/">Rivers</Link>
            <Link className="link" to="/profile/">Profile</Link>
          </div>
          <Switch>
              <Route path="/" exact render={() => {
                return <Home 
                cityState={this.state.cityState} 
                radius={this.state.radius} 
                riverLimit={this.state.riverLimit} 
                riverData={this.state.riverData}
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}  />
              }} />
              <Route path="/rivers/"  exact component={Rivers} />
              <Route path="/profile/" exact render={Profile} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;

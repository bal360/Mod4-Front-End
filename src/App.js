import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Rivers from './components/rivers'
import Profile from './components/profile'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/rivers/">Rivers</Link>
          <Link className="link" to="/profile/">Profile</Link>
        </div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rivers/"  exact component={Rivers} />
            <Route path="/profile/" exact render={Profile} />
            {/* <Route component={AppNotFound} /> */}
          </Switch>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendList from './components/FriendList';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/protected'>View Friends</Link>
          </div>
        </nav>
        <Switch>
          <ProtectedRoute exact path='/protected' component={FriendList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

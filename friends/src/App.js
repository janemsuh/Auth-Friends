import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div>
            <Link to='/login'>Login</Link>
          </div>
        </nav>
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Inbox from './Inbox';
import AllCalls from './AllCalls';
import Call from './Call';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui text container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Inbox} />
          <Route path="/all" exact component={AllCalls} />
          <Route path="/call/:id" exact component={Call} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

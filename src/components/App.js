import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Inbox from './Inbox';
import AllCalls from './AllCalls';
import Call from './Call';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container largestMobileScreen">
      <BrowserRouter>
      <Header />
      <Route path="/" exact component={Inbox} />
      <Route path="/all" exact component={AllCalls} />
      <Route path="/call/:id" exact component={Call} />
      </BrowserRouter>
    </div>
  );
};

export default App;

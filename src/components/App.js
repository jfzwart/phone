import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Inbox from './Inbox';
import AllCalls from './AllCalls';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container largestMobileScreen">
      <BrowserRouter>
      <Header />
      <Route path="/" exact component={Inbox} />
      <Route path="/all" exact component={AllCalls} />
      </BrowserRouter>
    </div>
  );
};

export default App;

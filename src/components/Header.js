import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Inbox</Link>
      <div className="right menu">
        <Link to="/" className="item">Inbox</Link>
        <Link to="/all" className="item">All Calls</Link>
      </div>
    </div>
    )
}

export default Header;

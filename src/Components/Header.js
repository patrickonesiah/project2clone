import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="header-left">
        <span className="logo" role="img">
          ☮ Narrative Grove
        </span>
      </h1>
      <div className="header-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/CreateStory">Create Stories</Link></li>
          <li><Link to="/CreateStory">Invite Family</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
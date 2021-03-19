import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default () => (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404">
        <h1>Oops!</h1>
        <h2>404 - The Page cant be found</h2>
      </div>
      <Link to="/coffee/home">Go TO Homepage</Link>
    </div>
  </div>
);
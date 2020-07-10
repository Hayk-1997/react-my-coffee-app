import React, { PureComponent } from 'react';
import NavBarCollapse from './NavBarCollapse';

class SideBar extends PureComponent {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Coffee<small>Blend</small></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"/> Menu
          </button>
          <NavBarCollapse />
        </div>
      </nav>
    );
  }
}

export default SideBar;
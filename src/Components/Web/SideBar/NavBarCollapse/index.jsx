import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBarCollapse = () => {
  return (
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="menu.html" className="nav-link">Menu</a></li>
        <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="room.html" id="dropdown04"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
          <div className="dropdown-menu" aria-labelledby="dropdown04">
            <a className="dropdown-item" href="shop.html">Shop</a>
            <a className="dropdown-item" href="product-single.html">Single Product</a>
            <a className="dropdown-item" href="room.html">Cart</a>
            <a className="dropdown-item" href="checkout.html">Checkout</a>
          </div>
        </li>
        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to='/coffee/login'
          >
             Sign In
          </Link>
        </li>
        <li className="nav-item cart"><a href="cart.html" className="nav-link">
          <span className="icon icon-shopping_cart"/><span
            className="bag d-flex justify-content-center align-items-center"><small>1</small></span></a>
        </li>
        <li className="nav-item dropdown lang-dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="lang-dropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={require('../../../../assets/web/flags/am-flag.png')} width="25" alt="" />
          </a>
          <div className="lang-dropdown-menu dropdown-menu" aria-labelledby="lang-dropdown">
            <a className="dropdown-item" href="#">
              <img src={require('../../../../assets/web/flags/am-flag.png')} width="25" alt="" />
            </a>
            <a className="dropdown-item" href="#">
              <img src={require('../../../../assets/web/flags/en-flag.jpg')} width="25" alt="" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBarCollapse;
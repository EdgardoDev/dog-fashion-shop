import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nabvar extends Component {
  render() {
    return <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
        <a className="navbar-brand" href="/">
            <i class="fas fa-dog fa-lg mr-1" /> DOG FASHION SHOP
          </a>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            PRODUCTS
          </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus mr-1" />
            MY CART
          </button>
        </Link>
      </nav>;
  }
}

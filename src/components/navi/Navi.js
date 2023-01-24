import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink, Nav, Container } from 'reactstrap';
import CartSummary from "../cart/CartSummary"
import { Link } from 'react-router-dom';

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar color="light" light>
            <Link to="/"><NavbarBrand>NORTHWİND</NavbarBrand></Link>
            <Nav className="me-2">
              <Link to="/saveProduct"><NavLink className='link-dark'>ADD PRODUCT</NavLink></Link>
              <CartSummary />
            </Nav>
          </Navbar>
        </Container>
      </div>
    )
  }
}


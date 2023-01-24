import React, { Component } from 'react';
import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavItem, Badge} from "reactstrap";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import {Link} from "react-router-dom"
import alertify from "alertifyjs"

class CartSummary extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " Remove From Cart");
}
  renderEmpty() {
    return (
      <NavItem>
      </NavItem>
    )
  }
  renderSummary() {
    return (
      <UncontrolledDropdown direction="start">
        <DropdownToggle caret color='white' >
          {"CART"+"  "} 
          <Badge color='success'>{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu>
          {
            this.props.cart.map(cartItem =>(
              <DropdownItem key={cartItem.product.id}>
                 <Badge color="danger"
                 onClick={()=> this.removeFromCart(cartItem.product)}
                 >
                  -</Badge>
                  &nbsp;
                  {cartItem.product.productName}
                  &nbsp;
                <Badge color="success"> {cartItem.quantity}</Badge>
                </DropdownItem>
            ))
          }
          
          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Back To Cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

    )
  }
  render() {
    return (
      <div>
        {
          this.props.cart.length > 0 ? this.renderSummary():this.renderEmpty()
        }
      </div>
    )
  } }
  function mapDispatchToProps(dispatch){
    return{
      actions:{
        removeFromCart : bindActionCreators(cartActions.removeFromCart, dispatch)
      }
    }
  }
  function mapStateToProps(state) {
    return {
      cart: state.cartReducer
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import "../css/cart.css"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "bootstrap";
import { addToCart, ClearCart, decrase, getTotal, removeFromCart } from "../slices/CartSlice";
function Cart(){
const cart=useSelector(state=>state.cart);
const dispatch=useDispatch();
const handleRemoveFromCart =(cartItems)=>{
  dispatch(removeFromCart(cartItems))
}
const handleDecrease =(cartItems)=>{
  dispatch(decrase(cartItems))
}
const handleClearCart=()=>{
  dispatch(ClearCart())
}
const handleIncreaseCart=(cartItems)=>{
  dispatch(addToCart(cartItems))
}
  useEffect(()=>{
dispatch(getTotal());

  },[cart,dispatch])
  return(
    <>
   <h2>shopping Cart </h2>
   {cart.cartItems.length ===0? (
<div>
  <p>your cart is empty</p>
  <div>

  </div>
  </div>



   ):(<div className="cart-items">
    <table>
    <thead>
        <tr>
           
            <th scope="col">title</th>
            <th scope="col">category</th>
            <th scope="col">price</th>
            <th scope="col">amount</th>
            <th scope="col">total</th>
        </tr>
    </thead>
    <tbody>
        {cart.cartItems?.map(cartItems => (
            <><tr key={cartItems.id}>
            <td></td>
            <td>{cartItems.title}</td>
            <td>{cartItems.category}</td>
            <td>{cartItems.price}</td>
            <td>
              <button onClick={() => handleDecrease(cartItems)}>-</button>
              {cartItems.cartQuantity}
              <button onClick={()=>handleIncreaseCart(cartItems)}>+</button>
            </td>
            <td>${cartItems.price*cartItems.cartQuantity}</td>
            <td><button onClick={() => handleRemoveFromCart(cartItems)}>Remove</button></td>
          </tr>
          
          
          </>
          
        ))}
    </tbody>
    
</table>
<button onClick={() => handleClearCart()}>ClearCart</button>
<h1> {cart.cartTotalQuantity}</h1>
<h1>{cart.cartTotalAmount}</h1>
   </div>)}
    </>
  )



}
export default Cart;

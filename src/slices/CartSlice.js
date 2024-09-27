import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState= {
  cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
  cartTotalQuantity:0,
  cartTotalAmount:0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart (state, action)  {
   const itemIndex= state.cartItems.findIndex((item)=>item.id===action.payload.id);
   if(itemIndex>=0){  
state.cartItems[itemIndex].cartQuantity += 1;
toast.info(`increased ${state.cartItems[itemIndex].title } cart quantity`,{
  position:"bottom-left"
})

   }
   else{
   const tempProduct={ ...action.payload,cartQuantity:1};
      state.cartItems.push(tempProduct);
      toast.success(`${action.payload.title} to cart`,{
        position:"bottom-left"
      })}
      localStorage.setItem("cartitems",JSON.stringify(state.cartItems))
    },
    removeFromCart(state,action){
const nextItems =state.cartItems.filter((cartItem)=>cartItem.id !==action.payload.id);
state.cartItems=nextItems;
localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    decrase(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
      
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
      }
      
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  ClearCart(state,action){
state.cartItems=[];
localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
  },
  getTotal(state,action){
let {total,quantity}=state.cartItems.reduce(
  (cartTotal,cartItem)=>{
    const{price,cartQuantity}=cartItem;
    const itemTotal=price*cartQuantity;
    cartTotal.total+=itemTotal
    cartTotal.quantity+=cartQuantity
    return cartTotal;
  },
  {
    total:0,
    quantity:0,
  }
);
state.cartTotalQuantity=quantity;
state.cartTotalAmount=total;
  },
},});

export const { addToCart,removeFromCart ,decrase,ClearCart,getTotal} = cartSlice.actions;
export default cartSlice.reducer;
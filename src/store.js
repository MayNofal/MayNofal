import { configureStore } from "@reduxjs/toolkit";


import { setupListeners } from "@reduxjs/toolkit/query";
import { ProApiSlice } from "./Api/ApiSlicePro";
import cartReducer, { getTotal } from "../src/slices/CartSlice"

export const store=configureStore({
 reducer:{

    [ProApiSlice.reducerPath]:ProApiSlice.reducer,
 cart:cartReducer
 },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProApiSlice.middleware),

 //devTools: true,
});

setupListeners(store.dispatch);
setupListeners(store.dispatch(getTotal()));


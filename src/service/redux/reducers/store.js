import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../reducers/sidebarReducer"

export const store = configureStore({

 reducer:{
     sidebar: sidebarReducer,
 }


})
import rootReducer from "./index";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

 const store = configureStore({
    reducer : rootReducer,
},);
export default store; applyMiddleware(thunk);
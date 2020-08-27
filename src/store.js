import React from "react";
import Todoreducer from "./reducer/todoreducer";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(Todoreducer, composeWithDevTools());


export default store;

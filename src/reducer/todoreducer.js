import React from "react";
import {ADD_TODO , DEL_TODO, COMPLETED_TODO}from "../actions/action";

const initialstate = [{
  id: 1 , 
  text : 'salut'
}];

const Todoreducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = [...state,{
        id : action.id ,
        text :action.text,
        completed : action.completed

      }]);
    case DEL_TODO  :
      return state.filter(el =>
        el.id !== action.id
        )
case COMPLETED_TODO :
  return state.map(el =>
    el.id === action.id ? {...el,completed:!el.completed} : {...el}
    )
    default:
      return state;
  }
};
export default Todoreducer;

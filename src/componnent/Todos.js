import React ,{useState} from "react";
import {connect} from 'react-redux'
import {addtodo,deletetodo,completedtodo} from '../actions/action'

const Todos = ({dispatch,state}) => {
  const [text , settext]  = useState('')
      
   const Ajout_todo = () =>{
          dispatch(addtodo(text))
          settext('')
   }
   const Effacer_todos = (id) => {
     dispatch(deletetodo(id))
   }
   const Completed_todos = (id) =>{
     dispatch(completedtodo(id))
   }
     console.log(state)
  return (
    <div>
      <input placeholder="add todo" value={text} onChange={e=>settext(e.target.value)} />
      <button onClick={Ajout_todo}>Add</button>
    <div>
      {
      state.map((el,index) =>(
      <div style={{margin:"4px"}}  key={index}>
      <div>
      <span onClick={()=>Completed_todos(el.id)} style={{textDecoration:el.completed ? "line-through":"none"}}><b>{el.text}</b></span>
        <button onClick={()=>Effacer_todos(el.id)} style={{marginLeft:'6px'}}>X</button>
        </div>
      </div>
      ))
      }

    </div>
    </div>

  );
  
};
const mapStateToProps = state =>({
   state
         
})

export default  connect(mapStateToProps)(Todos)

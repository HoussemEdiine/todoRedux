export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = 'DEL_TODO'
export const COMPLETED_TODO ='COMPLETED_TODO'
export const addtodo = text =>({
    type : ADD_TODO ,
    id : Math.random(),
    text,
    completed :false
})
export const deletetodo = id =>({
    type : DEL_TODO ,
    id 

})
export const completedtodo = id =>({
    type : COMPLETED_TODO
    ,id
})
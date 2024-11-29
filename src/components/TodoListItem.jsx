import React, { useState } from 'react'

function TodoListItem({value , todoList , setTodoList , indexNumber}) {
    let [status , setStatus] = useState(false)
  const deleteRow = () =>{
    let finalData = todoList.filter((e,i)=>i!=indexNumber);
    setTodoList(finalData)
  }
  const checkStatus = () =>{
        setStatus(!status)
  }
    return (
    <>
    <li className={(status) ? "CorrectTodo" : "" } onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>

    </>
  )
}

export default TodoListItem
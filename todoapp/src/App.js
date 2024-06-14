import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos,setTodos]=useState([]);
  const[todo,setTodo]=useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      {/* adding a new task */}
      <div className="input">
        <input value={todo} onChange={(e)=>{
          setTodo(e.target.value)
        }} type="text" placeholder="🖊️ Add item..." />
       
       
        <i  onClick={()=>{
          setTodos([...todos,{id:Date.now(),text:todo,status:false}])
        }} className="fas fa-plus"></i>

      </div>
      <div className="todos">
{
todos.map((task)=>{


      return(  <div className="todo">
          <div className="left">
            {/* checkbox click and unclick */}
            <input value={task.status}
            onChange={(e)=>{
              console.log(e.target.checked)
              setTodos(todos.filter(arr2=>{
                if(task.id==arr2.id)
                  {
                    task.status=e.target.checked;
                  }
                  return arr2
              }))
            }}
            type="checkbox" name="" id="" />

            <p>{task.text}</p>

          </div>
          <div className="right">

            {/* deleting task */}
            <i className="fas fa-times"></i>
          </div>
        </div>)
})}
{/* displaying unchecked tasks using map when sttus=false */}
<h1>Active TODOS</h1>
{
  todos.map((task2)=>{
    if(!task2.status){
return(<h2>{task2.text}</h2>)
}
return null
  }
  
)
 
}
{/* when status=true --complted */}
<h1>Complted Todods</h1>
{
  todos.map((task3)=>{
if(task3.status)
  return(<h2>{task3.text}</h2>)
  })
}

      </div>
    </div>
  );
}

export default App;
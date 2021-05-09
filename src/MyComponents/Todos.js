import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
    return (
        <div className="container text-left">
            
            <h3 className = "my-3">Todos List</h3> <hr/>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
             return  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
           

              })
            }
        </div>

    )
}

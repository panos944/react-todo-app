import { useEffect, useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import type { TodoProps, Action } from "../types";


const getInitialTodos = () => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
}

const todoReducer = (state: TodoProps[], action: Action): TodoProps[] => {
  switch(action.type) {
    case "ADD":
      return [
        ...state, 
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];

    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);

    case "EDIT":
      return state.map(todo =>
        todo.id === action.payload.id
        ? {...todo, text:action.payload.newText}
        : todo
      );
    
    case "COMPLETED":
      return state.map(todo =>
        todo.id === action.payload
        ? {...todo,  completed:!todo.completed}
        : todo
      );

    default:
      return state
  }
}


const ToDo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], getInitialTodos);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return(
    <>
    <div className="max-w-md mx-auto">
      <h1 className="text-center text-2xl mb-4">To-Do List</h1>
        <TodoForm dispatch={dispatch}/>
        <TodoList todos={todos} dispatch={dispatch}/>
    </div>
    </>
  )
}

export default ToDo;
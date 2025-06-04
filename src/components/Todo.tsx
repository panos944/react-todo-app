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
    
    case "CLEAR_ALL":
      return [];

    default:
      return state
  }
}


const ToDo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], getInitialTodos);
  const totalTasks: number = todos.length
  const CompletedTasks: number = todos.filter(t => t.completed).length;
  const activeTasks: number = totalTasks - CompletedTasks;
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleClearAll = () => {
    dispatch({type: "CLEAR_ALL"})
  }

  return(
    <>
    <div className="max-w-md mx-auto">
      <h1 className="text-center text-2xl mb-4">To-Do List</h1>
        <TodoForm dispatch={dispatch}/>
        <TodoList todos={todos} dispatch={dispatch}/>
        
        {todos.length > 0 && (
        <>
          <div className="flex justify-between border-t-2 mt-4">
              <span>Total: {totalTasks}</span>
              <span>Active: {activeTasks}</span>
              <span>Completed: {CompletedTasks}</span>
          </div>
          <div className="text-end mt-4">
              <button
                className="bg-red-800 text-white rounded py-2 px-4"
                onClick={handleClearAll}>
                Clear All
              </button>
          </div>
          </>
        )}
    </div>
    </>
  )
}

export default ToDo;
import { useState } from "react";
import type { TodoFormProps } from "../types";

const TodoForm = ({dispatch}: TodoFormProps) => {

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // prevents page from  being refreshed after submit

    if (text.trim() !== ""){
    dispatch({type: "ADD", payload: text});
    setText("")
    }
  }

  return (
    <>
       <form action="" 
       className="flex gap-4 mb-4"
       onSubmit={handleSubmit}>
          <input 
          type="text" 
          className="flex-1 border p-2 rounded" 
          placeholder="New task..."
          onChange={handleChange}
          value={text}
          />
          <button 
          className="bg-gray-800 text-white px-4 py-2 rounded"
          type="submit">
            Add
          </button>
        </form>
    </>
  )
}

export default TodoForm;
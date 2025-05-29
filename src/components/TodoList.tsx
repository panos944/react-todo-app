import {Trash2, Edit, Save} from "lucide-react"
import type { TodoListProps } from "../types"
import { useState } from "react"

const TodoList = ({todos, dispatch}:TodoListProps) => {

  const [editId, setEditId] = useState<number | null>();
  const [editText, setEditText] = useState("");

  const handleDelete = (id:number) => () => {
    dispatch({type:"DELETE", payload: id})
  }

  const handleEdit = (id:number, text: string) => () => {
    setEditId(id);
    setEditText(text)
  }

  const handleCancel = () => {
    setEditId(null);
    setEditText("")
  }

  const handleSave = (id:number) => () => {
    dispatch({type:"EDIT", payload: {id, newText: editText}})
    setEditId(null);
    setEditText("");
  }

  return (
  <>
    <ul className="space-y-2">
      {todos.map(todo =>(
        <li key={todo.id} 
        className="flex items-center justify-between bg-gray-100 p-2 rounded">

          {/* HTML for when user toggles edit button */}
          {editId === todo.id ? (
            <>
            <div className="flex flex-1 gap-2">
              <input 
              type="text" 
              value={editText}
              className="border rounded p-1"
              onChange={(e) => setEditText(e.target.value)}/>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSave(todo.id)}
                className="colour-red-800 text-red-900">
                <Save size={18}/>
              </button>

              <button
                onClick={handleDelete(todo.id)}
                className="colour-red-800 text-red-900">
                <Trash2 size={18}/>
              </button>
            </div>
            </>
          ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={handleEdit(todo.id, todo.text)}
                    className="colour-red-800 text-red-900"
                  >
                    <Edit size={18}/>
                  </button>
                  <button
                    onClick={handleDelete(todo.id)}
                    className="colour-red-800 text-red-900">
                    <Trash2 size={18}/>
                  </button>
                </div> 
              </>
          )}
          </li>
        )
      )}
    </ul>
  </>
  )
}

export default TodoList;
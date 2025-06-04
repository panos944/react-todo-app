export type TodoProps = {
  id: number,
  text: string,
  completed: boolean
}

export type Action = 
  | {type:"ADD"; payload: string}
  | {type:"DELETE", payload: number}
  | {type:"EDIT", payload: {id: number; newText: string}}
  | {type:"COMPLETED", payload: number}
  | {type: "CLEAR_ALL"}

export type TodoListProps = {
  todos: TodoProps[];
  dispatch: React.Dispatch<any>
}

export type TodoFormProps = {
  dispatch: React.Dispatch<any>
}




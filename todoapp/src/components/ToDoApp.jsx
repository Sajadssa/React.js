import { useState } from "react";
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

 

const TodoApp = () => {
    //sate global called name:todos
    const [todos, setTodos] = useState([]);
    return (<div className="container">todos
        <TodoForm  />
        <TodoList/>
       

    </div>

     );
}
 
export default TodoApp;
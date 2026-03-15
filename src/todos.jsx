import { use } from "react"
import Todo from "./todo";

export default function Todos ( {todosData} ){
    // console.log(todosData);

    const todos = use(todosData);
    console.log(todos);
    
    
    return(
        <div className="card">
            <h2>all Todos hare : {todos.length}</h2>

            {
                todos.map(todo => <Todo todo={todo}></Todo>)
            }
        </div>
    )
}
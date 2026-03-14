import { use } from "react"

export default function Users ({fetch}){

    const users = use(fetch);
    console.log(users);
    
    return(
        <div className="card">
            <h2> Total Comment : {users.length}</h2>
        </div>
    )
}
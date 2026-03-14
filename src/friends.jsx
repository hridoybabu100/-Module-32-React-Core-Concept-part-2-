import { use } from "react";

export default function Friends ({friendsmassege}){

    const friends = use(friendsmassege);
    console.log(friends);
    

    return(
        <div className="card">
            <h1>Total Friends : {friends.length}</h1>
        </div>
    )
}
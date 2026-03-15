import { use } from "react"

import Friend from './friend';
export default function Friends ({ friendsData }){

 const frineds = use(friendsData);
 console.log(frineds);
 
    

    return(
        <div className="card">
            <h1>Total Friends : {frineds.length} </h1>
            {
              frineds.map(friend => <Friend friend={friend}></Friend>)  
            }
        </div>
    )
}
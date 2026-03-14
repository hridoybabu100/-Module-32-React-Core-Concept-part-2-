import { useState } from "react"

 export default function Count1 (){

    // Count calculate
    const [ Count, setCount] = useState(0);
    
    

    // Button a clicked korle jate count add hoi.

    const button = () => {
         const newCount = Count + 1 ;
         setCount(newCount);
    }

    return(
        <div>
            <h3>Total Count : {Count}</h3>
            <button onClick={button}>Add Number</button>
        </div>
    )
}
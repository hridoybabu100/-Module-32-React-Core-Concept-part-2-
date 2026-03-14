import { useState } from "react"

 export default function Count (){

    // Set count 

    const [ count, setCount] = useState(0);

    // Button e click korle 1 kore barbe
    const handleAdd = () => {
        const newcount = count + 1;
        setCount(newcount);
    }


    const countStyle = {
        border: '2px solid white',
        padding: "10px"
    }
    return(
        <div style={countStyle}>
            <h3> count Number : {count}</h3>
            <button onClick={handleAdd}>Add Coount</button>
        </div>
    )
}


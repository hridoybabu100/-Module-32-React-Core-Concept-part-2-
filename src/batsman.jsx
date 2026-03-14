import { useState } from "react"

 export default function Batmans (){

    // Run Counts

    const [runs, setruns] = useState(0);
    const [sixs, setsixs] = useState(0);
    // For 1 run
    const button1 = () => {
        const newRuns = runs + 1;
        setruns(newRuns)
    }
    // For 4 run
    const button2 = () => {
        const newRuns = runs + 4;
        setruns(newRuns)
    }
    // For 6 run
    const button3 = () => {
        const newRuns = runs + 6;
        const newSix = sixs + 1;
        setsixs(newSix);
        setruns(newRuns);
    }

    return(
        <div>
            <h3>Bangladeshi All Batsman</h3>
            <h1>Total Batsman Runs : {runs}</h1>
            <p>Total Six : {sixs}</p>
            {
                runs > 50 && <p>Your Score half Century</p>
            }
            {
                runs > 100 && <p>Your Score Century</p>
            }
            <div>
                <button onClick={button1}>Single</button>
            </div>
            <div>
                <button onClick={button2}>Four</button>
            </div>
            <div>
                <button onClick={button3}>Six</button>
            </div>
        </div>
    )
}
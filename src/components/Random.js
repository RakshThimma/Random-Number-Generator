import {useState} from "react";
function Random() {
    const [num,setnum] = useState(0)

    function handlenum() {
        setnum(Math.floor(Math.random()*10 + 1))
    }
    return(
        <div className="generator">
            <h1 className="generator-h1">Random Number Generator</h1>
            <h1 className="generator-num">{num}</h1>
            <button onClick={handlenum}>Generate</button>
        </div>
    )
}

export default Random
import React, { useState } from "react";
import './Acc.css';
const MyAccor = ({question, answer})=>{
    const [show, setshow] = useState(false);
    return (
        <>
            <div className="question">
                <span className="icon" onClick={()=> setshow(!show) }>+</span>
                <h2>{question}</h2>
            </div>
            { show &&  <p className="ans">{answer}</p> }
            
        </>
    )
}

export default MyAccor;
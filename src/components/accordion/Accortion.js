import React, { useState } from "react";
import './Acc.css';
import questions from './api';
import MyAccor from "./MyAccor";

const Accortion = ()=>{
    const [data, setData] = useState(questions);

   
    return(
        <React.Fragment>
            <div className="main">
                {
                    data.map((check, index) => {
                        return (  <MyAccor key={index} {...check}  />  )
                    })
                }
            </div>     
        </React.Fragment>
    );
}

export default Accortion;
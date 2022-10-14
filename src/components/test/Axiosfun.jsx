import React, { useState } from "react";
import axios from "axios";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
const Axiosfun = () => {

    const [val, setval] = useState(1);
    const [name, setname] = useState();
    const [move, setmove] = useState();



    useEffect(() => {
        async function FetchAPI() {
            let res = await axios.get(`https://pokeapi.co/api/v2/type/${val}`);
            setname(res.data.name);
            setmove(res.data.moves.length);
            console.log(res);
        }
        FetchAPI();
    }, [val])

    useEffect(()=>{
        console.log('useEffect');
    },[val])
    return (
        <>
            <div className="container">
                <h1>Axios </h1>
                <h2>You are seleted value <span className="text-primary">  {val} </span></h2>
                <h2>The Name is <span className="text-primary">  {name} </span></h2>
                <h2>And the moves of this <span className="text-primary">  {move}</span></h2>
                <select onChange={(event) => setval(event.target.value)}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                </select>
            </div>


        </>
    )
}

export default Axiosfun;


import React from "react";
import { createContext } from "react";
import ComB from "./ComB";
import ComD from "./ComD";

const firstName = createContext();
const LastName = createContext();
const obj = {
    title : 'Heading',
    content : 'Content'
}
const ComA = ()=> {
    return(
        <React.Fragment>
            <firstName.Provider value={obj}>
                <LastName.Provider value={'Zubair'}>
                    <ComB />
                </LastName.Provider>
            </firstName.Provider>
            
        </React.Fragment>
    )
}

export default ComA;
export {firstName, LastName};
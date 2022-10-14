import React, { useContext } from "react";
import { firstName, LastName } from "./ComA";



const ComD = ()=> {
    const firName = useContext(firstName);
    const lsName = useContext(LastName);
    console.log(firName);
    return(
        <React.Fragment>

            {/* <firstName.Consumer>
                {
                    (fname)=>{
                        return (
                            <React.Fragment>
                                <LastName.Consumer>
                                    {
                                        (lname)=>{
                                            return <h1 style={{textAlign: 'center'}}>My Name is {fname} {lname}</h1>
                                        }
                                    }
                                </LastName.Consumer>
                            </React.Fragment>
                        )
                    }
                }
            </firstName.Consumer> */}
            <h2 style={{textAlign: 'center'}}>My Name is {firName.title} {firName.content}</h2>
        </React.Fragment>
    )
}

export default ComD;
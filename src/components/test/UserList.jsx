import { Api } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
const UserList = () => {
    const [Apidata, setApidata] = useState([]);

    async function fetchdata() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        const actualData = await response.json();
        console.log(actualData)
        setApidata(actualData);
    }
    useEffect(() => {

           fetchdata();
    }, []);
    return (
        <>
            <h1 className="text-center">Fetch API</h1>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>NO. #</td>
                            <td>Name</td>
                            <td>UserName</td>
                            <td>Address</td>
                            <td className="text-center">Phone Number</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Apidata.map((item, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td> {item.id} </td>
                                        <td> {item.name}</td>
                                        <td> {item.username}</td>
                                        <td> {item.email}</td>
                                        <td> {item.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );

}
export default UserList;
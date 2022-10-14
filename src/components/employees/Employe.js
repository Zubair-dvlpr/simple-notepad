import React, { useState } from "react";
import EmployeData from "./Data";
import './employe.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Employees = () => {
    const [data, setdata] = useState(EmployeData);
    return (
        <React.Fragment>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employe Name</th>
                            <th scope="col">Employe Salery</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((employe) => {
                                return (
                                    <tr>
                                        <th scope="row">{employe.no}</th>
                                        <td>{employe.name}</td>
                                        <td>{employe.salery}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>


        </React.Fragment>
    )
}

export default Employees;
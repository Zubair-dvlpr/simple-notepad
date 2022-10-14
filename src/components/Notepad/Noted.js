import React, { createContext } from "react";
import './notepad.css';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Noted = (props)=> {
    const detThis = ()=>{
        props.delItem(props.id);
    }
    const editThis = ()=>{
        props.editItem(props.id);  
    }

    return (
        <React.Fragment>
           
            <div className="grid-item box p-3" id={props.id}>
                    <h3>{props.title}</h3>
                    <div className="content">
                        <p>{props.content}</p>
                    </div>
                    <Button className="float-end" onClick={editThis} variant="outlined">
                        Edit
                    </Button>
                    <Button className="float-end" onClick={detThis} variant="outlined">
                        <DeleteOutlineIcon />
                    </Button>
            </div>
            
        </React.Fragment>
    )
}
export default Noted;

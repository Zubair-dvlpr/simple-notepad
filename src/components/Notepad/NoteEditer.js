import React, { useState } from "react";
import './notepad.css';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const NoteEditer = (props) => {
    const [show, setShow] = useState(false);
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    let recObj = props.sendObj;
   

    const InputEvent = (event) => {
        console.log(recObj.t.length);
        if(recObj.t.length == 0){
            if (event.target.name === 'title') {
                setNote({ ...note, title: event.target.value })
            }
            if (event.target.name === 'content') {
                setNote({ ...note, content: event.target.value })
            }
        }else{
            console.log(event.target.value + "Edit received Objects properties");
            if (event.target.name === 'title') {
                setNote({ ...note, title: event.target.value })
            }
            if (event.target.name === 'content') {
                setNote({ ...note, content: event.target.value })
            }
        } 
    }
    function addEvent() {
        if (note.title.length !== 0 && note.content.length !== 0) {
            props.passNote(note);
            setNote({
                title: '',
                content: '',
            })
        } else {
            alert(`Please Enter the Title and Description`);
        }
    }

    return (
        <React.Fragment>
            <div className="editer-container  d-flex justify-content-center p-4" onDoubleClick={() =>{ setShow(false)}}>
                <div className="editer p-2 d-flex flex-column">
                    <input type="text" value={note.title} onChange={InputEvent} onClick={() => setShow(true)} name="title" placeholder="Title" />
                    {show ? (<textarea rows="4" value={note.content} onChange={InputEvent} cols="30" name="content" placeholder="Descripation"></textarea>) : null}
                    {show ? (
                        <Button variant="outlined" onClick={addEvent}>
                            <AddCircleIcon sx={{ fontSize: 30 }} />
                        </Button>
                    ) : null}
                </div>
            </div>
        </React.Fragment>
    )
}

export default NoteEditer;
import React, { createContext, useState } from "react";
import Header from "./Header";
import './notepad.css';
import Footer from "./Footer";
import NoteEditer from "./NoteEditer";
import Noted from "./Noted";
const Notepad = ()=> {
    const [additem, setAddItem] = useState([]);
    const [editObj, seteditObj] = useState({
        t : '',
        c : ''
    });
    const addNote = (note) => {
        setAddItem((prevData)=> {
            return [...prevData, note] 
        });
    }
    const deleteItem = (id)=>{
        setAddItem((oldData)=>{
            return oldData.filter((value, indx)=>{
                return indx != id;
            });
        });
    }
    const edit = (editID)=> {
        seteditObj(()=>{
            return {
                t: additem[editID].title,
                c: additem[editID].content
            }
        });

        // const newArr = additem.map((obj , index ) => {
        //     console.log();
        //     if(index == editID){
        //         const newtitle = prompt("Enter New title");
        //         const newContent = prompt("Enter New Content");
        //         const pasObj = obj;
        //        obj.title = newtitle; 
        //        obj.content = newContent; 
        //     }
        //     return obj;
        //   });
    }
    return (
        <React.Fragment>
            <Header />
            <NoteEditer passNote={addNote} sendObj={editObj}/>
            <div className="grid-container">
            {
                additem.map((value, index)=>{
                    return <Noted
                        key={index}
                        id={index}
                        title={value.title}
                        content={value.content}
                        editItem={edit}
                        delItem={deleteItem}
                     />
                })
            }
                
            </div>
            <Footer  />
        </React.Fragment>
    )
}

export default Notepad;
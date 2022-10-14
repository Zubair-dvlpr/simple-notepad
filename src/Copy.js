import * as React from 'react';
import Button from '@mui/material/Button';
import FileDownloadDoneOutlinedIcon from '@mui/icons-material/FileDownloadDoneOutlined';
import './index.css';
const App = ()=>{
    const [item, additems] = React.useState("");
    const [list, addList] = React.useState([]);
    const inputVal = (event)=> {
        additems(event.target.value);   
    }
    const gotIt = ()=> {
        addList((preValue)=>{
            return[...preValue, item];
        })
        additems("");
    }
    return(
        <div className='main'>
            <div className='container'>   
                <h1 className='main-heading'>TO DO List</h1>
                <div className='from'>
                    <input type="text" value={item} placeholder='Enter somethings' onChange={inputVal}/>
                    <Button onClick={gotIt}><FileDownloadDoneOutlinedIcon /></Button>
                </div> 
                <div className='list'>
                    <ul>
                        {
                            list.map((va, index)=>{
                                return <li key={index}>{va}</li>;
                            })
                        }    
                    </ul> 
                </div> 
            </div>
        </div>
    );
}
export default App;
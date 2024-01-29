import React, { useState } from 'react'


function ChildCom(props) {
    let [name,setName]=useState("");
    let submit=(event)=>{
        event.preventDefault();
        props.value(name);
    }
    return ( 
        <>
        <form  onSubmit={submit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}  />
            <button>Submit</button>
        </form>
        </>
     );
}

export default ChildCom;
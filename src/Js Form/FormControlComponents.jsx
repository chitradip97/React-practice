import React, { useState } from 'react'

function ControledCom() {
    const[name,setName]=useState("");
    const[pswd,setPswd]=useState("");
    let handleInput=(event)=>{
        if((event.target.name)=="FirstName")
        {
            let firstname=(event.target.value).toUpperCase();
            setName(firstname);
        }
        else{
            setPswd(event.target.value);
        }
    }
    let submit=(event)=>{
        event.preventDefault();
        console.log(event);

    }
    return ( 
        <>
        <form onSubmit={submit}>
            <label>First Name</label>
            <input type="text" value={name} name="FirstName" onChange={handleInput} />
            <label>Password</label>
            <input type="Password" value={pswd} name="password" onChange={handleInput} />
            <button>submit</button>
        </form>
        </>
     );
}

export default ControledCom;
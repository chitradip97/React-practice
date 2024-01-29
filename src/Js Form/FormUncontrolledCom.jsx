import React, { useRef, useState } from 'react'

function UncontroledCom() {
    const nameRef=useRef();
    const submit=(event)=>{
        event.preventDefault();
        console.log(nameRef);
        console.log(nameRef.current.value.toUpperCase())
    }
    return ( 
        <>
        <form onSubmit={submit}>
            <label>First Name</label>
            <input type="text" ref={nameRef}  />
            <button>Submit</button>
        </form>
        </>
     );
}

export default UncontroledCom;
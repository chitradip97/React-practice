import React, { useContext } from 'react';
// import { data,data1 } from './ContextApiCom';
import { data,data1 } from './UseContext';

function SubChild() {
   const name= useContext(data);
   const gender=useContext(data1);
    return ( 
        <>
       <h1>Hi my name is {name} and my gender is {gender}</h1>
        </>
     );
}

export default SubChild;
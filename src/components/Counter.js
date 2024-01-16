import React, { useState } from 'react';
function Counter () {
    let [count,setcount]=useState(0)
    let Inccounter=()=>{
        count<20?count++:count=20;
        setcount(count)
    }
    let Deccounter=()=>{
        count>-20?count--:count=-20;
        setcount(count)
    }
    return ( 
<div>
    <button onClick={()=>{Deccounter()}}>-</button>
    <button>{count}</button>
    <button onClick={()=>{Inccounter()}} style={{backgroundColor:"gray"}}>+</button>
</div>
     );
}

export default Counter ;
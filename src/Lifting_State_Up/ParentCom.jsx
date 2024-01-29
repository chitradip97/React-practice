import React from 'react'
import ChildCom from './ChildCom';
function getdata(data){
console.log(data)
}
function ParentCom() {
    return ( 
        <>
        <ChildCom value={getdata} />
        </>
     );
}

export default ParentCom;
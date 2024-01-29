import Child1 from "./Child1";
import React, { createContext } from 'react';


const data=createContext();
const data1=createContext();
function ContextApiCom() {
    const name="chitro";
    const gender="male";
    return (  
        <>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
        <Child1 />
            </data1.Provider>
        </data.Provider>
        </>
    );
}

export default ContextApiCom;
export {data,data1};
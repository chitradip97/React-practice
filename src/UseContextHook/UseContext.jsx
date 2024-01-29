import React,{createContext} from 'react'
import Child1 from './Child';



const data=createContext();
const data1=createContext();
function UseContexthook() {
    const name='chitro';
    const gender='gender';
    return ( 
        <>
        <data.Provider value={name}>
        <data1.Provider value={name}>
        <Child1/>
        </data1.Provider>
        </data.Provider>
        </>
     );
}

export default UseContexthook;
export {data,data1};
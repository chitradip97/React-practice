import React,{useEffect, useMemo,useState} from "react";
function App_dif_effect(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState(0);

    const noRender=useEffect(()=>{
        return <div>
            <h1 style={{color:'red'}}>No render again{count}--{name}</h1>
            <h1 style={{color:'red'}}>useEffect vs useMemo{count}--{name}</h1>
        </div>
    },[name])
    return(
        <div>
            {noRender}

            <h1>This render again and again{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            <button onClick={()=>{setName(name+1)}}>click</button>
        </div>
    )

}
export default App_dif_effect;
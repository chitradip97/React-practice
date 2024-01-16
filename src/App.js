import logo from './logo.svg';
import './App.css';
// import {useState} from "react";
import Toggle from "./components/Toggle";
import Counter from './components/Counter';

// You are building a simple React application that allows users to toggle between light mode and dark mode. You have already set up the basic structure of your component, and you decide to use the useState hook to manage the current mode.

 function App() {
// const [change,setchange]=useState('white')

// let changer=()=>{
//  change=='white'?setchange("black"):setchange("white");

// }
  return (
    <>
     {/* <div className="App" style={{backgroundColor:change,width:'100%',height:'100vh'}}>
       <button onClick={()=>{changer()}}>toggle</button>
     </div> */}
    {/* <Toggle/> */}
    <Counter/>

    </>
  );
}

export default App;

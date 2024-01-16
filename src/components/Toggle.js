import React, { useState } from "react";
function Toggle() {
  const [change, setchange] = useState("white");

  let changer = () => {
    change == "white" ? setchange("black") : setchange("white");
  };
  
  return(<div className="App" style={{ backgroundColor: change, width: "100%", height: "100vh" }}>
            <button onClick={() => { changer();}}>toggle</button>
        </div>
  )
}

export default Toggle;

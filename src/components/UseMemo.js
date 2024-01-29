import React, { useState, useMemo, useEffect } from "react";

function UseMemo_fun(props) {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useEffect(() => {
    console.warn("........");
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={IncrementOne}> counterCount-{counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={IncrementTwo}> counter2-{counterTwo}</button>
    </div>
  );
}
export default UseMemo_fun;
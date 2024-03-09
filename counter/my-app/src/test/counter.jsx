import { useState } from "react";

function Counter() {
    const [counter,setCounter]= useState(1)

    function Increment(){
            setCounter(prevValue =>prevValue + 1);
            
    }
    function Decrement(){
           setCounter(prevValue =>prevValue - 1);
        }
    function Reset(){
        setCounter(1);
    }
   return (
    <div>
        <h1>COUNTER - {counter}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
   ) 
}
export default Counter;
import { Keypad } from './keypad.js'
import './calculator.css';
import { useState } from 'react';
export  function App(){
    let [input,setInput]=useState("");
    function handleClick(value){
     setInput(input+value)
    }
    function calculate()
    {
        let output= eval(input)
        setInput(output)
    }
    function clear()
    {
       setInput("")
    }
    return (
    <div className="container">
    <div className="calculator">
        <input type="text" className="output" value={input}/>
        <Keypad handleClick={handleClick} calculate={calculate} clear={clear}/>
    </div>
    </div>
)
}

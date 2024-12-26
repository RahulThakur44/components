import React, { useState } from "react";

export default function Counter(){
    const[count,setCounter]=useState(0);
    const[message,setMessage]=useState('');
    
    const increment=()=>{
        if(count<20){
            const newCount=count+1;
            setCounter(newCount);
            updateMessage(newCount);
        }
       

    }
    const decrement=()=>{
        if(count > 0){
            const newCount=count -1;
        setCounter(newCount);
        updateMessage(newCount);
        }
        else{
            setMessage('Count cannot be negative');
        }
    }
    const reset=()=>{
        setCounter(0);
        setMessage('');
    }
    const updateMessage=(newCount)=>{
        if(newCount>10){
            setMessage("keep going on!");
        }
        else{
            setMessage("");
        }
    }


return (


<div style={{textAlign:"center",marginTop:"50px"}}>
    <h1>Counter App</h1>
    <h2>Counter:{count}</h2>
    {message &&<p style={{color:"red"}}>{message}</p>}
    <div>
        <button onClick={increment} style={{margin:"5px",padding:"10px 20px"} }disabled={count===20} >Increment</button>
        <button onClick={decrement} style={{margin:"5px",padding:"10px 20px"} }>Decrement</button>
        <button onClick={reset} style={{margin:"5px",padding:"10px 20px"} }>Reset</button>
    </div>
</div>

)


}
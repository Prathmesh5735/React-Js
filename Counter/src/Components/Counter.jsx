import React,{useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] =useState(0);
    const [prime,setPrime]=useState(false);
    const [even,setEven]=useState(0);
    useEffect(()=>{
        checkEven();
        checkPrime();
    },[count])
    function checkPrime(){
        for(let i=2;i<count;i++){
            if(count%i===0){
                return setPrime(false);
            }
        }
        return setPrime(true);
    }
    function checkEven(){           
        for(let i=0;i<=count;i++){
            if(count%2==0){
                return setEven(true);
            }
        }
        return setEven(false);
    }
  return (
    <div>
        <button onClick={()=>setCount(count-1)} disabled={count==0}>-1</button>
        <button onClick={()=>setCount(count+1)}>+1</button><br />
        <button onClick={()=>setCount(0)}>Reset Count</button>
        <h1>Count:{count}</h1>
        <h2>This Number is: {even ? "Even" : "odd"}</h2>
        <h2>Prime Number: {prime ? "true": "false"}</h2>
    </div>
  )
}

export default Counter
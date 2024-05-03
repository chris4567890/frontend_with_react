import React, { useEffect, useState } from 'react';


function Incrementer({count1}){
    
    const [count, setCount] = useState(0)
    useEffect(()=>{
        var savedCount = parseInt(localStorage.getItem('count'));
        if(savedCount){
            console.log("here is your saved count: "+savedCount)
            setCount(savedCount);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('count',count);

    },[count])

  
 
    return(
        <div>
            <button onClick={() => setCount((count) => count + count1)}>increment</button>
            <button onClick={() => setCount((count) => count -count1)}>decrement</button>       
          count is {count}
        
        </div>
    )
}


export default Incrementer
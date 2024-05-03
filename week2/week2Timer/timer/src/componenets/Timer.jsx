import { useEffect, useState } from "react";

export default function TimerThing(){

    
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const [time,setTime] = useState(0);
    const [isAffect,setAffect] = useState(false);
    const [isPause,setPause] = useState(false);
          let min = minutes * 60;
      let totalseconds = min + seconds;
    
    useEffect(()=>{

     setInterval(()=>{
        if(isPause === true){
          return ;
        }
        setAffect(true);
        setTime(totalseconds);
        if(isAffect){    
       setTime(totalseconds-1);
       console.log(totalseconds);
       formatTime(time);
       }
       if(totalseconds === 0){
         setTime(0);
         setAffect(false);
         
         
       }},1000);

    },[time,isAffect]);


      function setSpecificTime(x){
        setMinutes(x);
        setSeconds(0);

      }


      function startTimer(){
        if(isPause === true){
          setPause(false);
          return 0;
        }
        setAffect(true);
        setMinutes(minutes);
        setSeconds(seconds);
        

      }
      function pauseTheThing(){
        setPause(true);
      }
    
    

    function resetTimer(){
        setMinutes(0);
        setSeconds(0);
        setTime(0);
        clearInterval();
    }

    function formatTime(time){
      console.log(time);
      return(
        <div>
        {time}
      </div>
      

      )
      
    }


    return (
      <>
      <div>
          <div>
            <input
              type="number"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button onClick={startTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
          <div>Time Remaining: {formatTime(time)} seconds</div>
          
          <button onClick={()=> pauseTheThing}></button>
          <button onClick={() => setSpecificTime(5)}>5</button>
          <button onClick={() => setSpecificTime(10)}>10</button>
          <button onClick={() => setSpecificTime(15)}>15</button>
        </div>
                  
      </>
        
      );
      
}
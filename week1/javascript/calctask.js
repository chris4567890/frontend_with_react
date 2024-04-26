let getResult = "";
   document.getElementById("display").innerHTML = getResult;
   const buttons = document.getElementById('buttons');
   buttons.addEventListener("click",function(event){
      event.preventDefault();
      const buttonInput = event.target.innerText;
      if(buttonInput === "="){
         console.log("bruh you are inside the calc function");
         calcResult= eval(getResult);
         document.getElementById(calcResult); 
         document.getElementById("display").innerHTML = calcResult;
         getResult= "";
         getResult= calcResult;
         return;
      }
      console.log("wallah here is your button input: "+buttonInput);
      getResult += buttonInput;
      console.log("wallah jeg sværger her er dit knap indtryK :" +getResult);
      document.getElementById(getResult);
      document.getElementById("display").innerHTML = getResult;

      


   })
//code from https://stackoverflow.com/questions/48239/getting-the-id-of-the-element-that-fired-an-event

function identifyTheDiv(event){
   var getTheEvent = event.target.id;
   console.log("hello this is :"+ getTheEvent);

   document.getElementById(getTheEvent).innerHTML = "<p>hello do you know who this is? " + getTheEvent +"</p>";   
    
}
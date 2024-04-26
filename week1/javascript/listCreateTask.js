let names = ["Lars","Jan","Peter","bo","Frederik","Thomas","Jörg","Patrick"];
   
function generateTheUl(namesArray){
   console.log("wallah jeg sværger du er inde i funktionen");
   let the_array = namesArray;
   console.log("here is the array: "+ the_array);
   
   document.getElementById("getTheList").innerHTML = '<ul>'+ the_array.map(name => '<li>'+name+'</li>').join('')+"</ul>";
   //console.log("here is the array after generation: "+names);
}

function addTheName(event){
   event.preventDefault()
   console.log("bruh you are inside the add name function");
   let x = document.getElementById("name")
   let name = x.value;
   //console.log("here is your name: "+name);
   //names.push(name);
   //console.log(names);


   
   
   names.push(name);
   generateTheUl(names);
}

function removeTheFirstName(event){
   event.preventDefault();
   names.splice(0,1);
}

function removeTheLastName(event){
   event.preventDefault();
   names.splice(names.length-1,1);
}

generateTheUl(names);
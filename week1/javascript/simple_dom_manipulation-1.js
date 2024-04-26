function manipulateTheDom(){
    console.log("inside the console");
    let div1 = document.getElementById("Nicklas_The_Complainer");
    div1.style.background = 'green';
    let div2 = document.getElementById("Patrick_The_Awesome");
    div2.style.background = 'red';
    let div3 = document.getElementById("Rolin_The_Coder");
    div3.style.background = 'blue';
    
 }
 
 function changeTheDomColor(){
    console.log("you are now inside this function bruh");
    //source from: https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor1);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    let div1 = document.getElementById("Nicklas_The_Complainer");
    div1.style.background = "#"+randomColor1;
    let div2 = document.getElementById("Patrick_The_Awesome");
    div2.style.background = "#"+ randomColor2;
    let div3 = document.getElementById("Rolin_The_Coder");
    div3.style.background = "#" + randomColor3;
 }
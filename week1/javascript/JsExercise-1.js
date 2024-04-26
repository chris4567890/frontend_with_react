function myFilter(array,callback){
   let result_array = [];
   for(let i = 0; i < array.length; ++i){
      if(callback(array[i])){
         result_array[i] = array[i];
      }
   }
   return result_array;
}
function myMap(array,callback){
 let result_array = [];
 for(let i = 0; i < array.length; ++i){
   if(callback(array[i])){
      result_array[i] = array[i].toUpperCase();
   }
 }
 return result_array;
}
//let names = ["lars","peter","jan","bo"];
let filted_array = myFilter(names, (name) => name.length > 2);


let upperCase_array = myMap(names,(name) => name.toUpperCase())


Array.prototype.myFilter = function(callback){
   let result_array = [];
   for(let i = 0; i < array.length; ++i){
      if(callback(array[i])){
         result_array[i] = array[i];
      }
   }
   return result_array;
}
Array.prototype.myMap = function(callback){
   let result_array = [];
   for(let i = 0; i < array.length; ++i){
      if(callback(array[i]) != null){
         result_array[i] = array[i];
      }
   }
   return result_array;
}


console.log(filted_array);

console.log(upperCase_array);

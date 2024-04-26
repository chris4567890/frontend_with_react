var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
 ];
 
 function generateCarUi() {
    
    var table = '<table>' + '<tr>' + '<th>id:</th>' + '<th>year:</th>' + '<th>make:</th>' + '<th>model:</th>' + '<th>price:</th>' + '</tr>';
    for (var i = 0; i < cars.length; ++i) {
        table += '<tr>';
        table += '<td>' + cars[i].id + '</td>';
        table += '<td>' + cars[i].year + '</td>';
        table += '<td>' + cars[i].make + '</td>';
        table += '<td>' + cars[i].model + '</td>';
        table += '<td>' + cars[i].price + '</td>';
        table += '</tr>';
    }
    table += '</table>'; 
    document.getElementById('carTable').innerHTML = table; 
 }
 
 function reEvaluteThePrice(){
    
    let x = document.getElementById("price").value;
    console.log("bruh here is your number: "+x);
    if(!isNaN(x)){
       cars = cars.filter(cars => cars.price >= x);
       generateCarUi();
    }else{
       alert("not a number please try again.");
    }
 }
 
  generateCarUi();
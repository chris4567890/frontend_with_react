const names = ["Lars","Jan","Peter","bo","Frederik","Thomas","Jörg","Patrick"];

let filted_array = names.filter((name) => {return name.length <= 3});

filted_array.forEach(name => {
    console.log(name)
})

let upperCase_array = names.map(name => name.toUpperCase());

upperCase_array.forEach(name => {
    console.log(name)
})

function generateTheUl(names){
    return '<ul>'+ names.map(name => '<li>'+name+'</li>').join('')+"</ul>";
}

console.log(generateTheUl(names));

let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  let carsNewerThan1999 = cars.filter(car => car.year >= 2000);
  console.log(carsNewerThan1999);
  let carsTHatsOnlyVolvo = cars.filter(car => car.make === 'Volvo');
  console.log(carsTHatsOnlyVolvo);
  let carsThatsLessThan5k = cars.filter(car => car.price <= 5000);
  console.log(carsThatsLessThan5k);

  function makeTheSQL(cars){
    return cars.map(car => `insert into cars (id,year,make,model,price) values (${car.id},${car.make},${car.model},${car.price})`).join("\n");
  }
console.log(makeTheSQL(cars));
 
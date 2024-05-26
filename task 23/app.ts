let car : string = "subaru";

console.log("\n----> 5 tests evalute to true :");

// no 1
console.log("Is car ==   'subaru' ? I predict true.");
console.log(car === 'subaru');

// no 2 
console.log("Is car !=   'toyota' ? I predict true.");
console.log(car !== 'toyota');

// no 3 
console.log("Is the lenth of car > 4? I predict true.");
console.log(car.length > 4);

// no 4
console.log("Is the lenth of car <= 6? I predict true.");
console.log(car.length <= 6);

// no 5 
console.log("does car start with 's'? I predict true.");
console.log(car.startsWith('s'));

console.log("\n----> 5 tests evalute to false :");

// no 1
console.log("Is car ==   'honda' ? I predict false.");
console.log(car === 'honda');

// no 2 
console.log("Is car in uppercase? I predict false");
console.log(car.toUpperCase() === car);

// no 3 

console.log("Is car ===  'Subaru' ? I predict false.");
console.log(car === 'Subaru');
// no 4

console.log("Is car ==   'Audi' ? I predict false.");
console.log(car === 'Audi');

// no 5 
console.log("Is the lenth of car === 7 ? I predict true.");
console.log(car.length === 7 );

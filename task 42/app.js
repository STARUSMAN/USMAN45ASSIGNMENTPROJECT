"use strict";
function show_magicain(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magician) {
    return magician.map(name => `THE GREAT ${name}`);
}
let magician_name = ["usman", "hamzah", "Herry poter"];
let great_magician = make_great(magician_name);
// = array me show hoga
// console.log(great_magician);   
show_magicain(great_magician);

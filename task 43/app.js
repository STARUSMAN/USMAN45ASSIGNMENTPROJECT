"use strict";
function show_magicain(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magician) {
    return magician.map(name => `THE GREAT ${name}`);
}
let magician_name = ["USMAN", "HAMZAH", "HERRY POTER"];
let copy_magician_name = magician_name.slice();
let copy_great_magicain = make_great(copy_magician_name);
console.log("Original Array\n");
show_magicain(magician_name);
console.log("\nCopied Array\n");
show_magicain(copy_great_magicain);

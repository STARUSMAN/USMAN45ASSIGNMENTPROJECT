// 2nd method

const personName : string = "usman shaikh"

console.log(`Name in uppercase: ${personName.toUpperCase()}`);
console.log(`Name in Lowercase: ${personName.toLowerCase()}`);

let titlecaseName = personName.replace(/\b\w/g,c => c.toUpperCase());

console.log(`Name in titlecase : ${titlecaseName}`);

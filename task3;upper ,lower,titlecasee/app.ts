const personName: string = "USman ShaiKh";



console.log(`Name in uppercase : ${personName.toUpperCase()}`);
console.log(`Name in lowercase : ${personName.toLowerCase()}`);

let step1 = personName.split(` `);
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word .substr(1).toLowerCase());

let step3 = step2.join(``);
console.log(`Name in titlecase: ${step3}`);
console.log(step1)
console.log(step2)
console.log(step3)

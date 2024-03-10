// 2nd method
var personName = "usman shaikh";
console.log("Name in uppercase: ".concat(personName.toUpperCase()));
console.log("Name in Lowercase: ".concat(personName.toLowerCase()));
var titlecaseName = personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log("Name in titlecase : ".concat(titlecaseName));

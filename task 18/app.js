var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritplaces = ["Makkah", "Madina", "aqsa-masjid", "london", "newzealand"];
console.log("original order " + favouritplaces + "\n");
console.log("alphabetical order " + __spreadArray([], favouritplaces, true).sort() + "\n");
console.log("original order " + favouritplaces + "\n");
console.log(" reverse alphabetical order " + __spreadArray([], favouritplaces, true).sort().reverse() + "\n");
console.log("original order " + favouritplaces + "\n");
console.log("reverse the order of list " + favouritplaces.sort().reverse() + "\n");
console.log("reverse the order of list " + favouritplaces.reverse() + "\n");
console.log("alphabetical order " + favouritplaces.sort() + "\n");
console.log("alphabetical order " + favouritplaces.sort().reverse() + "\n");

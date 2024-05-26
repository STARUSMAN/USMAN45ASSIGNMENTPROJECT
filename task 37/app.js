"use strict";
function make_shirt(size = "large", label = "I love typescript") {
    console.log(`Created A ${size} shirt with the ${label} print on shirt`);
}
// calling a function with by default values,,
make_shirt();
make_shirt("medium");
make_shirt("Small", "codewithusman");

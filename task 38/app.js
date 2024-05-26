"use strict";
function describe_city(city, country = "PAKISTAN") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("lahore");
describe_city("hydrabad");
describe_city("dehli", "india");

let friends_name:string[] = ["aqib", "soomar", "murad", "waqas"];

friends_name = []
if(friends_name.length > 0){
    for(let user of friends_name) {
        console.log("user:" + user);
    }
}
else{
    console.log("we need to find some user!");
}
// // for remove all name from the array
// let nullName :string[] = [];

// if( nullName.length> 0){
//     for(let user of nullName) {
//         console.log("user: " + user);
//     }
// }
// else {
//     console.log("we need to find some user!");
// }
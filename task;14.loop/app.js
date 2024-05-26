var guest_list = ["usman", "aqib", "soomar", "murad"];
// for( let i=0; i < guest_list.length;i++){
// console.log(`Dear${guest_list[i]} : \n you are invited to dinner! \n`);
// }
var i = 0;
while (i < guest_list.length) {
    console.log("Dear ".concat(guest_list[i], " : \n you are invited to dinner! \n"));
    i++;
}

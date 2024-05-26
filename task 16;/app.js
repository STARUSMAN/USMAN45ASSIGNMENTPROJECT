var guest_list = ["usman", "aqib", "soomar", "murad"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], " : \n you are invited to dinner! \n"));
}
console.log("\"unfortunately ".concat(guest_list[1], "can't come to dinner.\""));
guest_list[1] = "zain";
console.log("\n NEW LIST OF INVITATION : \n");
for (var j = 0; j < guest_list.length; j++) {
    console.log("Dear ".concat(guest_list[j], " : \n you are invited to dinner! \n"));
}
console.log("Good news! we've found a bigger dinner table,,so more space is available.so our new guests are:\n ");
guest_list.unshift("rajab");
guest_list.splice(2, 0, "waqas");
guest_list.push("huzaifa");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], " : \n you are invited to dinner! \n"));
}

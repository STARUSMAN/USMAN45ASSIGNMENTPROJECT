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
guest_list.unshift("rajab");
guest_list.splice(2, 0, "waqas");
guest_list.push("huzaifa");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], " : \n you are invited to dinner! \n"));
}
console.log("Unfortunately, the new dinner table won't arrive in time,so we can only invite two people for dinner.\n");
// guest_list.pop()
// guest_list.pop()
// guest_list.pop()
// guest_list.pop()
// guest_list.pop()
while (guest_list.length > 2) {
    var notInvited = guest_list.pop();
    console.log("sorry,Due to limited space we can't invite you to dinner Mr.".concat(notInvited, "\n"));
}
for (var j = 0; j < guest_list.length; j++) {
    console.log("Dear ".concat(guest_list[j], " : \n you are still invited to dinner! \n"));
}
guest_list.pop();
guest_list.pop();
console.log(guest_list);

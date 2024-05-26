let guest_list : string[] = ["usman","aqib","soomar","murad" ];

for( let i=0; i < guest_list.length;i++){
console.log(`Dear ${guest_list[i]} : \n you are invited to dinner! \n`);
}
console.log(`"unfortunately ${guest_list[1]}can't come to dinner."`);

guest_list[1] = "zain";

console.log("\n NEW LIST OF INVITATION : \n");

for( let j=0; j < guest_list.length;j++){
    console.log(`Dear ${guest_list[j]} : \n you are invited to dinner! \n`);
    }

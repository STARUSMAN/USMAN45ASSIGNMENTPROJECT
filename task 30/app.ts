let username:string[]= ["admin", "usman", "affan", "aqib","soomar"];

for(let i = 0; i < username.length; i++) {
    if(username[i] === 'admin'){
        console.log(`\n"Hello admin, would you like to see a status report?"\n`);
    }
    else {
        console.log(`Hello ${username[i]}, thank you for logging in again`);
    }
}
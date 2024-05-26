let current_users: string[] = ["Amir", "babar","shaheen", "naseem","rizwan"]
let new_users: string[] = [ "fakher", "saim","amir" , "Babar","ubaid"]

new_users.forEach(new_one_users =>{
    let our_condition=current_users.some(current_one_users =>current_one_users.toLocaleLowerCase() === new_one_users.toLocaleLowerCase())

if(our_condition){
    console.log(`sorry ${new_one_users} is already playing`)
}
else{
    console.log(`This Username ${new_one_users} is available`)
}
})
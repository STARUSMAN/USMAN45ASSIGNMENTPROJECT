let ordinal_number:number[] = [1,2,3,4,5,6,7,8,9];

for(let oneNumber of ordinal_number){
    let ordinal_ending:string;
    
        if(oneNumber === 1){
            ordinal_ending = "st"
        }
        else if(oneNumber === 2){
            ordinal_ending = "nd"
        }
        else if(oneNumber === 3){
            ordinal_ending = "rd"
        }
        else
            {ordinal_ending = "th"}

        console.log(`${oneNumber}${ordinal_ending}`)
}

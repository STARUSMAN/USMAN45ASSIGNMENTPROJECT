let favouritplaces: string[] = [ "Makkah", "Madina", "aqsa-masjid" ,"london" ,"newzealand" ]

console.log("original order "   +favouritplaces+"\n");

console.log("alphabetical order "   +[...favouritplaces].sort()+"\n");

console.log("original order "   +favouritplaces+"\n");

console.log(" reverse alphabetical order "   +[...favouritplaces].sort().reverse()+"\n");

console.log("original order "   +favouritplaces+"\n");

console.log("reverse the order of list "   +favouritplaces.sort().reverse()+"\n");

console.log("reverse the order of list "   +favouritplaces.reverse()+"\n");

console.log("alphabetical order "   +favouritplaces.sort()+"\n");

console.log("alphabetical order "   +favouritplaces.sort().reverse()+"\n");
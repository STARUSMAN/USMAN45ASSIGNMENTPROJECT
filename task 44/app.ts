function make_Sandwich(...items : string[])
{
    console.log("\nMaking a sandwich with a following items: \n");

    items.forEach(singelItem => console.log(singelItem));

    console.log("NOW ENJOY SANDWICH\N");
}
make_Sandwich("chicken","cheez","mayo","egg");

make_Sandwich("chicken","cheez","mayo",);

make_Sandwich("chicken","cheez","mayo","egg","tomato", "butter");

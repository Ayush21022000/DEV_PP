console.log("Hello World Good Evening !!");


//Use Of Let Keyword
// let a=10;
// console.log(a);
// if(true){
//     a=20;
//     console.log(a);
// }
// console.log(a);


let obj = {
    "Full Name":"Steve Rogers",
    place:"Queens",
    movies:["captain america" , "winter soldier" , {
        bestie : "bucky",
        nickname:"wintersoldier",
        partner : "falcon",
        weaknes : ["brainwash"]
    }]
}


console.log(obj.movies[2].weaknes[0].substring(1,5))
console.log(obj.movies[2].weaknes[0].substring(5,9))

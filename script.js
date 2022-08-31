 
 
 let namey = prompt("Welcome to GC mini golf! What is your name?");
 let numbHoles = prompt("Hi, " + namey +" ! Would you like to play 3 or 6 holes?");
 let h = parseInt(numbHoles);
 let total = 0;


 for (let i = 0; i < h; i++) {
    let numbPutts = parseInt(prompt("How many putts for hole " + (i + 1))); 
    total += numbPutts;
}

let par = 3 * h; 


if (total === par) {
    parseInt(console.log("Good game, " + namey + ". Your total par was: 0."));
}
else if (total < par) {
    parseInt(console.log("Great job, " + namey + "! Your total par was: -" + (par - total) + "."));
}
else if (total > par){
    parseInt(console.log("Nice try, " + namey + ". Your total par was: +" + (total - par) + "."));
}

 
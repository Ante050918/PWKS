/* Potrebno je omogućiti korisniku da unese broj prema želji (prompt). 
Kreirati uvjetnu struturu if-else if-else koja će ispitati da li je broj koji je korisnik upisao 0, odnosno ako nije, 
potrebno je ispitati je li uneseni broj paran ili neparan. Nadalje je potrebno definirati istu takvu strukturu korištenjem 
ternarnog operatora ?. Ispisati pripadne rezultate korištenjem console.log(). */

let x = prompt("Enter the number: ");
let num = parseInt(x);

num == 0
  ? "Entered number is zero."
  : num % 2 == 0
  ? "Entered number is even."
  : "a je veći od 10";

if (num == 0) console.log("Entered number is zero.");
else if (num % 2 == 0) console.log("Entered number is even.");
else console.log("Entered number is odd.");

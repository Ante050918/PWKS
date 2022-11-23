//1.zadatak-spremanje json file-a u varijablu
const a = require("./countries.json")


//2.zadatak-Napisati funkciju koja vraća niz stringova u kojima su samo imena država (name.common).
// Koristiti .map funkciju i arrow funkcije.
const country = a.map(e => e.name.common);
console.log(country) 

//3.zadatak-Napisati funkciju koja vraća sve države iz europe. Koristiti .filter funkciju i arrow funkcije.
let e_country = a.filter(e => e.region ==="Europe")
e_country = e_country.map(e => e.name.common)
console.log("e_country",e_country) 

//4.zadatak-Napisati funkciju koja vraća ukupnu površinu svih država koje su u Europi. Koristiti .reduce funkciju i arrow funkcije.
let p_country = a.filter(e => e.region ==="Europe")
p_country = p_country.map(e => e.area)
p_country = p_country.reduce((a, b) => a + b)
console.log(p_country) 

//5.zadatak-Napisati funkciju koja vraća državu čiji se glavni grad zove Pyongyang. Ukoliko takva država
// ne postoji vratiti null. Koristiti .find funkciju i arrow funkcije.
let city_country = a.find(e => e.capital =="Pyongyang") 
if(city_country)
  console.log (a.find(e => e.capital =="Pyongyang").name.common)
else
  console.log(null)

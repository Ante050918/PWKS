function ispisiBrojeve(min, max) {
  let temp = min;
  setTimeout(function ispisi() {
    console.log(temp);
    if (temp < 1000) {
      setTimeout(ispisi, 1000);
    }
    if (temp >= 1000 && temp < max) {
      setTimeout(ispisi, 2000);
    }
    temp += 100;
  }, 2000);
}

ispisiBrojeve(500, 1500);

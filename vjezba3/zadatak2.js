let niz = [10, -15, 18, 17, 26, -99, 33, 55, 99, 41];

function pozitivan(broj) {
  if (broj > 0) return true;
  else return false;
}

function djeljiv(broj1, num) {
  if (broj1 % num == 0) return true;
  else return false;
}

function glavna(niz, pozitivan, djeljiv, num) {
  for (let i = 0; i < niz.length; i++) {
    if (pozitivan(niz[i]) && djeljiv(niz[i], num)) console.log(niz[i]);
  }
}

glavna(niz, pozitivan, djeljiv, 3);

function unos() {
  let x = window.prompt("unesite svoj broj: ");
  let num = parseInt(x);
  return num;
}

function zbroji(broj1, broj2) {
  return broj1 + broj2;
}

function glavna(unos, br, zbroji) {
  let sum = 0;
  for (let i = 0; i < br; i++) {
    sum = zbroji(sum, unos());
  }
  return sum;
}

glavna(unos, 4, zbroji);

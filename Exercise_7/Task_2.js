const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function returnScore(br) {
  if (br <= 60) res = "NOT TO GOOD";
  else if (br >= 61 && br <= 300) res = "PRETTY GOOD";
  else if (br >= 301 && br <= 599) res = "VERY GOOD";
  else if (br >= 600) res = "THE BEST";
  return res;
}

function nameScore(string) {
  let br = 0;
  for (let i = 0; i < string.length; i++) {
    let lett = string.charAt(i);
    let a = scores[lett];
    br += a;
  }
  console.log(returnScore(br));
}
nameScore("MUBASHIR");

nameScore("YOU");

nameScore("MATT");

nameScore("PUBG");

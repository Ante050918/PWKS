function specialReverse(string, char) {
  let a = string.split(" ");
  let arr = [];
  let newstr = "";
  for (let i = 0; i < a.length; i++) {
    newstr;
    let b = a[i][0];
    if (b === char) {
      let e = a.indexOf(a[i]);
      let c = "";
      for (let j = a[i].length - 1; j >= 0; j--) {
        c += a[i][j];
      }
      c += "";
      arr.push(c);
      a.splice(e, 1, c);
    }
  }
  for (let i = 0; i < a.length; i++) {
    newstr += a[i] + " ";
  }
  console.log();
  console.log("String: ", newstr);
  console.log();
}

specialReverse("word searches are super fun", "s");

specialReverse("first man to walk on the moon", "m");

specialReverse("peter piper picked pickled peppers", "p");

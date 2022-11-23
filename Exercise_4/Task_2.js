/* let ispisi = (naziv) => (bodovi) => (ukupno) =>
  alert(
    "iz kolegija: " +
      naziv +
      " ostvarili ste " +
      ((bodovi / ukupno) * 100).toFixed(2)
  );

ispisi("MUP/PWKS")(25)(35);
 */

function ispisi(naziv) {
  return function (bodovi) {
    return function (ukupno) {
      alert(
        "iz kolegija: " +
          naziv +
          " ostvarili ste " +
          ((bodovi / ukupno) * 100).toFixed(2)
      );
    };
  };
}

ispisi("MUP/PWKS")(25)(35);

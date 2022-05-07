function suma(...args) {
  if (args.length < 2) {
    return "Nema dovoljno parametara!";
  } else {
    return args[0] + args[args.length - 1];
  }
}
console.log(suma());

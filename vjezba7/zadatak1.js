function getDay(string) {
  const d = new Date(string);

  switch (d.getDay()) {
    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;
  }
  console.log(day);
}

getDay("12/07/2016");

getDay("09/04/2016");

getDay("12/08/2011");
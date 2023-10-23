function digitize(number) {
  return String(number)
    .split("")
    .map((m) => Number(m))
    .reverse();
}

console.log(digitize(17823));

function staircase(n) {
  let value = "";
  for (let x = 1; x <= n; x++) {
    for (let y = 0; y < n - x; y++) {
      value += " ";
    }
    for (let z = 0; z < x; z++) {
      value += "#";
    }
    if (x < n) {
      value += "\n";
    }
  }
  console.log(value);
}

let arrr = 6;
staircase(arrr);

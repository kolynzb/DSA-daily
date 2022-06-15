function simpleArraySum(ar) {
  let sum = 0;
  ar.forEach((elem) => {
    sum += elem;
  });
  return sum;
}

arrayValue = [1, 2, 3, 4, 10, 11];
simpleArraySum(arrayValue);

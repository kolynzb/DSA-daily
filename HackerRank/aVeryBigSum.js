function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  console.log(sum);
}
let values = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
aVeryBigSum(values);

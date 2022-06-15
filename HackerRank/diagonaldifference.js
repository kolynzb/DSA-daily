let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const diagonalDifference = (arr) => {
  let majDiagonal = 0;
  let minorDiagonal = 0;
  arr.forEach((el, i) => {
    majDiagonal += el[i];
  });
  arr.reverse().forEach((el, i) => {
    minorDiagonal += el[i];
  });

  return Math.abs(majDiagonal - minorDiagonal);
};
console.log(diagonalDifference(arr));

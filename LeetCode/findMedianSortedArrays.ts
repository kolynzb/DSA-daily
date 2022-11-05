function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  //   Join array and sort it
  const newArr = nums1.concat(nums2).sort((a, b) => a - b);
  console.log(newArr);
  if (newArr.length % 2 == 0) {
    return (
      (newArr[newArr.length / 2 - 1] + newArr[newArr.length / 2 + 1 - 1]) / 2
    );
  } else {
    return newArr[(newArr.length - 1) / 2 + 1 - 1];
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]));

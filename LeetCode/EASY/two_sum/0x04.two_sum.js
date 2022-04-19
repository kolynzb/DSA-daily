
  var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let a = 1; a < nums.length; a++) {
        var sum = nums[i] + nums[a];
        if (i !== a && sum === target) return [i, a];
      }
    }
  };


var nums = [3, 2, 4];
var target = 5;

const result = twoSum(nums, target);

console.log(result);

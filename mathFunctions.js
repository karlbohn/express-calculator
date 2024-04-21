function freqCounter(arr) {
    return arr.reduce(function(accumulator, next) {
        accumulator[next] = (accumulator[next] || 0) + 1;
      return accumulator;
    }, {});
  }

function calcMean(nums){
    if (nums.length === 0) return 0;
    return nums.reduce(function(accumulator, current){
        return accumulator + current;
    }) / nums.length;
}

function calcMode(nums){
    let freqCounter = freqCounter(nums);

    let count = 0;
    let topCount;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            topCount = key;
            count = freqCounter[key];
        }
    }

    return +topCount;
}

function calcMedian(nums){
    nums.sort((a, b) => a - b);
    let midIdx = Math.floor(nums.length/2);
    let median;

    if (nums.length % 2 === 0){
        median = (nums[midIdx] + nums[midIdx+1]) / 2;
    } else {
        median = nums[midIdx];
    }
    return median
}

function checkNums(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let convertNum = Number(arr[i]);
  
      if (Number.isNaN(convertNum)) {
        return new Error(
          `The value '${arr[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(convertNum);
    }
    return result;
  }

  module.exports = {
    freqCounter,
    calcMean,
    calcMedian,
    calcMode,
    checkNums
  };
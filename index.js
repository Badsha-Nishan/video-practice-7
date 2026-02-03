// Practice 1
// function getMax(num1, num2, num3 = 0) {
//   if (num1 > num2 && num1 > num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else return num3;
// }

// const max = getMax(73, 95, 20);
// const ultimateMax = getMax(max, 70);
// console.log(max);
// console.log(ultimateMax);

// Practice 2

function max(numbers) {
  let output = numbers[0];
  for (const num of numbers) {
    if (num > output) {
      output = num;
    }
  }
  return output;
}

const heights = [66, 68, 58, 60, 78];
const getMax = max(heights);
console.log(getMax);

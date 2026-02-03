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

// function max(numbers) {
//   let output = numbers[0];
//   for (const num of numbers) {
//     if (num > output) {
//       output = num;
//     }
//   }
//   return output;
// }

// const heights = [66, 68, 58, 60, 78];
// const getMax = max(heights);
// console.log(getMax);

// Practice 3

/**
 * chair ---> 3 cft
 * table ---> 10 cft
 * bed ---> 50 cft
 */

// function woodQuantity(chair, table, bed) {
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;

//   const totalChairWood = perChairWood * chair;
//   const totalTableWood = perTableWood * table;
//   const totalBedWood = perBedWood * bed;
//   const output = totalChairWood + totalTableWood + totalBedWood;
//   return output;
// }

// const chair = 1;
// const table = 1;
// const bed = 2;
// const totalWood = woodQuantity(chair, table, bed);
// console.log(totalWood);

// Practice 4

function minPrice(arr) {
  let min = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const prices = [20000, 25000, 30000, 18000, 35000, 76000];
const result = minPrice(prices);
console.log(result);

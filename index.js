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

// function minPrice(arr) {
//   let min = arr[0];
//   for (const num of arr) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// const prices = [20000, 25000, 30000, 18000, 35000, 76000];
// const result = minPrice(prices);
// console.log(result);

// Practice 5

// const mobiles = [
//   { name: "Sumsung", price: 20000, camera: "12mp", color: "black" },
//   { name: "Xaomi", price: 25000, camera: "12mp", color: "red" },
//   { name: "Oppo", price: 28000, camera: "12mp", color: "gray" },
//   { name: "Apple", price: 210000, camera: "120mp", color: "orange" },
//   { name: "Realme", price: 15000, camera: "12mp", color: "blue" },
//   { name: "HTC", price: 40000, camera: "12mp", color: "white" },
//   { name: "Nokia", price: 60000, camera: "12mp", color: "purple" },
// ];

// function getCheapestPhone(phones) {
//   let min = phones[0];
//   for (const phone of phones) {
//     if (phone.price < min.price) {
//       min = phone;
//     }
//   }
//   return min;
// }

// const cheapestPhone = getCheapestPhone(mobiles);
// console.log(cheapestPhone);

// Practice 6

const products = [
  { name: "shampoo", price: 300, quantity: 2 },
  { name: "chiruni", price: 100, quantity: 5 },
  { name: "shirt", price: 700, quantity: 1 },
  { name: "pant", price: 1200, quantity: 7 },
  { name: "sunglass", price: 800, quantity: 9 },
];

function getShoppingTotal(products) {
  let sum = 0;
  for (const val of products) {
    sum += val.price * val.quantity;
  }
  return sum;
}

const totalCost = getShoppingTotal(products);
console.log(totalCost);

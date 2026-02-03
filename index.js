function getMax(num1, num2, num3 = 0) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else return num3;
}

const max = getMax(73, 95, 20);
const ultimateMax = getMax(max, 70);
console.log(max);
console.log(ultimateMax);

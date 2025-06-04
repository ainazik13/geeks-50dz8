function checkEvenOdd(num) {
  return num % 2 === 0 ? "Четное" : "Нечетное";
}


function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}


function countVowels(str) {
  const vowels = "aeiouAEIOUауоыиэяюёеАУОЫИЭЯЮЁЕ";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}


function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}


console.log("Задача 1:");
console.log("6 -", checkEvenOdd(6)); //
console.log("9 -", checkEvenOdd(9)); //

console.log("\nЗадача 2:");
console.log("Факториал 5:", factorial(5)); //
console.log("Факториал 0:", factorial(0)); //

console.log("\nЗадача 3:");
console.log("Максимум в [1,5,3,9,2]:", findMax([1, 5, 3, 9, 2]));
console.log("Максимум в [-5,-1,-8]:", findMax([-5, -1, -8]));

console.log("\nЗадача 4:");
console.log("Гласные в 'hello':", countVowels("hello"));
console.log("Гласные в 'world':", countVowels("world"));

console.log("\nЗадача 5:");
console.log("Сумма [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));
console.log("Сумма [-1,-2,3]:", sumArray([-1, -2, 3]));
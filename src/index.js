module.exports = function toReadable(number) {
const wordsFromNumbers = {
0: "zero",
1: "one",
2: "two",
3: "three",
4: "four",
5: "five",
6: "six",
7: "seven",
8: "eight",
9: "nine",
10: "ten",
11: "eleven",
12: "twelve",
13: "thirteen",
14: "fourteen",
15: "fifteen",
16: "sixteen",
17: "seventeen",
18: "eighteen",
19: "nineteen",
20: "twenty",
30: "thirty",
40: "forty",
50: "fifty",
60: "sixty",
70: "seventy",
80: "eighty",
90: "ninety",
100: "one hundred",
}

if (number in wordsFromNumbers) return wordsFromNumbers[number];

const hundreds = Math.floor(number / 100);
const dozens = Math.floor(number % 100 / 10);
const digits = number % 100 % 10;

const hundredsInText = hundreds ? `${wordsFromNumbers[hundreds]} hundred ` : '';
if (!dozens && !digits) return hundredsInText.trim();

const dozensInText = dozens && dozens >= 2 ? `${wordsFromNumbers[dozens * 10]} ` : wordsFromNumbers[dozens * 10 + digits]

const digitsInText = wordsFromNumbers[digits]

return (hundredsInText + dozensInText + (dozens >= 2 && digits ? digitsInText : '')).trim(); 

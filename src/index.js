module.exports =
function toReadable(number) {
let map = new Map([
[0, "zero"],
[1, "one"],
[2, "two"],
[3, "three"],
[4, "four"],
[5, "five"],
[6, "six"],
[7, "seven"],
[8, "eight"],
[9, "nine"],
[10, "ten"],
[11, "eleven"],
[12, "twelve"],
[13, "thirteen"],
[14, "fourteen"],
[15, "fifteen"],
[16, "sixteen"],
[17, "seventeen"],
[18, "eighteen"],
[19, "nineteen"],
[20, "twenty"],
[30, "thirty"],
[40, "forty"],
[50, "fifty"],
[60, "sixty"],
[70, "seventy"],
[80, "eighty"],
[90, "ninety"],
[100, "one hundred"],
[200, "two hundred"],
[300, "three hundred"],
[400, "four hundred"],
[500, "five hundred"],
[600, "six hundred"],
[700, "seven hundred"],
[800, "eight hundred"],
[900, "nine hundred"],
]);

function recursion(number) {
if(map.has(number)) return map.get(number);

if (number<100) {
let prompt = Math.floor(number/10)*10;
number = number - prompt;
return map.get(prompt) + " " + recursion(number);
}

let prompthundreds = Math.floor(number/100)*100;
number = number - prompthundreds;
return map.get(prompthundreds) + " " + recursion(number);
}

return recursion(number);
} 

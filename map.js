var founders = new Map();

founders.set("facebook", "mark");
founders.set("google", "larry");

console.log(founders.size); // 2
console.log(founders.get("twitter")); // undefined
console.log(founders.has("google")); // false

for (var [key, value] of founders) {
console.log(key + " founded by " + value);
}
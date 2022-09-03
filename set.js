var mySet = new Set();

mySet.add(1);
mySet.add("Howdy");
mySet.add("foo");

console.log(mySet.has(1)); // true
mySet.delete("foo");
console.log(mySet.size); // 2
for (let item of mySet) console.log(item);
const sentence = "hello there from lighthouse labs";
let delay = 0;
const increment = 50

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay);
  delay += increment;

};

let delay2 = 50 * sentence.length;
setTimeout(() => {
  console.log("\n")
}, delay2)
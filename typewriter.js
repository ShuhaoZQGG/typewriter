const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => process.stdout.write(sentence[i]), 100 + 70 * i)
  };
  setTimeout(() => console.log('\n'), 100 + 70 * (sentence.length + 1));
};

typewriter(sentence);
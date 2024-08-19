let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
let excuse = [who, action, what, when];
let generatedWord = "";
window.onload = function excuseGenerator() {
  for (let i = 0; i < excuse.length; i++) {
    let randomNumber = Math.floor(Math.random() * excuse[i].length);
    for (let index = 0; index < 1; index++) {
      let element = excuse[i];
      generatedWord = generatedWord + " " + element[randomNumber];
    }
  }
  let p = document.getElementById("excuse");
  p.innerHTML = `${generatedWord}`;
  return generatedWord;
};

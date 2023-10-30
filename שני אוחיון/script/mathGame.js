const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let n1 = getRandomIntInclusive(1, 10);
let n2 = getRandomIntInclusive(1, 10);

const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mul = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;

let funk;

const operators = ["+", "-", "*", "/"];
const random = Math.floor(Math.random() * operators.length);
if (operators[random] == "+") {
  funk = add;
}
if (operators[random] == "-") {
  funk = sub;
}
if (operators[random] == "*") {
  funk = mul;
}
if (operators[random] == "/") {
  funk = div;
}

window.addEventListener("load", () => {
  let quest = (document.getElementById(
    "quest"
  ).innerText = `${n1} ${operators[random]} ${n2} = `);
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = document.getElementById("answer");

    const list = () => {
      let myLi = document.createElement("li");
      let myUl = document.getElementById("list");
      myUl.appendChild(myLi);
      myLi.innerText = quest + answer.value;
      myLi.style.fontSize = "1.5rem";
      myLi.style.listStyleType = "none";
      if (funk(n1, n2) == answer.value) {
        myUl.style.backgroundColor = "#03ff0359";
      } else {
        myUl.style.backgroundColor = "#ff000059";
      }
    };
    list();
    answer.value = " ";
    const random = Math.floor(Math.random() * operators.length);
  });
});

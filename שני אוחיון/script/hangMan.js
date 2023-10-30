let wordsArr = [
  "תפוח",
  "תפוז",
  "פומלה",
  "ענבים",
  "מנגו",
  "אגס",
  "אבטיח",
  "מלון",
  "רימון",
];
let selectedIndex;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const initWord = (numberOfCharacters, str = "") => {
  let div = document.getElementById("wordContainer");
  if (str == "") {
    for (let i = 0; i < numberOfCharacters; i++) {
      str += `
    <span
            class="text-decoration-underline font-monospace fw-bolder fs-2 p-2"
            >&nbsp;</span
          >
        `;
    }
  }

  div.innerHTML = str;
};

let imgArr = [
  "images/0.png",
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
  "images/8.png",
  "images/9.png",
  "images/10.png",
];

const nextImg = () => {
  let img = document.getElementById("mainImg");

  let i = 0;
  for (i = 0; i < imgArr.length; i++) {
    if (img.src.endsWith(imgArr[i])) {
      img.src = "../../../" + imgArr[i + 1];
      break;
    }
  }
};

const initGame = () => {
  selectedIndex = getRandomIntInclusive(0, wordsArr.length - 1);
  initWord(wordsArr[selectedIndex].length);
  let arr = wordsArr[selectedIndex].split("");
  let temp = arr.map(() => {
    return " _ ";
  });

  const ifEndGame = () => {
    let img = document.getElementById("mainImg");

    let isEndGame = false;
    if (temp.join("") == arr.join("")) {
      alert("you win");
      isEndGame = true;
    }
    if (img.src.endsWith("images/10.png")) {
      alert("you lose");
      isEndGame = true;
    }
    if (!isEndGame) {
      return;
    }

    btns.forEach((btn) => {
      if (!btn.onclick) {
        btn.disabled = true;
      }
    });
  };

  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    if (btn.onclick) {
      return;
    }
    btn.addEventListener("click", (e) => {
      const letter = e.target.innerText;
      let index = arr.indexOf(letter);
      if (index != -1) {
        temp[index] = letter;
        initWord(wordsArr[selectedIndex].length, temp.join(""));
      } else {
        nextImg();
      }
      ifEndGame();
    });
  });
  return selectedIndex;
};

window.addEventListener("load", () => {
  initGame();
});

let whoPlayNow;

const ifEndGame = () => {
  let whoWonTheGame;
  let cells = document.querySelectorAll("#gamerDiv > div");
  for (let i = 0; i <= 2; i++) {
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML != ""
    ) {
      whoWonTheGame = cells[i].innerHTML;
    }
  }
  for (let i = 0; i < 9; i += 3) {
    if (
      cells[i].innerHTML == cells[i + 1].innerHTML &&
      cells[i + 1].innerHTML == cells[i + 2].innerHTML &&
      cells[i].innerHTML != ""
    ) {
      whoWonTheGame = cells[i].innerHTML;
    }
  }
  let i = 0;
  if (
    cells[i].innerHTML == cells[i + 4].innerHTML &&
    cells[i + 4].innerHTML == cells[i + 8].innerHTML &&
    cells[i].innerHTML != ""
  ) {
    whoWonTheGame = cells[i].innerHTML;
  }
  i = 2;
  if (
    cells[i].innerHTML == cells[i + 2].innerHTML &&
    cells[i + 2].innerHTML == cells[i + 4].innerHTML &&
    cells[i].innerHTML != ""
  ) {
    whoWonTheGame = cells[i].innerHTML;
  }
  if (whoWonTheGame) {
    alert(`${whoWonTheGame} won the game`);
  } else {
    for (let cell of cells) {
      if (cell.innerHTML == "") {
        return;
      }
    }
    alert("no one won the game");
  }
};

const handleClickXO = (myE) => {
  if (myE.target.innerHTML != "") {
    return;
  }
  myE.target.innerHTML = whoPlayNow;
  whoPlayNow == "x" ? (whoPlayNow = "o") : (whoPlayNow = "x");
  ifEndGame();
};

const initPageLoad = () => {
  let cells = document.querySelectorAll("#gamerDiv > div");
  for (let myDiv of cells) {
    myDiv.addEventListener("click", handleClickXO);
  }
};

const newGame = () => {
  whoPlayNow = "x";
  let cells = document.querySelectorAll("#gamerDiv > div");
  for (let cell of cells) {
    cell.innerHTML = "";
  }
};

window.addEventListener("load", () => {
  initPageLoad();
  newGame();
  document.getElementById("playAgainBtn").addEventListener("click", () => {
    newGame();
  });
});

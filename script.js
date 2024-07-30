let s = document.getElementById("start");
let g = document.getElementById("game");

let list = document.querySelectorAll(".col");
let f = 0;

let player1 = [];
let player2 = [];

let n1 = document.getElementById("input-1");
let n2 = document.getElementById("input-2");

s.onclick = function () {
  if (g.style.display == "none") {
    if (n1.value === "" || n2.value === "") {
      alert("Enter player name");
    } else {
      g.style.display = "grid";
    }
  } else {
    g.style.display = "none";
  }
};

function checkWinner(playerMoves) {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  return winningCombinations.some((combination) =>
    combination.every((move) => playerMoves.includes(move))
  );
}

function dis(y) {
  if (list[y - 1].innerHTML === "X" || list[y - 1].innerHTML === "O") {
    list[y - 1].isContentEditable = false;
    return;
  }
  if (list[y - 1] !== "X" || list[y - 1] !== "O") {
    if (f % 2 === 0) {
      list[y - 1].innerHTML = "X";
      player1.push(y);
      list[y - 1].isContentEditable = false;
      f++;
    } else {
      list[y - 1].innerHTML = "O";
      player2.push(y);
      list[y - 1].isContentEditable = false;
      f++;
    }
  }

  if (f >= 5) {
    if (checkWinner(player1)) {
      document.getElementById("load").style.visibility = "visible";
      alert(`Player 1 wins: ${n1.value}`);
    } else if (checkWinner(player2)) {
      document.getElementById("load").style.visibility = "visible";
      alert(`Player 2 wins: ${n2.value}`);
    } else if (f === 9) {
      document.getElementById("load").style.visibility = "visible";
      alert("Game Draw");
    }
  }
}

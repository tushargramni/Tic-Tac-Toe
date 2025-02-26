let s = document.getElementById("start");
let g = document.getElementById("game");

let list = document.querySelectorAll(".col");
let f = 0;

let player1 = 0;
let player2 = 0;

let n1 = document.getElementById("input-1");
let n2 = document.getElementById("input-2");

s.onclick = function () {
  if (g.style.display == "none") {
    if (n1.value === null || n2.value === "") {
      alert("Enter player name");
    } else g.style.display = "grid";
  } else {
    g.style.display == "none";
  }
};

function sort_num(arr) {
  let myArr = String(arr)
    .split("")
    .map((arr) => {
      return Number(arr);
    });

  let temp;
  for (let i = 0; i < myArr.length - 1; i++) {
    for (let j = 0; j < myArr.length - 1 - i; j++) {
      if (myArr[j] > myArr[j + 1]) {
        temp = myArr[j];
        myArr[j] = myArr[j + 1];
        myArr[j + 1] = temp;
      }
    }
  }
  console.log(" sort num  : ", myArr);
  return myArr;
}

function checkWinner(p1, p2) {
  let player_1_result = sort_num(p1);
  let player_2_result = sort_num(p2);

  if (player_1_result.length >= 3 || player_2_result.length >= 3) {
    p_1 = player_2_result.join("");
    p_2 = player_1_result.join("");
    if (
      p_1.includes("123") ||
      p_1.includes("456") ||
      p_1.includes("789") ||
      p_1.includes("159") ||
      p_1.includes("357") ||
      p_1.includes("147") ||
      p_1.includes("258") ||
      p_1.includes("369")
    ) {
      return 1;
    } else if (
      p_2.includes("123") ||
      p_2.includes("456") ||
      p_2.includes("789") ||
      p_2.includes("159") ||
      p_2.includes("357") ||
      p_2.includes("147") ||
      p_2.includes("258") ||
      p_2.includes("369")
    ) {
      return 2;
    }
  }
}

function dis(y) {
  if (list[y - 1].innerHTML === "X" || list[y - 1].innerHTML === "O") {
    list[y - 1].isContentEditable = false;
    // console.log("area disabled", list[y - 1].innerHTML);
    return;
  }
  if (list[y - 1] !== "X" || list[y - 1] !== "O") {
    if (f % 2 == 1) {
      list[y - 1].innerHTML = "X";
      player1 = player1 * 10 + parseInt(y);
      list[y - 1].isContentEditable = false;
      f++;
    } else {
      list[y - 1].innerHTML = "O";
      player2 = player2 * 10 + parseInt(y);
      list[y - 1].isContentEditable = false;
      f++;
    }
  }

  if (f >= 6) {
    // console.log(" player 1  : ", player1, " player 2  : ", player2);
    if (checkWinner(player1, player2) === 1) {
      document.getElementById("load").style.visibility = "visible";
      alert(`Player 1 wins : ${n1.value}`);
    } else if (checkWinner(player1, player2) === 2) {
      document.getElementById("load").style.visibility = "visible";
      alert(`Player 2 wins : ${n2.value}`);
    } else if (f === 9) {
      document.getElementById("load").style.visibility = "visible";
      alert("Game Draw");
      document.getElementById("load").style.visibility = "visible";
    }
  }
}

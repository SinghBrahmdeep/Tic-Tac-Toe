let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let turn1 = 0;
let f = false;

const winningpattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]; 

const checkWinner = () => {
  for( let pattern of winningpattern){

      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText ;
      let pos3val = boxes[pattern[2]].innerText;

      if( pos1val != "" && pos2val != "" && pos3val != ""){
        f = true;
        if( pos1val == pos2val && pos2val == pos3val){
          console.log("winner" , pos1val);
          showWinner(pos1val);
        }
      }
  }
}

const resetGame = () => {
  turn0 = true;
  turn1 = 0 ;
  for( let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
  msgContainer.classList.add("hide");
}

const disableboxes = () => {
  for( let box of boxes){
    box.disabled = true;
  }
}

const showWinner =  (winner) => { 
  msg.innerText = `CONGARTULATIONS , WINNER IS ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
}

const checkDraw = () => {
  if (turn1 === "9"){
    msg.innerText = `GAME IS A DRAW!`;
    msgContainer.classList.remove("hide");
    disableboxes();
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    turn1 = turn1+1;
    if (turn0) {
      box.innerHTML = `<b>O</b>`;
      turn0 = false;
    } else {
      box.innerHTML = `<b>X</b>`;
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
    if (turn1 === 9 && msgContainer.classList.contains("hide")) {
      msg.innerText = `DRAW, NO WINNER`;
      msgContainer.classList.remove("hide");
      disableboxes();
    }
  })
})

reset.addEventListener("click" , resetGame);
newGame.addEventListener("click" , resetGame);
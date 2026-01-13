let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const Message = document.querySelector("#msg");
const user_Score = document.querySelector("#user-score");
const com_Score = document.querySelector("#computer-score");


const genComputerChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
const randIdx =  Math.floor(Math.random()*3);
return options[randIdx];
}
const drawGame=()=>{
  console.log("Game Was Draw. Play Again");
  Message.innerText = "Game Draw, Play Again!";
  Message.style.backgroundColor = "purple";
  // Message.style.textColor = "Brown";
  // Find the correct syntaxt to change the text color and apply here.
}
const showWinner=(userWin, userChoice, compChoice)=>{
  if(userWin){
    userScore++
    user_Score.innerText = userScore;

console.log("You Win");
Message.innerText = `You Win! ${userChoice} beats ${compChoice}`;
Message.style.backgroundColor = "green";
}else{
  comScore++
  com_Score.innerText = comScore;
  console.log("You Lose");
  Message.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
  Message.style.backgroundColor = "Red";
}}

const playGame=(userChoice)=>{
  console.log("User Choice is ", userChoice);
  const compChoice = genComputerChoice();
  console.log("Comp Choice is ", compChoice);

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice ===  "Rock"){
      userWin = compChoice === "Paper"? false: true;
    }else if( userChoice === "Paper") {
      userWin = compChoice ==="Scissors" ? false: true;
    }else{
      userWin = compChoice === "rock"? false : true ;
    }
    showWinner(userWin, userChoice, compChoice)
  }
 
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceID = choice.getAttribute("id");
    playGame(choiceID);
  });
});

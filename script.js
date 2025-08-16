// 1)-initialize scores -0
let userScore =0;
let compScore= 0;

const msg = document.querySelector("#msg");

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

//4) show results
const showWinner = (userwin, userChoice, compchoice) => {
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.background = "green";
    }else {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `You Lost! ${compchoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

//3) get random (generating it) computer choice 
const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}

//4) getting userchoice & compchoice - designing game logic
const playgame = (userChoice) => {
    const compchoice = genCompchoice();
    console.log("comp choice = ", compchoice);
    
    if(userChoice === compchoice)
    {
        msg.innerText = "Game Draw! Play Again";
        msg.style.background = "#081b31";
    }
    else {
        let userwin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userwin = compchoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userwin = compchoice === "scissors" ? false : true;
        }else {
            //rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compchoice);
    }
}


//2) getting user choice by clicking on it & storing it in userChoice 
const allchoices = document.querySelectorAll(".choice");
allchoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("user choice = ",userChoice);
        playgame(userChoice);
    })
});
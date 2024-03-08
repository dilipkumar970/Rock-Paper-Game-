let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorein=document.querySelector("#user-score");
const compScorein=document.querySelector("#comp-score");


const compChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.style.backgroundColor = "#081b31"; 
    msg.innerText = " Game is Draw . Play again .";
};


const playGame = (userChoice) => {
    console.log("userchoice = ", userChoice);
    const autoChoice = compChoice();
    console.log("computer choice = ", autoChoice);

    if(userChoice == autoChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice=== "rock "){
            userWin=autoChoice === "paper"? false:true ;
        }else if(userChoice=== "paper "){
            userWin=autoChoice === "scissor"? false:true ;
        }  else {
            userWin=autoChoice === "rock"? false:true ;
        }
        shoeWin (userWin , userChoice,autoChoice);
    }
};

const shoeWin = (userWin , userChoice , autoChoice) => {
    if(userWin){
        userScore++ ;
        userScorein.innerText = userScore;
        msg.innerText = `Congralations your ${userChoice} beats computer ${autoChoice} !! `;
        msg.style.backgroundColor= "green" ;
    } else {
        compScore++;
        compScorein.innerText=compScore;
        msg.innerText = `Computer choice ${autoChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red" ;
    }
}


choices.forEach(choice => {

    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});
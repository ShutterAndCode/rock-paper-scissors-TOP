let humanChoice="";

let computerChoice="";

console.log(computerChoice)

function resetButtons(){
    let buttonArray=[rock,paper,scissors];
    buttonArray.forEach((button) => {
        button.style.backgroundColor="white";
        button.style.color="black";
        button.style.fontSize="smaller";
    })
 
    
}
function highlightAndUpdate(button){
    button.style.backgroundColor="yellow";
    button.style.color="red";
    button.style.fontSize="larger";
    //trimmed so that spaces dont interfere in comparison of strings.
    //same for lowercase
    humanChoice=button.textContent.trim().toLowerCase();
}



const rock=document.querySelector("#btn1");
rock.addEventListener("click",()=>{
    resetButtons();

    highlightAndUpdate(rock);
    console.log(humanChoice);
})


const paper=document.querySelector("#btn2");
paper.addEventListener("click",()=>{
    resetButtons();

    highlightAndUpdate(paper);
    console.log(humanChoice);
})


const scissors=document.querySelector("#btn3");
scissors.addEventListener("click",()=>{
    resetButtons();
    
    highlightAndUpdate(scissors)
    console.log(humanChoice);

})


const playRoundButton=document.querySelector("#playGame");
playRoundButton.addEventListener("click",()=>{
    playRoundButton.style.backgroundColor="red";
    playRoundButton.style.color="yellow";
    playRoundButton.style.fontSize="larger";
})


const reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    resetButtons()
    playRoundButton.style.backgroundColor="white";
    playRoundButton.style.color="black";
    playRoundButton.style.fontSize="smaller";
    computerScore=0;
    humanScore=0;
    humanChoice="";
    computerChoice="";
})

function getComputerChoice(){
    let computerChoice="";
    let val=(Math.random());
   if (val>=0 && val <=0.33){
    computerChoice="rock";
    return computerChoice;
   }
   else if (val>0.33 && val<=0.66){
    computerChoice="paper";

    return computerChoice;
   }
   else {
    computerChoice="scissors"
    
    return computerChoice;
    }
}

let humanScore=0;
let computerScore=0;
//function to play one round
function playRound(computerChoice,humanChoice){
    if (computerChoice===humanChoice){
        roundResult.textContent=`Same Choice, Round tied`;
        console.log('Same Choice, Round tied');
    }
    else if (computerChoice==="rock" && humanChoice==="scissors"){
        roundResult.textContent=`rock beats scissors, Computer wins`;
        console.log("rock beats scissors,Computer wins");
        computerScore++;
    }
    else if (computerChoice==="paper" && humanChoice==="rock"){
        roundResult.textContent=`paper beats rock, Computer wins`;
        console.log("paper beats rock,Computer wins");
        computerScore++;
    }
    else if (computerChoice==="scissors" && humanChoice==="paper"){
        roundResult.textContent=`scissors beats paper, Computer wins`;
        console.log("scissors beats paper,Computer wins");
        computerScore++;
    }
     else if (humanChoice==="rock" && computerChoice==="scissors"){
        roundResult.textContent=`rock beats scissors, Human wins`;
        console.log("rock beats scissors,Human wins");
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        roundResult.textContent=`paper beats rock, Human wins`;
        console.log("paper beats rock,Human wins");
        humanScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        roundResult.textContent=`scissors beats paper, Human wins`;
        console.log("scissors beats paper,Human wins");
        humanScore++;
    }
}
playRoundButton.addEventListener("click",()=>{
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    playRound(computerChoice,humanChoice);
    computerChoiceDisplay.textContent=`The Computer choice was: ${computerChoice}`;
    console.log(`The human score is: ${humanScore}`);
    console.log(`The computer score is: ${computerScore}`)
    scoreCard.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

    if(humanScore===5){
    winner.textContent= `Congratulations, Human is the final winner`;
    resetButtons();
    }
    else if(computerScore===5){
    winner.textContent=`Alas, Computer is the final winner`;
    resetButtons
    }
});
const results=document.querySelector("#results");

const computerChoiceDisplay=document.createElement("h3");
results.appendChild(computerChoiceDisplay);

const roundResult=document.createElement("h2");
results.appendChild(roundResult);

const scoreCard=document.createElement("h2");
results.appendChild(scoreCard);

const winner=document.createElement("h2");
results.appendChild(winner);

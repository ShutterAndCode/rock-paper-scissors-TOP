//welcome msg

console.log("hello there");
console.log("Welcome to my rock paper scissors game, let's go");

//get name
let name=window.prompt("Enter Your Name");

//getting computer choice
function getComputerChoice(){
    let val=(Math.random());
    let computerChoice="";
    //console.log(val);
   if (val>=0 && val <=0.3){
    computerChoice="rock";
    //console.log(computerChoice)
    return computerChoice;
   }
   else if (val>0.3 && val<=0.6){
    computerChoice="paper";
    //console.log(computerChoice);
    return computerChoice;
   }
   else {
    computerChoice="scissors"
    //console.log(computerChoice);
    return computerChoice;
    }
}

//getting human choice
function getHumanChoice(){
    let humanChoice=String(window.prompt("Enter Your Choice"));
    humanChoice=humanChoice.toLowerCase();
    return humanChoice;
}

//settting score variables
let humanScore=0;
let computerScore=0;

//function to play one round
function playRound(computerChoice,humanChoice){
    if (computerChoice===humanChoice){
        console.log('Same,Round tied');
    }
    else if (computerChoice==="rock" && humanChoice==="scissors"){
        console.log("rock beats scissors,Computer wins");
        computerScore++;
    }
    else if (computerChoice==="paper" && humanChoice==="rock"){
        console.log("paper beats rock,Computer wins");
        computerScore++;
    }
    else if (computerChoice==="scissors" && humanChoice==="paper"){
        console.log("scissors beats paper,Computer wins");
        computerScore++;
    }
     else if (humanChoice==="rock" && computerChoice==="scissors"){
        console.log("rock beats scissors,Human wins");
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        console.log("paper beats rock,Human wins");
        humanScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        console.log("scissors beats paper,Human wins");
        humanScore++;
    }
}

//looping for 5 rounds
for (let i=1;i<=5;i++){

    //get and log human choice
    let humanChoice=getHumanChoice();
    console.log("Human Choice is:",humanChoice)
    
  
    //get and log computer choice
    let computerChoice=getComputerChoice();
    console.log("computer choice was:",computerChoice);
    

    //play one round
    playRound(computerChoice,humanChoice);
   
    //log scores
    console.log("The Computer Score is :",computerScore)
    
    console.log("The Human Score is :",humanScore)


    //end of loop
}

    //log final scores
    console.log("The final Computer Score is :",computerScore)
    
    console.log("The final Human Score is :",humanScore)


    //find winner
    if (humanScore===computerScore){
        console.log("game tied");
    }
    else if (computerScore>humanScore){
        console.log("Computer wins");
    }
    else {
        console.log(`${name} wins`);
    }
    
    //end message
    console.log("End of Game, Thanks for Playing --Vitaayusit")
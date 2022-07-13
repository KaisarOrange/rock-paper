let playerScore = 0;
let computerScore = 0;
let winner = "";


function playRound(playerSelection, computerSelection) {
   

    if (playerSelection === computerSelection){
      winner = "tie";
    }
    if( playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock" || 
        playerSelection === "paper" && computerSelection === "scissors" 
    ){
        computerScore++;
        winner = "computer";
    }
    if( playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock"
    ){
        playerScore++;
        winner = "player";
       
    }
}
function computerPlay(){
    const selection = ["paper", "rock","scissors"];
    let compChoice =  selection[Math.floor(Math.random() * 3)];
    return compChoice;
    
  }
function game(playerSelection){        
    
   
    if(playerScore == 5 || computerScore == 5){
        playerScore = 0;
        computerScore = 0;  
        return;
    }
    
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    choice(playerSelection,computerSelection);
    console.log(playerScore, computerScore);
    $("div.scorePlayer").html(playerScore);
    $("div.scoreComputer").html(computerScore);
    
}
function choice(playerSelection, computerSelection){
        
        if(winner == "player"){

        $(".playerChoice").css("color","green");
        $(".computerChoice").css("color","black");

        }else{

        $(".playerChoice").css("color","black");
        $(".computerChoice").css("color","green");
        }
        if(winner == "tie"){

            $(".playerChoice").css("color","black");
            $(".computerChoice").css("color","black");
            }
        winner ="";
    switch(playerSelection){
        case "rock":

        $(".playerChoice").html("👊");
        break;

        case "paper":
        $(".playerChoice").html("✋");
        break;

        case "scissors":
        $(".playerChoice").html("✌️");
        break;
    }
    switch(computerSelection){
        case "rock":

        $(".computerChoice").html("👊");
        break;

        case "paper":
        $(".computerChoice").html("✋");
        break;

        case "scissors":
        $(".computerChoice").html("✌️");
        break;
    }
}

 
$(".btn.paper").click(function(){
    game("paper");
    
});
$(".btn.rock").click(function(){
    game("rock");
});
$(".btn.scissors").click(function(){
    game("scissors");
});

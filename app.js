let PlayerScore = 0;
let ComputerScore = 0;

let ComputerScoreDoc = document.getElementById("computer-score");
let PlayerScoreDoc = document.getElementById("player-score");
let winStatus = document.getElementById("win-status");
let detailStatus = document.getElementById("detail-status");
const buttons = document.querySelectorAll('.button');
const tryAgain = document.querySelector('.try-again');

const choice = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice(){
    let random = (Math.floor(Math.random() * choice.length));
    return choice[random] ;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return ['Tie', playerSelection+" tie with "+computerSelection] 
    }
    else if((playerSelection == "Rock" && computerSelection == "Paper") || 
            (playerSelection == "Paper" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Rock")){

        ComputerScore+=1;
        return['You win', playerSelection+" beats "+computerSelection] 

    }
    else if((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Paper" && computerSelection == "Rock") || 
            (playerSelection == "Scissors" && computerSelection == "Paper")){

        PlayerScore+=1;

        return ['Computer win', playerSelection+" beat "+computerSelection ]
    }
}

function TryAgain(){
    PlayerScore=0;
    ComputerScore=0;

    PlayerScoreDoc.innerHTML = PlayerScore;
    ComputerScoreDoc.innerHTML = ComputerScore;

    winStatus.innerHTML = "Status";
    detailStatus.innerHTML= "Detail Status";
}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        for(let i = 0; i < buttons.length; i++){
            if(buttons[i]==button){
                const playerSelection = choice[i];
                const computerSelection = getComputerChoice();

                let value = playRound(playerSelection, computerSelection);

                PlayerScoreDoc.innerHTML = PlayerScore;
                ComputerScoreDoc.innerHTML = ComputerScore;
                winStatus.innerHTML = value[0];
                detailStatus.innerHTML= value[1];
                
                if(PlayerScore==5||ComputerScore==5){

                }
            }
        }
    })
});

tryAgain.addEventListener("click", () => {
    TryAgain();
})
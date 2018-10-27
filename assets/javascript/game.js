

$(document).ready(function() {

//Initialize variables
wonGames = 0;
lostGames = 0;
gameReset();
console.log(targetScore, playerScore);
$("#message").text("Keep Going - Press a button");

//if (playerScore < targetScore) {
$(".btn").click(function() {
    console.log("You clicked", $(this).val())
    valueIndex = $(this).val();
    $("#message").text("Keep Going - Press a button");

    if (valueIndex === "6") {
        $("#message").text("Thank you for playing");
        document.write("Thank you for playing. Please refresh browser to start again.");
    }
    else if (valueIndex === "5") {
        gameReset();
        $("#message").text("Game refreshed - Press any button to restart game. New target score is " + targetScore);
        console.log("Game Refreshed");
        $("#playerScore").html("0");
    
    }
    else {
    updatePlayerScore();
    }
//});
//targetScore=randomNumber(19,120);
//console.log("Total Score " + targetScore);
//$("#targetScore").html(targetScore);
//for (i=0; i<4; i++) {
//    valueBtn[i] = randomNumber(1,12);
//    console.log("Button value " + i + " is " + valueBtn[i]);
//}
//}

if (playerScore === targetScore) {
    console.log("You Win");
    wonGames++;
    $("#wonGames").html(wonGames);
    gameReset();
    $("#message").text("Winner - Press any button to restart game. New target score is " + targetScore);

    $("#playerScore").html(playerScore);
}
if (playerScore > targetScore) {
    console.log("You Lose");
 
    lostGames++;
    $("#lostGames").text(lostGames);
    gameReset();
    $("#message").text("You Lose - Press any button to restart game. New target score is " + targetScore);
    $("#playerScore").html(playerScore);
}

});


//Function definitions
//Initialize game variables  
function gameReset() {
    targetScore = 0;
    playerScore = 0;
    valueIndex = 0;
    valueBtn = [];
    gameOver = false;
    targetScore=randomNumber(19,120);
    console.log("Total Score " + targetScore);
    $("#targetScore").html(targetScore);
    for (i=0; i<4; i++) {
        valueBtn[i] = randomNumber(1,12);
        console.log("Button value " + i + " is " + valueBtn[i]);
    }
    //$("#message").text("Keep Going - Press a button");
}
//Random number generator with floor and ceiling values
function randomNumber(low, high) {
    return(low+Math.floor(Math.random()*(high-low+1)))
}

function updatePlayerScore(){
    playerScore = playerScore + valueBtn[valueIndex];
    $("#playerScore").html(playerScore);
}
});

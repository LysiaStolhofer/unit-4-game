//random selected number should be between 19-120
$(document).ready(function() {
    var ranNumGame = Math.floor(Math.random()*101+19)

//appending the random created number to the randomNum id in the html document
$('#randomNum').text(ranNumGame);

//Giving each gem a random number, the number has to be between 1-12
var num1 = Math.floor(Math.random()*11+1)
var num2 = Math.floor(Math.random()*11+1)
var num3 = Math.floor(Math.random()*11+1)
var num4 = Math.floor(Math.random()*11+1)

//declaring variables
var userTotal = 0;
var wins = 0;
var losses = 0; 

//reset the game to new start
$('#numWins').text(wins);
$('#numLoss').text(losses);

function reset() {
    ranNumGame=Math.floor(Math.random()*101+19);
    console.log(ranNumGame)
    $('#randomNum').text(ranNumGame);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    userTotal = 0; 
    $('#finalTotal').text(userTotal);
}

//add wins to userTotal
function congrats() {
    alert("You won!");
    wins++;
    $('#numWins').text(wins);
    reset();
}

//add losses to userTotal
function booh() {
    alert("You lose!");
    losses++;
    $('#numLoss').text(losses);
    reset();
}

//click function for gems
$('#eins').on ('click', function() {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    
    //conditions for winning or loosing
    if (userTotal == ranNumGame) {
        congrats();
    }
    else if (userTotal > ranNumGame) {
        booh();
    }
})

$('#zwei').on ('click', function() {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    
    //conditions for winning or loosing
    if (userTotal == ranNumGame) {
        congrats();
    }
    else if (userTotal > ranNumGame) {
        booh();
    }
})

$('#drei').on ('click', function() {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    
    //conditions for winning or loosing
    if (userTotal == ranNumGame) {
        congrats();
    }
    else if (userTotal > ranNumGame) {
        booh();
    }
})

$('#vier').on ('click', function() {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    
    //conditions for winning or loosing
    if (userTotal == ranNumGame) {
        congrats();
    }
    else if (userTotal > ranNumGame) {
        booh();
    }
});

});
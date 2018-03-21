
$(document).ready(function () {

    //Determine random number user must match and printing it within well
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumb p").text(randomNumber)

    //Countr winns and losses and prinit it within well
    var wins = 0;
    var losses = 0;
    var sum = 0;

    //select random number for different gems

    var gemBlue = Math.floor(Math.random() * 11) + 1;
    var gemRed = Math.floor(Math.random() * 11) + 1;
    var saphire = Math.floor(Math.random() * 11) + 1;
    var diamond = Math.floor(Math.random() * 11) + 1;

    //Reset the game
    function reset() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        sum = 0;
        gemBlue = Math.floor(Math.random() * 11) + 1;
        gemRed = Math.floor(Math.random() * 11) + 1;
        saphire = Math.floor(Math.random() * 11) + 1;
        diamond = Math.floor(Math.random() * 11) + 1;
        $("#randomNumb p").text(randomNumber);
        $("#totalScore p").text(sum);
    }

    //Make Button reset and play again work

    $(".btn-group").on("click", "#play-again", function () {
        reset();
    }).on("click", "#reset", function () {
        reset();
        wins = 0;
        losses = 0;
        $("#gameResults #wins").text("Wins: " + wins);
        $("#gameResults #loss").text("Losses: " + losses);

    });
    

    //game logic

    function gameLogic() {
        if (sum === randomNumber) {
            alert("You Win!")
            wins++
            $("#gameResults #wins").text("Wins: " + wins)
        }
        else if (sum > randomNumber) {
            alert("You lose")
            losses++
            $("#gameResults #loss").text("Losses: " + losses)

        }
    }

    $(".gems").on("click", "#diamond", function () {
        sum = sum + diamond;
        $("#totalScore p").text(sum)
        gameLogic()
    }).on("click", "#redSaphire", function () {
        sum = sum + gemRed;
        $("#totalScore p").text(sum)
        gameLogic()
    }).on("click", "#saphire", function () {
        sum = sum + saphire;
        $("#totalScore p").text(sum)
        gameLogic()
    }).on("click", "#blueSaphire", function () {
        sum = sum + gemBlue;
        $("#totalScore p").text(sum)
        gameLogic()
    })




});

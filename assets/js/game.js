$(document).ready(function() {

    // when you hover over character well the well comes up so you can see all the charachters
    // $( ".well" ).hover(function() {
    //   $('#topMargin').css("margin-top", "-75px");
    // }, function() {
    //   // on mouseout, reset the background colour
    //   $('#topMargin').css("margin-top", "75px");
    // });
    //disable button on load
    $("#centerButton").prop("disabled", true);
    // rapper locks allow you to select the next rapper
    var rapperOneLocked = false;
    var rapperTwoLocked = false;
    // the next step after both rappers have been chosen to battle
    // no longer allows you to select any other opponents until a battle is completed
    var battlingInSession = true;
    // array filled with crowd reactions for every attack a rapper executes
    var reactions = ["Dope!", "Boomin!", "I Like That!", "We The Best!", "Another One!", "Major Key!", "Damn!", "Bars!", "Bring It!", "Fire!", "Go Hard!", "Not Bad"]
        // the paragrapgh where attack results are placed
    var centerParagraphText = "";
    // the text of the center button
    var centerButtonText = $("#centerButton").html();
    // the name of character clicked will be held in the variable and used within the character object
    var rapperOneName = "The Notorious B.I.G.";
    var rapperTwoName = "Tupac";
    // the id of the character clicked will be held in the variable and used within the character object
    var rapperOneId = "the-notorious-big";
    var rapperTwoId = "tupac";
    // Progressbar health points default
    // the values change when a new character is selected
    var rapperOneProgress = 100;
    var rapperTwoProgress = 100;
    // the attack values for each character
    var rapperOneAttack = 0;
    var rapperTwoAttack = 0;
    // the amount of times rapper one has won battle
    var rapperOneWins = 0;
    // when clicking an image do one of the following to select your rapper, opponent and start battling
    $('img').on({
        'click': function() {
            // variables hold the image src, rapper name, and progressbar information from the character you clicked on
            var src = ($(this).attr('src'))
            var name = ($(this).attr('alt'))
            var power = ($(this).attr('data-value'))
                // rapperOneId holds the id of the image clicked to be used in the object
            var id = ($(this).attr('id'))
                // if rapperOneLocked is not locked then the rapper you click on goes to rapperOneLocation
            if (!rapperOneLocked) {
                $("#centerButton").prop("disabled", false);
                // rapperOneImage class src and alt(name in div) is changed to the src of the image clicked
                $(".rapperOneImage").attr('src', src);
                $(".rapperOneImage").attr('alt', name);
                // rapperOneName class h2 is changed to the name of the image clicked
                $(".rapperOneName").html(name);
                // holds the alt value that holds character name of the image clicked to be used in the object
                rapperOneName = name;
                // holds the id value of the image clicked to be used in the object
                rapperOneId = id;
                // you must add rapperOneProgress to the class
                // rapperOneProgress class progressbar is changed to the progressbar value of the image clicked
                $(".rapperOneProgress").attr('style', "width:" + power + "%;");
                $(".rapperOneProgress").html(power + "%");
                // rapper one progressbar is set to the value given to selected character
                rapperOneProgress = power;
                // centerParagraph is changed to the following text when selecting your first rapper
                $(".centerParagraph").html("");
                $("#centerButton").html("Select Player 1");
                // if rapperTwoLocked is not locked then the rapper you click on goes to rapperTwoLocation
            } else if (!rapperTwoLocked) {
                // holds the alt value that holds character name of the image clicked to be used in the object
                rapperTwoName = name;
                // if character one is the same as character one  or character has been defeated then do this
                if (rapperOneName == rapperTwoName || power == "0") {
                    // button is set not available when selecting a defeated character
                    $("#mainHeader").html("Not Available");
                    $(".centerParagraph").html("");
                    $("#centerButton").html("");
                    // button is disabled
                    document.getElementById("centerButton").disabled = true;
                    // if character one is not the same as character two then do this
                } else if (rapperOneName != rapperTwoName) {
                    // button is set back to default when selecting an available character
                    $("#mainHeader").html("The Rappers Delight");
                    // centerParagraph is changed to the following text when selecting your opponent
                    $(".centerParagraph").html("");
                    $("#centerButton").html("Select Player 2");
                    // button is not disabled
                    document.getElementById("centerButton").disabled = false;
                    // rapperTwoImage class src and alt(name in div) is changed to the src of the image clicked
                    $(".rapperTwoImage").attr('src', src);
                    $(".rapperTwoImage").attr('alt', name);
                    // rapperTwoName class h2 is changed to the name of the image clicked
                    $(".rapperTwoName").html(name);
                    // holds the id value of the image clicked to be used in the object
                    rapperTwoId = id;
                    // rapperOneProgress class progressbar is changed to the progressbar value of the image clicked
                    $(".rapperTwoProgress").attr('style', "width:" + power + "%;");
                    $(".rapperTwoProgress").html(power + "%");
                    // rapper two progressbar is set to the value given to selected character
                    rapperTwoProgress = power
                }
            }
        }
    });
    // method changes the header reaction when the rappers battle
    function changeHeader() {
        // variable that holds the array length of reactions
        var arrayLength = reactions.length
            // index counter that randomly chooses index within the array lenght
        var indexCounter = Math.floor((Math.random() * arrayLength));
        // main header displays the randomly chosen value from the reactions array
        $("#mainHeader").html('"' + reactions[indexCounter] + '"');
    };
    // center button functions depending on conditional statement
    $('#centerButton').on({
        'click': function() {
            // if rapperOneLocked is not locked then lock the selection when button is pressed
            if (!rapperOneLocked) {
                // lock rapperOne by making it true
                rapperOneLocked = true;
                // centerParagraph is changed to the following text when selecting your opponent
                $(".centerParagraph").html("");
                $("#centerButton").html("Select Player 2");
                // if rapperTwoLocked is not locked then lock the selection when button is pressed
            } else if (!rapperTwoLocked) {
                if (rapperOneName != rapperTwoName) {
                    // if it's a different player from player one then display the correct header and select button
                    $("#mainHeader").html("The Rappers Delight");
                    $("#centerButton").html("Select");
                    $("#centerButton").prop("disabled", false);
                    // lock rapperTwoLocked by making it true
                    rapperTwoLocked = true;
                    // set the center paragraph text to notify you that your opponent is ready to battle
                    $(".centerParagraph").html("Press 'Battle' to start freestyling");
                    // set center button text to Battle option
                    $("#centerButton").html("Battle");
                    // if both rapper one and two are locked and battle is set to true then battle is enabled
                } else {
                    // if character is same as character one then alert not available
                    // button is set not available when selecting the same character
                    $("#mainHeader").html("Not Available");
                    $("#centerButton").html("");
                    $("#centerButton").prop("disabled", true);
                }
                // when battle button is pressed the following object methods are executed
            } else if (battlingInSession) {
                //object method changes the header to show a reaction
                changeHeader();
                //object method changes the progress bar of opponent to indicate the attack by player one
                rapperOneObject.attackOpponent();
                rapperTwoObject.attackOpponent();
                // paragraph is cleared first and then earch characters attack is displayed
                centerParagraphText = "";
                // variable holds the current attack results
                //rapperOneAttack and rapperTwoAttack values are creaetd globally and altered within each object to be accessed outside of the object
                centerParagraphText = (rapperOneName + " dropped " + rapperOneAttack + " bars <br>");
                centerParagraphText += (rapperTwoName + " dropped " + rapperTwoAttack + " bars");
                $(".centerParagraph").html(centerParagraphText);
                // player 2 wins
                // if character one has 0 or less health and character two's health is greater than chracters one's do this
                if (rapperOneProgress <= 0 && rapperTwoProgress > rapperOneProgress) {
                    // if rapperTwoProgress is 0 or less then set the progress label to 0
                    if (rapperTwoProgress <= 0) {
                        // the attack reduces the opponents progressbar
                        $(".rapperTwoProgress").attr('style', "width:" + 0 + "%;");
                        $(".rapperTwoProgress").html(" ");
                    }
                    $(".rapperOneName").html("DEFEATED");
                    // the attack reduces the opponents progressbar
                    $(".rapperOneProgress").attr('style', "width:" + 0 + "%;");
                    $(".rapperOneProgress").html(" ");
                    // after winning a battle the id element is selected and greyed out,animation is removed, progressbar is set to 0 and name is set to NOT AVAILABLE
                    rapperTwoObject.beatingOpponent();
                    // allow a new opponent to chosen when one is defeated by unlocking rapperTwoLocked
                    $(".centerParagraph").html("You've been defeated by " + rapperTwoName + ". Get back to the lab and come back when you're ready.");
                    $("#centerButton").html("Restart");
                    $('#centerButton').attr('onclick', 'window.location.reload()');
                    // removing it's id at restart diables it from executing any other event/functions that it may be triggering based on its id
                    $('#centerButton').attr('id', "");
                }
                if (rapperOneProgress >= 0 && rapperTwoProgress <= 0 && rapperOneProgress > rapperTwoProgress) {
                    $(".rapperTwoName").html("DEFEATED");
                    // the attack reduces the opponents progressbar
                    $(".rapperTwoProgress").attr('style', "width:" + 0 + "%;");
                    $(".rapperTwoProgress").html(" ");
                    // default the attack values for character 2
                    rapperTwoAttack = 0;
                    rapperTwoObject.attack = 0;
                    // after a win rapperOneWins is incremented
                    rapperOneWins++;
                    // if there is 1 win then do this
                    if (rapperOneWins == 1) {
                        // after a win you're given instructions to chose another opponent
                        $(".centerParagraph").html("You've defeated " + rapperOneWins + " MC! Choose your next opponent.");
                        // if there are multiple wins then do this
                    } else if (rapperOneWins == 3) {
                        $(".centerParagraph").html("You've defeated " + rapperOneWins + " MCs! Keep going hard! <br> Here's a 20 boost to get you through.");
                        // add 20 HP and indicate that with a visual increas in the progress bar
                        rapperOneProgress += 20;
                        $(".rapperOneProgress").attr('style', "width:" + rapperOneProgress + "%;");
                        $(".rapperOneProgress").html(rapperOneProgress + "%");
                    } else if (rapperOneWins == 6) {
                        $(".centerParagraph").html("You've defeated " + rapperOneWins + " MCs! <br> Here's a 30 boost, you earned it.");
                        // add 30 HP and indicate that with a visual increas in the progress bar
                        rapperOneProgress += 30;
                        $(".rapperOneProgress").attr('style', "width:" + rapperOneProgress + "%;");
                        $(".rapperOneProgress").html(rapperOneProgress + "%");
                    } else if (rapperOneWins == 7) {
                        $(".centerParagraph").html("");
                        // main header displays the winning statement
                        $("#mainHeader").html("YOU ARE THE HIP HOP DREAM. YOU ARE THE DEFINITION OF A REAL MC. YOU ARE A LEGEND OF RAP. AND YOU DID IT ALL WITH ONE MIC.");
                        // after you've defeated all the players set a restart button to try again
                        $("#centerButton").html("Restart");
                        $('#centerButton').attr('onclick', 'window.location.reload()');
                        $('#centerButton').attr('id', "");
                        // after winning a battle the id element is selected and greyed out,animation is removed, progressbar is set to 0 and name is set to NOT AVAILABLE
                        rapperOneObject.beatingOpponent();
                        // if you haven't defeated a selected number then just display the generic paragraph with exact wins
                    } else {
                        // after a win you're given instructions to chose another opponent
                        $(".centerParagraph").html("You've defeated " + rapperOneWins + " MCs! Choose your next opponent.");
                    }
                    // set center button text to empty and disabled so that user cannot select that character anymore
                    $("#centerButton").html("");
                    $("#centerButton").prop("disabled", true);
                    // after winning a battle the id element is selected and greyed out,animation is removed, progressbar is set to 0 and name is set to NOT AVAILABLE
                    rapperOneObject.beatingOpponent();
                    // allow a new opponent to chosen when one is defeated by unlocking rapperTwoLocked
                    rapperTwoLocked = false;
                    // if rapperOneProgress is 0 or less then set the progress label to 0
                    if (rapperOneProgress <= 0) {
                        // the attack reduces the opponents progressbar
                        $(".rapperOneProgress").attr('style', "width:" + 0 + "%;");
                        $(".rapperOneProgress").html("");
                        $(".centerParagraph").html("");
                        // main header display
                        $("#mainHeader").html("YOU DID A GREAT JOB, BUT RAN OUT OF GAS.");
                        // after you've defeated all the players set a restart button to try again
                        $("#centerButton").html("Restart");
                        $('#centerButton').attr('onclick', 'window.location.reload()');
                        // makes sure button is not disabled
                        $("#centerButton").prop("disabled", false);
                        // removing it's id at restart diables it from executing any other event/functions that it may be triggering based on its id
                        $('#centerButton').attr('id', "");
                        // after winning a battle the id element is selected and greyed out,animation is removed, progressbar is set to 0 and name is set to NOT AVAILABLE
                        rapperOneObject.beatingOpponent();
                    }
                }
                // if there is a tie
                if (rapperOneProgress <= 0 && rapperTwoProgress <= 0) {
                    $(".rapperOneProgress").attr('style', "width:" + 0 + "%;");
                    $(".rapperOneProgress").html("");
                    $(".rapperTwoProgress").attr('style', "width:" + 0 + "%;");
                    $(".rapperTwoProgress").html("");
                    $(".centerParagraph").html("");
                    // if both players go to 0 or below but player one is better
                    if (rapperOneProgress > rapperTwoProgress) {
                        // main header display
                        $("#mainHeader").html("YOU DID A GREAT JOB, BUT RAN OUT OF GAS.");
                        // after you've defeated all the players set a restart button to try again
                        $("#centerButton").html("Restart");
                        $('#centerButton').attr('onclick', 'window.location.reload()');
                        // removing it's id at restart diables it from executing any other event/functions that it may be triggering based on its id
                        $('#centerButton').attr('id', "");
                        // if both players go to 0 or below but player two is better
                    } else if (rapperTwoProgress > rapperOneProgress) {
                        // main header display
                        $(".centerParagraph").html("You've been defeated by " + rapperTwoName + ". Get back to the lab and come back when you're ready.");
                        $("#centerButton").html("Restart");
                        $('#centerButton').attr('onclick', 'window.location.reload()');
                        // removing it's id at restart diables it from executing any other event/functions that it may be triggering based on its id
                        $('#centerButton').attr('id', "");
                        // if both players are tied
                    } else if (rapperOneProgress === rapperTwoProgress) {
                        // main header display
                        $("#mainHeader").html("WE COULDN'T CALL IT. IT'S A TIE.");
                        // after you've defeated all the players set a restart button to try again
                        $("#centerButton").html("Restart");
                        $('#centerButton').attr('onclick', 'window.location.reload()');
                        // removing it's id at restart diables it from executing any other event/functions that it may be triggering based on its id
                        $('#centerButton').attr('id', "");
                        // after winning a battle the id element is selected and greyed out,animation is removed, progressbar is set to 0 and name is set to NOT AVAILABLE
                        rapperOneObject.beatingOpponent();
                    }
                }
            }
        }
    });
    // charachter one object
    var rapperOneObject = {
        // set attack variable to start from 0 at start of game and move incrementally
        attack: 0,
        // attack method is executed when 'Battle' is pressed
        attackOpponent: function() {
            // varies the attack power of each charachter
            var attackPowerArray = [8, 6, 4, 2]
            var attackArrayLength = attackPowerArray.length
            var attackIndexCounter = Math.floor((Math.random() * attackArrayLength));
            // attack by character one increments after every succesfully battle
            this.attack += attackPowerArray[attackIndexCounter];
            rapperOneAttack = this.attack;
            // the reduction in the other charachters progressbar
            var reduceProgressTwo = rapperTwoProgress -= this.attack;
            // the attack reduces the opponents progressbar
            $(".rapperTwoProgress").attr('style', "width:" + reduceProgressTwo + "%;");
            $(".rapperTwoProgress").html(reduceProgressTwo + "%");
        },
        // method executed after opponent has been defeated
        beatingOpponent: function() {
            // after winning a battle the id element is selected and greyed out,animation is removed, progressbar is set to 0 and name is set to NOT AVAILABLE
            $('.' + rapperTwoId).addClass("deadRapper");
            $('#' + rapperTwoId).removeAttr("data-bs-hover-animate")
            $('#' + rapperTwoId).attr('data-value', 0);
            $('#' + rapperTwoId).attr('alt', "NOT AVAILABLE");
        }
    };
    // charachter two object
    var rapperTwoObject = {
        // set attack variable to start from 0 at start of game and move incrementally
        attack: 0,
        // attack method is executed when 'Battle' is pressed
        attackOpponent: function() {
            // varies the attack power of each charachter
            var attackPowerArray = [8, 6, 4, 2]
            var attackArrayLength = attackPowerArray.length
            var attackIndexCounter = Math.floor((Math.random() * attackArrayLength));
            // attack by character two
            this.attack += attackPowerArray[attackIndexCounter];
            rapperTwoAttack = this.attack;
            // the reduction in the other charachters progressbar
            var reduceProgressOne = rapperOneProgress -= this.attack;
            // the attack reduces the opponents progressbar
            $(".rapperOneProgress").attr('style', "width:" + reduceProgressOne + "%;");
            $(".rapperOneProgress").html(reduceProgressOne + "%");
        },
        // method executed after opponent has been defeated
        beatingOpponent: function() {
            // after winning a battle the id element is selected and greyed out,animation is removed, progressbar is set to 0 and name is set to NOT AVAILABLE
            $('.' + rapperOneId).addClass("deadRapper");
            $('#' + rapperOneId).removeAttr("data-bs-hover-animate")
            $('#' + rapperOneId).attr('data-value', 0);
            $('#' + rapperOneId).attr('alt', "NOT AVAILABLE");
        },
    };
});

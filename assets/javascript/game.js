var correctGuess = 1;
var wrongGuess = 0;
var wordList = ["galaxy", "martian", "dimension", "destroy", "abilities", 
                "jupiter", "paradox", "unknown", "mankind", "vaporize", 
                "detection", "universe", "lightspeed", "rocketship", "spacecraft",
                "advanced", "cloaking", "futuristic", "foreign",
                "lifeform", "android", "blaster", "cyberspace", "dystopia", "multiverse",
                "telepathy", "sentience", "terraform", "westworld"];
var wordLength = 0;
var guessRemain = 0;
var possibleGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" , "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentWord = "";
var correctLetters = [];
var misfire = [];
var guess = "";


//New-game function for new game button
function newGame (){
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    correctGuess = 0;
    wrongGuess = 0;
    guessRemain = 10;
    document.getElementById("guessesleft").innerHTML = 10;
    document.getElementById("misfires").innerHTML = "";
    // document.getElementById("resulttext").innerHTML = "";
    // document.getElementById("resulttext").style.backgroundColor = "transparent";
    document.getElementById("resultimage").style.backgroundImage = 'url(assets/images/game-inprog.jpg)'
    wordLength = currentWord.length;
    correctLetters = currentWord.split("");
    possibleGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" , "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    misfire = [];
    
    //laser beam resets
    document.getElementById("shot1").style.visibility = "hidden";
    document.getElementById("shot2").style.visibility = "hidden";
    document.getElementById("shot3").style.visibility = "hidden";
    document.getElementById("shot4").style.visibility = "hidden";
    document.getElementById("shot5").style.visibility = "hidden";
    document.getElementById("shot6").style.visibility = "hidden";
    document.getElementById("shot7").style.visibility = "hidden";
    document.getElementById("shot8").style.visibility = "hidden";
    document.getElementById("shot9").style.visibility = "hidden";
    document.getElementById("shot10").style.visibility = "hidden";

    //letter slot resets
    document.getElementById("letter1").innerHTML = "";
    document.getElementById("letter2").innerHTML = "";
    document.getElementById("letter3").innerHTML = "";
    document.getElementById("letter4").innerHTML = "";
    document.getElementById("letter5").innerHTML = "";
    document.getElementById("letter6").innerHTML = "";
    document.getElementById("letter7").innerHTML = "";
    document.getElementById("letter8").innerHTML = "";
    document.getElementById("letter9").innerHTML = "";
    document.getElementById("letter10").innerHTML = "";
    
        //conditions for turning on and off letter slots based on word length, this is very wet but I am unsure how to do so more efficiently right now.
        if (currentWord.length === 6){
            document.getElementById("letter7").style.visibility = "hidden";
            document.getElementById("letter8").style.visibility = "hidden";
            document.getElementById("letter9").style.visibility = "hidden";
            document.getElementById("letter10").style.visibility = "hidden";
        };

        if (currentWord.length === 7){
            document.getElementById("letter7").style.visibility = "visible";
            document.getElementById("letter8").style.visibility = "hidden";
            document.getElementById("letter9").style.visibility = "hidden";
            document.getElementById("letter10").style.visibility = "hidden";
        };

        if (currentWord.length === 8){
            document.getElementById("letter7").style.visibility = "visible";
            document.getElementById("letter8").style.visibility = "visible";
            document.getElementById("letter9").style.visibility = "hidden";
            document.getElementById("letter10").style.visibility = "hidden";
        };

        if (currentWord.length === 9){
            document.getElementById("letter7").style.visibility = "visible";
            document.getElementById("letter8").style.visibility = "visible";
            document.getElementById("letter9").style.visibility = "visible";
            document.getElementById("letter10").style.visibility = "hidden";
        };

        if (currentWord.length === 10){
            document.getElementById("letter7").style.visibility = "visible";
            document.getElementById("letter8").style.visibility = "visible";
            document.getElementById("letter9").style.visibility = "visible";
            document.getElementById("letter10").style.visibility = "visible";
        };


    logger();
};

//A function that logs status of important variables
function logger (){
    console.log("current word: " + currentWord)
    console.log("word length: " + wordLength)
    console.log("correct letter array: " + correctLetters)
    console.log("misfire array: " + misfire)
    console.log("possible guess array: " + possibleGuess)
    console.log("wrong-guesses:" + wrongGuess)
    console.log("Correct guesses: " + correctGuess)
    console.log("Guess: " + guess)
    console.log("----------------")
};

//invoke new game when page is loaded.
newGame();

//detecting click on new game button to invoke new game function
document.getElementById("newgame").onclick = newGame;

//on key up, save key pressed as guess variable
document.onkeyup = function(event) {

    if (wrongGuess < 10){
    
        var guess = event.key;
        
        //if guess is within remaining alphabet proceed
        if (possibleGuess.indexOf(guess) != -1) {
                
            possibleGuess = possibleGuess.filter(e => e !== guess);

                //loop for cycling through letters of currentword, and adding to counter if guess matches letter
                    
                for(var i = 0; i < currentWord.length; i++){
                    if(correctLetters[i] === guess){
                        correctGuess++;
                    }

                };

                //if guess is not within correct letters array, add one to wrong guess variable, remove guess from possibleGuess array, push to misfires array
                if (correctLetters.indexOf(guess) === -1) {
                    wrongGuess++;
                    guessRemain--;
                    misfire.push(guess);

                    //calling the laser image to correspond with missed letters
                    if (guessRemain === 9){
                        document.getElementById("shot1").style.visibility = "visible";
                    }

                    if (guessRemain === 8){
                        document.getElementById("shot2").style.visibility = "visible";
                    }

                    if (guessRemain === 7){
                        document.getElementById("shot3").style.visibility = "visible";
                    }

                    if (guessRemain === 6){
                        document.getElementById("shot4").style.visibility = "visible";
                    }

                    if (guessRemain === 5){
                        document.getElementById("shot5").style.visibility = "visible";
                    }

                    if (guessRemain === 4){
                        document.getElementById("shot6").style.visibility = "visible";
                    }

                    if (guessRemain === 3){
                        document.getElementById("shot7").style.visibility = "visible";
                    }

                    if (guessRemain === 2){
                        document.getElementById("shot8").style.visibility = "visible";
                    }

                    if (guessRemain === 1){
                        document.getElementById("shot9").style.visibility = "visible";
                    }

                    if (guessRemain === 0){
                        document.getElementById("shot10").style.visibility = "visible";
                    }
                };

                //Statements asking if guess is the same as a certin letter, show that letter as the content in corresponding div.
                if (guess === correctLetters[0]) {
                    document.getElementById("letter1").innerHTML = correctLetters[0];
                };

                if (guess === correctLetters[1]) {
                    document.getElementById("letter2").innerHTML = correctLetters[1];
                };

                if (guess === correctLetters[2]) {
                    document.getElementById("letter3").innerHTML = correctLetters[2];
                };

                if (guess === correctLetters[3]) {
                    document.getElementById("letter4").innerHTML = correctLetters[3];
                };

                if (guess === correctLetters[4]) {
                    document.getElementById("letter5").innerHTML = correctLetters[4];
                };

                if (guess === correctLetters[5]) {
                    document.getElementById("letter6").innerHTML = correctLetters[5];
                };

                if (guess === correctLetters[6]) {
                    document.getElementById("letter7").innerHTML = correctLetters[6];
                };

                if (guess === correctLetters[7]) {
                    document.getElementById("letter8").innerHTML = correctLetters[7];
                };

                if (guess === correctLetters[8]) {
                    document.getElementById("letter9").innerHTML = correctLetters[8];
                };
                
                if (guess === correctLetters[9]) {
                    document.getElementById("letter10").innerHTML = correctLetters[9];
                };
                    //update guesses remaining
                document.getElementById("guessesleft").innerHTML = guessRemain;

                document.getElementById("misfires").innerHTML = misfire.toString();
        };

    
    }
       
    if (correctGuess === wordLength) {
        document.getElementById("resultimage").style.backgroundImage = 'url(assets/images/game-win.jpg)';
    };

    if (wrongGuess === 10) {
        document.getElementById("resultimage").style.backgroundImage = 'url(assets/images/game-lose.jpg)';
    };

    logger();

    
}
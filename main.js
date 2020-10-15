
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numOfRounds = 6;

let currentRound = 1;

function displayLetters() {
    setTimeout(() => {
        console.log('make letters disappear now');
    }, 2000);
    
    console.log('make letters appear now');

}

// 6 rounds of n unique letters per round: 2, 4, 6, 8, 10, 12

function fetchLetters() {

    if(currentRound > 6) {
        return;
    }

    // current round * 2 -> how many letters to print
    let letterBag = []; // letter bag arr
    let randomLetter = letters.charAt(Math.trunc(Math.random() * letters.length));


    while(letterBag.length < currentRound * 2) {
        if(!letterBag.includes(randomLetter)) {
            letterBag.push(randomLetter);
        }
        
        randomLetter = letters.charAt(Math.trunc(Math.random() * letters.length));
        
    }

    return letterBag;

}

document.querySelector("#start_button").onclick = function(){

    let header = document.getElementById("letter_container");
    let startButton = document.getElementById("start_button");
    let restartButton = document.getElementById("restart_button")

    let letterBag = fetchLetters();
   
    if(!letterBag) {
        console.log("restart please");
        return;
    }
    
    // display letter bag
    header.innerHTML = letterBag.toString().replace(/,/g, ' ');
    // let admin see letters
    console.log(`Round ${currentRound} letters:\n` + letterBag.toString());

    // hide other elements so user cannot mash
    startButton.style.display = "none";
    restartButton.style.display = "none";

    // update start button name after hiding
    startButton.innerHTML = "NEXT";

    // set timeout to hide letters
    setTimeout(() => {
        if(currentRound > 6) {
            header.innerHTML = `Reset?`;
        }
        else {
            header.innerHTML = `Round ${currentRound}`;
        }

        startButton.style.display = "block";
        restartButton.style.display = "block";
    
        
        
        }, 2000);

    // update round
    currentRound++;

}

document.querySelector("#restart_button").onclick = function() {
    currentRound = 1;
    // rename round
    let header = document.getElementById("letter_container");
    header.innerHTML = `Round ${currentRound}`;
    // rename button 
    let startButton = document.getElementById("start_button");
    startButton.innerHTML = "Start";


}


// startup name generator

// Array
/*
const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];


function getStartupName(a,b) {
    let randomNumberFromA = Math.floor(Math.random() * a.length);
    let randomNumberFromB = Math.floor(Math.random() * b.length);
    let randomElement = a[randomNumberFromA] + " " + b[randomNumberFromB];

    console.log(randomElement);
}


getStartupName(firstWords, secondWords);

*/




// Treasure hunter

/*
let island = ['-', '-', 'T', '-', '-'];
let treasures = 0;
console.log("There's " + island.length + " moves on this island");

for (let i = 0; i < island.length; i++) {
    if(island[i] === 'T'){
        console.log(`Treasure found at move ${i + 1} :)`);
        treasures++;

    } else{
        console.log(`No treasure found at move ${i + 1} :(`);

    }

}

console.log("There were " + treasures + " treasures at this island");
*/




// 04 - Student grades analysis
let grades = [85, 92, 78, 63, 95, 88, 72, 54, 81, 67];
const gradesLength = grades.length;

// log amount of grades in class
console.log(`There are ${gradesLength} grades in the class`);

//iterate through array and log the grade
grades.forEach((grade) => {

    if (grade >= 90) {
        console.log(`${grade}: A`)
    } else if (grade >= 80 && grade < 90) {
        console.log(`${grade}: B`)
    } else if (grade >= 70 && grade < 79) {
        console.log(`${grade}: C`)
    } else if (grade >= 60 && grade < 69) {
        console.log(`${grade}: D`)
    } else {
        console.log(`${grade}: F`)
    }
})

// calculate class average
function getAVG(grades) {
    const total = grades.reduce((sum, current) => sum + current, 0);
    return total / gradesLength
}

//evaluate the class based on the average grade
const evaluateClass = (x) => {
    if (x >= 90) {
        return "Excellent"
    } else if (x >= 80 && x < 90) {
        return ("Good")
    } else if (x >= 70 && x < 79) {
        return("Satisfactory")
    } else {
        return ("Needs Improvement")
    }

}

// call getAVG function
const avgOfClass = getAVG(grades);
// Log overall class performance
console.log("Overall class performance: " + evaluateClass(avgOfClass))

// highest grade
const maxGrade = Math.max(...grades);
console.log("Highest grade: " + maxGrade);

//lowest grade
const lowestGrade = Math.min(...grades);
console.log("Lowest grade: " + lowestGrade);

console.log("Average grade: " + getAVG(grades));




/*// 06 - Dice rolling championship

const player1 = prompt("Name of player 1")
const player2 = prompt("Name of player 2")
const diceRoll = () => Math.floor(Math.random() * 6) + 1;

let player1Score = 0;
let player2Score = 0;
let player1Wins = 0;
let player2Wins = 0;

let round = 0;
let champion = '';

console.log("Welcome to the Dice Rolling Championship!")

playRound()
function playRound() {
    round++;
    console.log(`Round ${round}`);


    //Gameplay loop // change the i < 3 to higher round!!
    for (let i = 0; i < 3; i++) {
        prompt(`Press Enter to roll the dice, ${player1}!`)
        let player1Roll = diceRoll()
        player1Score += player1Roll
        console.log(`${player1} rolled: ${player1Roll} (total: ${player1Score})`)

        prompt(`Press Enter to roll the dice, ${player2}!`)
        let player2Roll = diceRoll()
        player2Score += player2Roll
        console.log(`${player2} rolled: ${player2Roll} (total: ${player2Score})`)
    }

    // Declare the winner of round
    if (player1Score > player2Score) {
        console.log(`The winner is ${player1} with a total of ${player1Score}!!!`);
        player2Wins++
    } else if (player1Score < player2Score) {
        console.log(`The winner is ${player2} with a total of ${player2Score}!!!`);
        player2Wins++
    } else {
        console.log("The game is a tie!!!");
        player2Wins++
        player1Wins++
    }

    checkChampion(); // Call the function

    // Check if game is over
    if (player1Wins === 3 || player2Wins === 3) {
        endGame();
    } else {
        // Continue to next round
        // Could use setTimeout for delay
        setTimeout(playRound, 2000);
    }
}


function endGame() {
    let champion = player1Score === 3 ? 'Player 1' : 'Player 2';
    console.log(`${champion} wins the game!`);
}


function checkChampion() {
    if (player1Wins === 3 && player1Wins > player2Wins) {
        champion = player1;
        console.log(`${champion} is the champion!!!`);
    } else if (player2Wins === 3 && player2Wins > player1Wins) {
        champion = player2;
        console.log(`${champion} is the champion!!!`);
    }
}*/

// 06 - Dice rolling championship

const player1 = prompt("Name of player 1").toUpperCase();
const player2 = prompt("Name of player 2").toUpperCase();
const diceRoll = () => Math.floor(Math.random() * 6) + 1;

let player1Score = 0;
let player2Score = 0;
let player1Wins = 0;
let player2Wins = 0;

let round = 0;

console.log("Welcome to the Dice Rolling Championship!");
playRound();

function playRound() {

    round++;
    if (round >= 2) {
        console.log(`Round ${round} | ${player1} rounds won: ${player1Wins}|  ${player2} rounds won: ${player2Wins}`)
    } else (console.log(`Round ${round}`))


    // Reset scores for new round
    player1Score = 0;
    player2Score = 0;

    // Gameplay loop
    for (let i = 0; i < 10; i++) {
        prompt(`Press Enter to roll the dice, ${player1}!`);
        let player1Roll = diceRoll();
        player1Score += player1Roll;
        console.log(`${player1} rolled: ${player1Roll} (total: ${player1Score})`);

        prompt(`Press Enter to roll the dice, ${player2}!`);
        let player2Roll = diceRoll();
        player2Score += player2Roll;
        console.log(`${player2} rolled: ${player2Roll} (total: ${player2Score})`);
    }

    // Declare the winner of round
    if (player1Score > player2Score) {
        console.log(`The winner is ${player1} with a total of ${player1Score}!!!`);
        player1Wins++; // ← FIXED: was player2Wins
    } else if (player1Score < player2Score) {
        console.log(`The winner is ${player2} with a total of ${player2Score}!!!`);
        player2Wins++;
    } else {
        console.log("The round is a tie!!!");
        player2Wins++;
        player1Wins++;
    }

    // Check if game is over
    if (player1Wins === 3 || player2Wins === 3) {
        endGame();
    } else {
        // Continue to next round
        setTimeout(playRound, 2000);
    }
}

function endGame() {
    let champion = player1Wins === 3 ? player1 : player2;
    console.log(`${champion} has won 3 rounds now and is the ULTIMATE dice champion!!!`);
    prompt('Press enter to play again')
    round = 0;
    playRound()
}






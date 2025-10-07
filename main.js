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

console.log(`There are ${gradesLength} grades in the class`);

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

// calculate average
function getAVG(grades) {
    const total = grades.reduce((sum, current) => sum + current, 0);
    return total / gradesLength
}


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


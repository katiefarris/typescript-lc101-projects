"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
let spacecraftName = 'Determination';
let speedMph = 17500;
let kilometerstoMars = 225000000;
let kilometersToTheMoon = 384400;
let milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
let milesToMars = kilometerstoMars * milesPerKilometer;
let hoursToMars = milesToMars / speedMph;
let daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    let milesAway = kilometersAway;
    let hoursToLocation = milesAway / speedMph;
    return hoursToLocation / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(`${spacecraftName} would take ${getDaysToLocation(kilometerstoMars)} days to get to Mars.`);
console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to The Moon.`);
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:

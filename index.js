//! Start by creating the variables for the data recorded
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

const celsiusTempsOriginal = [
    day2TempC, day4TempC, day6TempC, day8TempC, day10TempC,
    day12TempC, day14TempC, day16TempC, day18TempC, day20TempC,
    day22TempC, day24TempC, day26TempC, day28TempC, day30TempC
];

const fahrenheitTempsOriginal = [
    day1TempF, day3TempF, day5TempF, day7TempF, day9TempF,
    day11TempF, day13TempF, day15TempF, day17TempF, day19TempF,
    day21TempF, day23TempF, day25TempF, day27TempF, day29TempF
];

function convertToF(celsiusArray) {
    let tempInF = celsiusArray.map((temp) => {
        return ((temp * 9 / 5) + 32)
    });

    return tempInF
}

const fahrenheitTempsConverted = convertToF(celsiusTempsOriginal);

const allFahrenheitTemps = [];

for (let i = 0; i < 15; i++) {
    allFahrenheitTemps.push(fahrenheitTempsOriginal[i]);
    allFahrenheitTemps.push(fahrenheitTempsConverted[i]);
}


const tot_temperature_in_fahrenheit = allFahrenheitTemps.reduce((acc, temp) => acc + temp, 0);
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

const tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - 32) * 5 / 9;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

// console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit.toFixed(2));
// console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit.toFixed(2));
// console.log("Total Temperature in Celsius:", tot_temperature_in_celsius.toFixed(2));
// console.log("Average Temperature in Celsius:", avg_temperature_in_celsius.toFixed(2));
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
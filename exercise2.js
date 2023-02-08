const { solveExercise2Segregating, solveExercise2Aggregating } = require("./src/printCountries");

const worldArray = [
    {
        country: 'US',
        languages: ['en']
    },
    {
        country: 'BE',
        languages: ['nl','fr','de']
    },
    {
        country: 'NL',
        languages: ['nl']
    },
    {
        country: 'DE',
        languages: ['de']
    },
    {
        country: 'ES',
        languages: ['es']
    },
    {
        country: 'AU',
        languages: ['de']
    }
]

console.time('segreg')
const segregResult = solveExercise2Segregating(worldArray, 'de');
console.timeEnd('segreg');
console.time('aggreg');
const aggregResult = solveExercise2Aggregating(worldArray, 'de');
console.timeEnd('aggreg')
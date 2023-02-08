
function returnCountryCount (worldArray){
    return worldArray.length;
}

function findCountryWithMostLanguagesIncludingInputLang(worldArray, languageCode){
    const countryObj = {
        country: undefined,
        languages: []
    }
    worldArray.forEach((el)=> {
        if(el.languages.includes(languageCode)){
            if((countryObj.languages.length) < el.languages.length){
                countryObj.country = el.country
                countryObj.languages = el.languages
            }
        }
    })
    return countryObj.country;
}

function findCountryWithMostLanguages(worldArray){
    const countryObj = {
        country: undefined,
        languages: []
    }
    worldArray.forEach((el)=> {
        if((countryObj.languages.length) < el.languages.length){
            countryObj.country = el.country
            countryObj.languages = el.languages
        }
    })
    return countryObj.country;
}

function countDifferentLanguages (worldArray) {
    const uniqueLanguagesArray = []
    worldArray.forEach((el)=> {
        el.languages.forEach((lang)=> {
            if (!uniqueLanguagesArray.includes(lang)) uniqueLanguagesArray.push(lang);
        })
    });
    return uniqueLanguagesArray.length
}


function findMostCommonLanguage (worldArray) {
    const languageCounter = {}
    worldArray.forEach((el)=> {
        el.languages.forEach((lang)=> {
            if (languageCounter[lang] !== undefined) languageCounter[lang]++;
            else languageCounter[lang] = 1;
        })
    });
    const maxCountOfLang = Math.max(...Object.values(languageCounter))
    return Object.keys(languageCounter).find((lang)=> languageCounter[lang] === maxCountOfLang)
}

function solveExercise2Segregating (worldArray) {
    return {
        countriesCount: returnCountryCount(worldArray),
        countryWithMostLanguagesIncludingGerman: findCountryWithMostLanguagesIncludingInputLang(worldArray, 'de'),
        countryWithMostLanguages: findCountryWithMostLanguages(worldArray),
        totalSpokenLanguages: countDifferentLanguages(worldArray),
        mostCommonLanguage: findMostCommonLanguage(worldArray)
    }
}

function solveExercise2Aggregating (worldArray) {
    // I decided to showcase how much more efficient would be to solve all issues at once
    // But also, how it would be more confusing

    const mostLanguagesDeCountry = {
        country: undefined,
        languages: []
    }

    const mostLanguagesCountry = {
        country: undefined,
        languages: []
    }

    const languageCounter = {}

    worldArray.forEach((countryObj) => {
            if((mostLanguagesDeCountry.languages.length) < countryObj.languages.length){
                if(countryObj.languages.includes('de')){
                    mostLanguagesDeCountry.country = countryObj.country
                    mostLanguagesDeCountry.languages = countryObj.languages
                }
            }
            if((mostLanguagesCountry.languages.length) < countryObj.languages.length) {
                mostLanguagesCountry.country = countryObj.country
                mostLanguagesCountry.languages = countryObj.languages
            }
            countryObj.languages.forEach((lang) =>{
                if(languageCounter[lang] === undefined) languageCounter[lang] = 0;
                languageCounter[lang]++;
            })
    })
    const maxCountOfLang = Math.max(...Object.values(languageCounter))
    const allLanguages = Object.keys(languageCounter)
    const mostCommonLanguage = allLanguages.find((lang)=> languageCounter[lang] === maxCountOfLang);


    return {
        countriesCount: worldArray.length,
        countryWithMostLanguagesIncludingGerman: mostLanguagesDeCountry.country,
        countryWithMostLanguages: mostLanguagesCountry.country,
        totalSpokenLanguages: allLanguages.length,
        mostCommonLanguage: mostCommonLanguage
    }
    
}

module.exports = {
    returnCountryCount,
    findCountryWithMostLanguagesIncludingInputLang,
    findCountryWithMostLanguages,
    countDifferentLanguages,
    findMostCommonLanguage,
    solveExercise2Segregating,
    solveExercise2Aggregating
}
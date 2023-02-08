const {
    returnCountryCount,
    findCountryWithMostLanguagesIncludingInputLang,
    findCountryWithMostLanguages,
    countDifferentLanguages,
    findMostCommonLanguage,
    solveExercise2Segregating,
    solveExercise2Aggregating
} = require("../src/printCountries");

describe('returnCountryCount function should return country count correctly', ()=>{
    test('Should throw error when invalid value is passed', ()=>{
        try{
            const result = returnCountryCount(undefined)
        } catch (e) {
            expect(e.message).toBe("Cannot read property 'length' of undefined")
        }
    });
    test('Should return the correct count for given array', ()=>{
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
            }
        ];
        expect(returnCountryCount(worldArray)).toBe(5);
    });
    test('Should return 0 for empty array', ()=>{
        expect(returnCountryCount([])).toBe(0);
    });
});

describe('findCountryWithMostLanguagesIncludingInputLang function should find country correctly', ()=>{

    test('Should throw error when invalid value is passed', ()=>{  
        try{
            const result = findCountryWithMostLanguagesIncludingInputLang(undefined)
       } catch (e) {
            expect(e.message).toBe("Cannot read property 'forEach' of undefined")
       }
    });
    test('Should return the correct country for given array and language', ()=>{
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
            }
        ];
        expect(findCountryWithMostLanguagesIncludingInputLang(worldArray, 'de')).toBe('BE');
    });
    test('Should return the correct country for given array and language', ()=>{
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
            }
        ];
        expect(findCountryWithMostLanguagesIncludingInputLang(worldArray, 'en')).toBe('US');
    });
    test('Should return the first country for tied language amounts', ()=>{
        const testArray = [
            {
                country: 'PT',
                languages: ['pt']
            },
            {
                country: 'BR',
                languages: ['pt']
            }
        ]
        expect(findCountryWithMostLanguagesIncludingInputLang(testArray, 'pt')).toBe('PT');
    });
    test('Should return undefined for empty array', ()=>{
        expect(findCountryWithMostLanguagesIncludingInputLang([])).toBe(undefined);
    });
});

describe('findCountryWithMostLanguages function should find country correctly', ()=>{

    test('SShould throw error when invalid value is passed', ()=>{  
        try{
            const result = findCountryWithMostLanguages(undefined)
       } catch (e) {
            expect(e.message).toBe("Cannot read property 'forEach' of undefined")
       }
    });
    test('Should return the correct country for given array', ()=>{
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
            }
        ];
        expect(findCountryWithMostLanguages(worldArray)).toBe('BE');
    });
    test('Should return the first country for tied language amounts', ()=>{
        const testArray = [
            {
                country: 'EN',
                languages: ['en']
            },
            {
                country: 'US',
                languages: ['en']
            }
        ]
        expect(findCountryWithMostLanguages(testArray)).toBe('EN');
    });
    test('Should return undefined for empty array', ()=>{
        expect(findCountryWithMostLanguages([])).toBe(undefined);
    });
});

describe('countDifferentLanguages function count different languages correctly', ()=>{
    test('Should throw error when invalid value is passed', ()=>{
        try{
            const result = countDifferentLanguages(undefined)
        } catch (e) {
            expect(e.message).toBe("Cannot read property 'forEach' of undefined")
        }
    });
    test('Should return the correct count for given array', ()=>{         
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
            }
        ];
        expect(countDifferentLanguages(worldArray)).toBe(5);
    });
    test('Should ignore duplicate languages', ()=>{
        const testArray = [
            {
                country: 'US',
                languages: ['en']
            },
            {
                country: 'BE',
                languages: ['en']
            },
            {
                country: 'NL',
                languages: ['en']
            },
            {
                country: 'DE',
                languages: ['en']
            },
            {
                country: 'ES',
                languages: ['en']
            }
        ]
        expect(countDifferentLanguages(testArray)).toBe(1);
    });
    test('Should return 0 for empty array', ()=>{
        expect(countDifferentLanguages([])).toBe(0);
    });
});

describe('findMostCommonLanguage function find most common language correctly', ()=>{
    test('Should throw error when invalid value is passed', ()=>{
        try{
            const result = findMostCommonLanguage(undefined)
        } catch (e) {
            expect(e.message).toBe("Cannot read property 'forEach' of undefined")
        }
    });
    test('Should return the most frequent language for given array', ()=>{
        const testArray = [
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
        ];
        expect(findMostCommonLanguage(testArray)).toBe('de');
    });
    test('Should return the first language when count is tied', ()=>{
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
            }
        ];
        expect(findMostCommonLanguage(worldArray)).toBe('nl');
    });
    test('Should return undefined for empty array', ()=>{
        expect(findMostCommonLanguage([])).toBe(undefined);
    });
});

describe("Test 'solveExercise2Segregating' function", ()=>{
    test('solveExercise2Segregating should work for example data', ()=>{
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
            }
        ];
        const result = solveExercise2Segregating(worldArray)
        expect(result).toStrictEqual({
            countriesCount: 5, 
            countryWithMostLanguages: 'BE', 
            countryWithMostLanguagesIncludingGerman: 'BE', 
            mostCommonLanguage: 'nl', 
            totalSpokenLanguages: 5
        });
    });
    test('solveExercise2Segregating should work for empty array', ()=>{
        const result = solveExercise2Segregating([]);
        expect(result).toStrictEqual({
            countriesCount: 0, 
            countryWithMostLanguages: undefined, 
            countryWithMostLanguagesIncludingGerman: undefined, 
            mostCommonLanguage: undefined, 
            totalSpokenLanguages: 0
        });
    })
    test('solveExercise2Segregating throw error for bad input', ()=>{
        try{
            const result = solveExercise2Segregating(undefined);
        } catch (e) {
            expect(e.message).toBe("Cannot read property 'length' of undefined")
        }
    })
})

describe("Test 'solveExercise2Aggregating' function", ()=>{
    test('solveExercise2Aggregating should work for example data', ()=>{
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
            }
        ];
        const result = solveExercise2Aggregating(worldArray)
        expect(result).toStrictEqual({
            countriesCount: 5, 
            countryWithMostLanguages: 'BE', 
            countryWithMostLanguagesIncludingGerman: 'BE', 
            mostCommonLanguage: 'nl', 
            totalSpokenLanguages: 5
        });
    });
    test('solveExercise2Aggregating should work for empty array', ()=>{
        const result = solveExercise2Aggregating([]);
        expect(result).toStrictEqual({
            countriesCount: 0, 
            countryWithMostLanguages: undefined, 
            countryWithMostLanguagesIncludingGerman: undefined, 
            mostCommonLanguage: undefined, 
            totalSpokenLanguages: 0
        });
    })
    test('solveExercise2Aggregating throw error for bad input', ()=>{
        try{
            const result = solveExercise2Aggregating(undefined);
        } catch (e) {
            expect(e.message).toBe("Cannot read property 'forEach' of undefined")
        }
    })
})
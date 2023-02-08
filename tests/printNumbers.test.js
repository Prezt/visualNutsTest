const {solvePrint, printAllNumbersUpToN} = require("../src/printNumbers");

describe('solvePrint function should return what to print based on a input ', ()=>{
    test('Should return undefined when NaN value is passed', ()=>{
        expect(solvePrint('Test')).toBe(undefined);
    });
    test('Should return undefined when negative value is passed', ()=>{
        expect(solvePrint(-100)).toBe(undefined);
    });
    test('Should return undefined when non-integer value is passed', ()=>{
        expect(solvePrint(10.10)).toBe(undefined);
    });
    test('Should return Visual Nuts when the number is divisible by 3 and by 5', ()=>{
        expect(solvePrint(45)).toBe('Visual Nuts');
    })
    test('Should return Visual when the number is divisible by 3 and not by 5', ()=>{
        expect(solvePrint(9)).toBe('Visual');
    })
    test('Should return Nuts when the number is divisible by 5 and not by 3', ()=>{
        expect(solvePrint(10)).toBe('Nuts');
    })
});

describe('printAllNumbersUpToN function should call console.log correctly', ()=>{
    let logSpy = jest.spyOn(global.console, 'log');
    beforeEach(() => {
        logSpy = jest.spyOn(global.console, 'log');
        logSpy.mockImplementation((n) => (undefined))
    });
    
    afterEach(() => {
        logSpy.mockRestore();
    });
    test('Should not call console log for NaN value', ()=>{
        expect(printAllNumbersUpToN('Test')).toBe(undefined);
        expect(logSpy).not.toHaveBeenCalled();
        
    });
    test('Should not call console log for negative value', ()=>{
        expect(printAllNumbersUpToN(-100)).toBe(undefined);
        
        expect(logSpy).not.toHaveBeenCalled();
    });
    test('Should not call console log for non-integer value', ()=>{
        expect(printAllNumbersUpToN(-100)).toBe(undefined);
        
        expect(logSpy).not.toHaveBeenCalled();
    });
    test('Should call console log n times for good integer input', ()=>{
        expect(printAllNumbersUpToN(16)).toBe(undefined);

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(16);
        expect(logSpy).toHaveBeenCalledWith('Visual');
        expect(logSpy).toHaveBeenCalledWith('Nuts');
        expect(logSpy).toHaveBeenCalledWith('Visual Nuts');
        expect(logSpy.mock.calls).toContainEqual([1],[2],['Visual'],[4],['Nuts'],['Visual'],[7],[8],['Visual'],['Nuts'],[11],['Visual'],[13],[14],['Visual Nuts'],[16]);
    })
    test('Should work for large integers', ()=>{
        expect(printAllNumbersUpToN(1000)).toBe(undefined);

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1000);
        expect(logSpy).toHaveBeenCalledWith('Visual');
        expect(logSpy).toHaveBeenCalledWith('Nuts');
        expect(logSpy).toHaveBeenCalledWith('Visual Nuts');
    });
});

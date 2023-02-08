function solvePrint (number) {
    if((!Number.isInteger(number) || number < 0)) return;
    const divBy5 = number%5 === 0;
    const divBy3 = number%3 === 0;
    if(divBy3 && divBy5) return 'Visual Nuts';
    if(divBy5) return 'Nuts'
    if(divBy3) return 'Visual'
    return number
}

function printAllNumbersUpToN (n) {
    if((!Number.isInteger(n) || n < 0)) return;
    for(let i = 1; i<=n; i++) console.log(solvePrint(i))
    return
}

module.exports = {
    solvePrint,
    printAllNumbersUpToN
}
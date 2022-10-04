type Combineable = number | string;
type conversionType = 'as-text' | 'as-number';
let combinedValue: (a: number, b: number, c: boolean) => number;

function add(n1: number, n2: number, showResult: boolean): number {
    if (showResult) {
        return n1 + n2;
    }
}

function printResult (num: number): void {
    console.log("Result", num)
};


combinedValue = add;
// combinedValue = printResult;

printResult(combinedValue(2, 3, true));

function combine(
    n1: Combineable, 
    n2: Combineable, 
    resultConversionType: conversionType): Combineable 
{
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' && resultConversionType === 'as-number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    } 

    return result;
} 

function addAndHandler ( a: number, b: number, cb: (num: number) => void ): void {
    const result = a+b;
    cb(result);
}

addAndHandler(22, 3, (result) => {
    console.log("cb result:", result);
})

console.log(combine(2, 2, 'as-number'))

const num1 = 2.3;
const num2 = 2;
const showResult = false;

const result = add(num1, num2, showResult);
console.log(result);
type Combineable = number | string;
type conversionType = 'as-text' | 'as-number';

function add(n1: number, n2: number, showResult: boolean): number {
    if (showResult) {
        return n1 + n2;
    }
}

function printResult (num: number): void {
    console.log("Result", num)
};

printResult(add(2, 3, true));

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

console.log(combine(2, 2, 'as-number'))

const num1 = 2.3;
const num2 = 2;
const showResult = false;

const result = add(num1, num2, showResult);
console.log(result);
function add(n1: number, n2: number, showResult: boolean): number {
    if (showResult) {
        return n1 + n2;
    }
}

function combine(n1: number | string, n2: number | string, resultConversionType: 'as-text' | 'as-number'): number | string {
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
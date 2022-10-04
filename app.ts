function add(n1: number, n2: number, showResult: boolean): number {
    if (showResult) {
        return n1 + n2;
    }
}

const num1 = 2.3;
const num2 = 2;
const showResult = false;

const result = add(num1, num2, showResult);
console.log(result);
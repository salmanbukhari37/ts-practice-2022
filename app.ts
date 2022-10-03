const button = document.querySelector("button")! as  HTMLButtonElement | null;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener('click', function () {
    if (input1 || input2){
        console.log(add(+input1.value, +input2.value));
    }
});


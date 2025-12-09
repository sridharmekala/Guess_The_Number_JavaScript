let random = Math.floor(Math.random() * 100) + 1;
let input = document.getElementById("input");
let output = document.getElementById("output");
let res = document.getElementById("count");
let count = 0;
let btnGuess = document.getElementById("btn");
let btnReset = document.getElementById("reset");

function btnClick() {

    let guess = Number(input.value);

    if (!guess || guess < 1 || guess > 100) {
        output.textContent = "Enter a number between 1 and 100.";
        output.style.color = "orange";
        return;
    }

    count++;

    if (guess === random) {
        output.textContent = "Congrat's You guessed it! " + random + " is Correct!"
        output.style.color = "green";
        res.textContent = "Total chances used: " + count;

        btnGuess.disabled = true; 
        input.disabled = true;
        return;
    }

    if (guess < random) {
        output.textContent = "Too low! Try a higher number.";
        output.style.color = "red";
    } else {
        output.textContent = "Too high! Try a lower number.";
        output.style.color = "red";
    }

    res.textContent = "Chances used: " + count;
}
 
function resetGame() {
    random = Math.floor(Math.random() * 100) + 1;
    count = 0;
    input.value = "";
    output.textContent = "Game Reset! Start guessing.";
    output.style.color = "black";
    res.textContent = "Chances used: 0";

    input.disabled = false;
    btnGuess.disabled = false;
}
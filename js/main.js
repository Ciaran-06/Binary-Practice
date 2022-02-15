//let input = [0, 0, 0, 0, 0, 0, 0, 0];
//let regex = /01/i;
let buttons = document.querySelectorAll(".button").length;

function init() {
    let num = Math.floor(Math.random() * 255) + 1
    globalThis.num = num;

    document.getElementById("number").innerHTML = num;
}

for (var i = 0; i < buttons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        if (this.value == "0") {
            this.value = 1;
            this.style.backgroundColor = "green";
        } else {
            this.value = 0;
            this.style.backgroundColor = "red";
        }
    });
}

function getVal() {
    for (let i = 0; i < 8; i++) {
        input[i] = document.getElementById(i).value;
    }

    //console.log(testInput());

}

function game() {
    //let num = Math.floor(Math.random() * 255) + 1 //the + 1 makes it so its not 0.
    let input = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 8; i++) {
        input[i] = document.getElementById(i).value;
    }


    let guess = input.join("");

    if (guess == ("00000000" + num.toString(2)).substr(-8)) {
        alert("You Win!");
    } else {
        alert("You Lose!");
    }
    //console.log(guess);

    //console.log(num);
    //console.log(("00000000" + num.toString(2)).substr(-8));
}

function testInput() {
    for (let v = 0; v < 8; v++) {
        console.log(input[v]);
    }

    return "logged";
}
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDice = "./images/dice" + randomNumber1 + ".png";

var img1 = document.querySelector(".img1").setAttribute("src", randomDice);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDice2 = "./images/dice" + randomNumber2 + ".png";

var img2 = document.querySelector(".img2").setAttribute("src", randomDice2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🎉";
}
else{
    document.querySelector("h1").innerHTML = "Draw 🏳️";
}
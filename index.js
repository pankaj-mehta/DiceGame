var randomNumber1 = Math.floor((Math.random()*6)) + 1;
var randomimagesource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomimagesource1);


var randomNumber2 = Math.floor((Math.random()*6)) + 1;
var randomimagesource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!!";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a Draw🤝";
}
else{
  document.querySelector("h1").innerHTML = "Player2 Wins🚩!!"
}

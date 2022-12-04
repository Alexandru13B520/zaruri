/// generez primul numar random
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

/// retin numelei pozei in variabila randomImage1
var randomImage1 = "dice" + randomNumber1 + ".png";

/// randomImageDice1 se va inlocui cu zarul initial
var randomImageDice1 = "images/" + randomImage1;

/// retin in image1 in felul urmator
/// querySelectorAll("img"),in cazul nostru
// cauta toate img-urile si le pune intr-un vector
/// img[0] reprezinta primul element din vectorul de element ce eu atrivutul "img"
var image1 = document.querySelectorAll("img")[0];

/// schimb valoarea zarului initial cu valoarea zarului generat random
image1.setAttribute("src",randomImageDice1);

/// repet aceeasi operatiune cu primul zar
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageDice2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageDice2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player1 WIN";
}
else
  if(randomNumber2 > randomNumber1)
  {
    document.querySelector("h1").innerHTML = "Player2 WIN";
  }
else {
  document.querySelector("h1").innerHTML = "DRAW";
}

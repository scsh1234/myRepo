var randomNumber1=Math.floor(Math.random()*6)+1;//1-6;

var mystring="images/dice"+randomNumber1+".png";
// document.querySelectorAll("img").setAttribute("src",mystring);
document.getElementById("img1").setAttribute("src",mystring);
// document.getElementsByClassName("img1").setAttribute("src",mystring);

var randomNumber2=Math.floor(Math.random()*6)+1;//1-6;

var mystring2="images/dice"+randomNumber2+".png";
document.getElementById("img2").setAttribute("src",mystring2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS !"
}
else
{
    document.querySelector("h1").innerHTML="DRAW";
}

var randomno=Math.floor(Math.random()*6)+1;
var imgname="dice"+randomno+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgname);
var random2=Math.floor(Math.random()*6)+1;
var img2="dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);
if(randomno==random2)
{
    document.querySelectorAll("h1")[0].innerText="Draw";
}
else if(randomno>random2)
{
    document.querySelectorAll("h1")[0].innerText="Player 1 wins";
}
else{
    document.querySelectorAll("h1")[0].innerText="Player 2 wins";

}

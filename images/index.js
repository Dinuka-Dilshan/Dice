var randomnumber1 = Math.floor(Math.random()*6)+1;

if(randomnumber1 === 1){
    document.querySelector(".img1").setAttribute("src,images/dice1.png");
}
else if(randomnumber1 === 2){
    document.querySelector(".img1").setAttribute("src,images/dice2.png");
}
else if(randomnumber1 === 3){
    document.querySelector(".img1").setAttribute("src,images/dice3.png");
}
else if(randomnumber1 === 4){
    document.querySelector(".img1").setAttribute("src,images/dice4.png");
}
else if(randomnumber1 === 5){
    document.querySelector(".img1").setAttribute("src,images/dice5.png");
}else {
    document.querySelector(".img1").setAttribute("src,images/dice6.png");
}

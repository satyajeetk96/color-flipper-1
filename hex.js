const colors = ["0", "1", "2", "3", "4", "5", "6", "7","8","9","A", "B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get a random number between 0 - 3
    let randomColor = "#";
    for(let i = 0; i<6; i++){
        randomNumber = getRandomNumber();
        randomColor+=colors[randomNumber];
    }
    
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*(colors.length));
}
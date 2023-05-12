var percentage = document.getElementById("percentage");
var message = document.getElementById("message");


function formSubmit() {
    var number = Math.floor(Math.random()*100);
    percentage.innerText = `${number}%`;

    if (number === 100) {
        message.innerText = "You don't need this website to tell you that you're meant to be. Get married already!";
      } else if (number === 99 ) {
        message.innerText = "It's a match made in heaven! Congratulations, you two are soulmates.";
      } else if (number >= 95 && number < 99) {
        message.innerText = "This is some serious love! Get ready to start planning that wedding.";
      } else if (number >= 85 && number < 95) {
        message.innerText = "You two were made for each other! Don't waste any time, get together already!";
      } else if (number >= 75 && number < 85) {
        message.innerText = "Wow, you two are really hitting it off! Maybe start planning that future together?";
      } else if (number >= 60 && number < 75) {
        message.innerText = "Not bad at all! Looks like you two have some potential.";
      } else if (number > 50 && number < 60) {
        message.innerText = "Things are looking up! But let's not get ahead of ourselves just yet.";
      } else if (number === 50) {
        message.innerText = "Halfway there! You've got a 50/50 shot. Good luck!";
      } else if (number >= 45 && number < 50) {
        message.innerText = "Eh, it's a toss-up. Might be worth a shot, but don't get your hopes up.";
      } else if (number >= 30 && number < 45) {
        message.innerText = "It's not the worst, but it's not exactly a match made in heaven either. Take it or leave it?";
      } else if (number >= 20 && number < 30) {
        message.innerText = "There's a chance, but it's not looking good. Maybe try lowering your expectations?";
      } else if (number >= 5 && number < 20) {
        message.innerText = "You might want to reconsider this relationship before it crashes and burns.";
      } else if (number < 5){
        message.innerText = "Well, looks like you two are about as compatible as oil and water.";
      } 
    
    document.getElementById("results").style.display = "block";
}
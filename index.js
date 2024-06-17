// Function to show loading message
function showLoading(){
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "Rolling the dice... Good luck!";
    h1Element.style.color = "#FFA500"; // Change color to orange during loading
}


//Function to roll the dice and update the UI with results
function rollDice() {
    //create random values
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    //to create the source path for the corresponding dice image for Player 1
    var randomSource1 = "images/dice" + randomNumber1 + ".png";
    var randomChange1 = document.querySelectorAll("img")[0].setAttribute("src", randomSource1);
    console.log(randomChange1);
  
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    //to create the source path for the corresponding dice image for Player 2
    var randomSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

  
    // Determine the winner and update the <h1> element accordingly
    if (randomNumber1 > randomNumber2) {
        var playerElement1 = document.querySelector("h1")
        playerElement1.innerHTML = ":) Player1 wins!"
        playerElement1.style.color = "#dd1ac3e5";
    } else if (randomNumber1 < randomNumber2) {
        var playerElement2 = document.querySelector("h1")
        playerElement2.innerHTML = ":) Player2 wins!"
        playerElement2.style.color = "#dd1ac3e5";
    } else {
        var playerElementDraw = document.querySelector("h1")
        playerElementDraw.innerHTML = "Draw !!!"
        playerElementDraw.style.color = "#dd1ac3e5"; 
    }
  }
  


  //Add an event listener to the button to trigger the dice roll process
  document.getElementById("rollButton").addEventListener("click", function(){
    showLoading();
    //Delay the execution of rollDice by 2 seconds (2000 milliseconds)
    setTimeout(rollDice, 10000);
  });
  

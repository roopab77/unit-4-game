//Give a random number at the start of the game
//Give a random number to each of the crystal
//on click of each crystal add the value of the crystal and display on html page
//if the random number generated on the page and the sum is equal then say you win
//or say you lose
//and then reset the random number and random number for crystals too

var wins = 0;
var loses = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var randomtotal = 0;
var total = 0;
var firsttimeflag = true;
document.getElementById("NumberWins").textContent = 0;
document.getElementById("NumberLosses").textContent = 0;

function GenerateRandomTotal() {
  randomtotal = Math.floor(Math.random() * 120) + 19;
  document.getElementById("NumberToMatch").textContent = randomtotal;
}

function GenerateRandomNumberforCrystals() {
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;
}

function resetValues() {
  firsttimeflag = true;
  crystal1 = 0;
  crystal2 = 0;
  crystal3 = 0;
  crystal4 = 0;
  randomtotal = 0;
  total = 0;
  GenerateRandomNumberforCrystals();
  GenerateRandomTotal();
  document.getElementById("YourNumber").textContent = "0";
}

$(document).ready(function () {
  GenerateRandomNumberforCrystals();
  GenerateRandomTotal();

  $(".JewelStyle").on("click", function () {
      var tobeadded = 0;
      switch (this.id) {
        case "crystal_one":
          tobeadded = crystal1;
          break;
        case "crystal_two":
          tobeadded = crystal2;
          break;
        case "crystal_three":
          tobeadded = crystal3;
          break;
        case "crystal_four":
          tobeadded = crystal4;
          break;
      }

      total = total + tobeadded;
      if (total >= randomtotal & total != 0) {
        if (total == randomtotal) {
          wins = wins + 1;
          document.getElementById("NumberWins").textContent = wins;
        } else {
          loses = loses + 1;
          document.getElementById("NumberLosses").textContent = loses;
        }
        resetValues();
        return false;
      } 
      else 
      {
        document.getElementById("YourNumber").textContent = total;
      }
      }
  );
});
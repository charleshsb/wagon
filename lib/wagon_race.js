// TODO: write your code here
let number1 = 0;
let number2 = 0;
document.addEventListener("keyup", (event) => {
  const activePlayer1 = document.querySelector("#player1_race .active");
  const activePlayer2 = document.querySelector("#player2_race .active");
  if (event.key === "a" && activePlayer1.nextElementSibling && number2 < 11) {
    activePlayer1.nextElementSibling.classList.add("active");
    activePlayer1.classList.remove("active");
    number1 += 1;
    console.log(number1);
  } else if (event.key === "p" && activePlayer2.nextElementSibling && number1 < 11) {
    activePlayer2.nextElementSibling.classList.add("active");
    activePlayer2.classList.remove("active");
    number2 += 1;
  } else if (number1 === 11) {
    alert("Player 1 has won !");
    setInterval(window.location.reload(), 60000);
  } else if (number2 === 11) {
    alert("Player 2 has won !");
    setInterval(window.location.reload(), 60000);
  }
});

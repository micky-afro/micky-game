"use strict";
// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = '🥇Correct Nunmber!')
// );
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);
//   document.querySelector(".message").textContent = "🥇Correct Nunmber!";
//   if (!guess) {
//     document.querySelector(".message").textContent = "⛔ No nuber!";
//   }
// });
let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing....";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});

document.querySelector(".check").addEventListener("click", function () {
  // console.log(document.querySelector(".guess").value);
  // });
  const guess = Number(document.querySelector(".guess").value);
  // document.querySelector(".btn again").;
  // console.log(guess, typeof guess);
  // document.querySelector(".message").textContent = "🥇Correct Nunmber!";
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No nuber!";
  } else if (guess === secrateNumber) {
    document.querySelector(".message").textContent = "🥇Correct Nunmber!";
    document.querySelector(".number").textContent = secrateNumber;
    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secrateNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High ☝";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You lose the Game!!!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < secrateNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low ☝";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You lose the Game!!!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing....";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secrateNumber = Math.trunc(Math.random() * 20) + 1;
});

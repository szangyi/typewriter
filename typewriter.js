"use strict";

window.addEventListener("DOMContentLoaded", clearHTML);

const getText = document.querySelector(".typewritten").textContent;
let n = 0;

//run clearHTML
function clearHTML() {
  console.log("clearHTML");
  document.querySelector(".typewritten").textContent = "";

  loop();
}

//run loop and end it
function loop() {
  console.log("loop");

  if (n < getText.length) {
    document.querySelector(".typewritten").textContent += getText.charAt(n);
    n++;
    setTimeout(loop, 150);
  }
}

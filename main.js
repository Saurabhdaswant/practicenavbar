"use strict";

document.querySelector(".ham").addEventListener("click", function () {
  console.log("fucked up");
  document.querySelector(".nav").style.display = "block";
  document.querySelector(".ham").style.display = "none";
});

document.querySelector(".close").addEventListener("click", function () {
  console.log("fucked up");

  document.querySelector(".nav").style.display = "none";
  document.querySelector(".ham").style.display = "block";
});

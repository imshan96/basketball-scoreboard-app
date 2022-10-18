let counterHome = 0;
let countHome = document.getElementById("countHome");

function addOneHome() {
  counterHome += 1;
  countHome.textContent = counterHome;
}
function addTwoHome() {
  counterHome += 2;
  countHome.textContent = counterHome;
}
function addThreeHome() {
  counterHome += 3;
  countHome.textContent = counterHome;
}

let counterGuest = 0;
let countGuest = document.getElementById("countGuest");

function addOneGuest() {
  counterGuest += 1;
  countGuest.textContent = counterGuest;
}
function addTwoGuest() {
  counterGuest += 2;
  countGuest.textContent = counterGuest;
}
function addThreeGuest() {
  counterGuest += 3;
  countGuest.textContent = counterGuest;
}
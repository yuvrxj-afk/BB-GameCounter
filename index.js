let scoreHomeEl = document.getElementById("score-home-el");
let scoreGuestEl = document.getElementById("score-guest-el");

let countHome = 0;
let countGuest = 0;
// home
function freethrowhome() {
  countHome += 1;
  scoreHomeEl.textContent = countHome;
}
function midrangehome() {
  countHome += 2;
  scoreHomeEl.textContent = countHome;
}
function longthreehome() {
  countHome += 3;
  scoreHomeEl.textContent = countHome;
}
// guest
function freethrowguest() {
  countGuest += 1;
  scoreGuestEl.textContent = countGuest;
}
function midrangeguest() {
  countGuest += 2;
  scoreGuestEl.textContent = countGuest;
}
function longthreeguest() {
  countGuest += 3;
  scoreGuestEl.textContent = countGuest;
}

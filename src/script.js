// script.js

let funds = 50;

while(funds > 1 && funds < 100) {
  // bet

  // rolling dice

  // take money if I win
}

// helper function
// return random value under n over m
function rand(m, n) {
  return m + Math.floor((n - m + 1)*Math.random());
}

// return one of six faces
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}

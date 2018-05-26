// script.js

let funds = 50;
let round = 0;

while(funds > 1 && funds < 100) {
  round++;
  console.log(`\nround ${round}`);
  console.log(`Starting funds: ${funds}p`);

  // bet
  const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
  let totalBet = rand(1, funds);
  if(totalBet === 7) {
    totalBet === funds;
    bets.heart = totalBet;
  } else {
    let remaning = totalBet;
    do {
      let bet = rand(1, remaning);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaning = remaning - bet;
    } while ( remaning > 0);
  }
  funds = funds - totalBet;
  console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + `(total: ${totalBet} pence)`);

  // rolling dice
  const hand = [];
  for(let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`\thand: ${hand.join(', ')}`);

  // take money if I win
  let winnings = 0;
  for(let die=0; die < hand.length; die++) {
    let face = hand[die];
    if(bets[face] > 0)  winnings = winnings + bets[face];
  }
  funds = funds + winnings;
  console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

// helper function
// return random value under n over m
function rand(m, n) {
  return m + Math.floor((n - m + 1)*Math.random());
}

// return one of six faces
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}

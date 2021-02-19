const lodash = require('lodash');

export function createSecret() {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const shuffled = lodash.shuffle(options);

  return shuffled.slice(0, 4).join('');
}

export function bullsAndCows(secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess.charAt(i) === secret.charAt(i)) {
      bulls++;
      continue;
    }
    else {
      if (secret.includes(guess.charAt(i))) {
        cows++;
      }
    }
  }

  return "A" + bulls + "B" + cows;
}

export function isGameOver(guesses) {
  if (guesses.length === 8) {
    return true;
  }
}

export function isGameWon(guesses, secret) {
  if (guesses.length === 0) {
    return false;
  }
  else {
    return guesses[guesses.length - 1]['guess'] === secret;
  }
}
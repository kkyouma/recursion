function fibs(fibLength) {
  const fibNumbers = [0, 1];
  let sum;
  for (let i = 0; i < fibLength - 2; i++) {
    sum = fibNumbers[i] + fibNumbers[i + 1];
    fibNumbers.push(sum);
  }

  return fibNumbers;
}
console.log(`Loop: ${fibs(8)}`); //[0, 1, 1, 2, 3, 5, 8, 13]

function fibRec(fibLength, fibNumbers = [0, 1]) {
  if (fibNumbers.length >= fibLength) {
    return fibNumbers.slice(0, fibLength);
  }

  const sum = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
  fibNumbers.push(sum);

  return fibRec(fibLength, fibNumbers);
}
console.log(`Recursion: ${fibRec(8)}`); //[0, 1, 1, 2, 3, 5, 8, 13]


let str = "__Jenny__saw_a__seashell_down___by_the_seashore";

function getSpaces(sentence) {
  let space = [];
  let resultSpaces = "";
  let prevChar;
  for (let index = 0; index < sentence.length; index++) {
    let currentChar = sentence.charAt(index);

    if (currentChar === "_") {
      let tempResult = resultSpaces;
      resultSpaces = tempResult.concat("_");
    }

    if (
      (currentChar !== "_" && prevChar === "_") ||
      index === sentence.length - 1
    ) {
      space.push(resultSpaces);
      resultSpaces = "";
    }
    prevChar = sentence.charAt(index);
  }
  return space;
}

function getWords(sentence) {
  let tempWords = sentence.split("_");

  for (let index = 0; index < tempWords.length; index++) {
    if (tempWords[index] === "") {
      tempWords.splice(index, 1);
      index = -1;
    }
  }
  return tempWords;
}

function getReversedSentence(sentence) {
  let words = getWords(sentence);
  let spaces = getSpaces(sentence);
  let reversedWord = [];
  let wordsLength = words.length;

  if (sentence.charAt(0) !== "_") {
    for (let index = 0; index < words.length; index++) {
      wordsLength--;
      reversedWord.push(words[wordsLength]);
      reversedWord.push(spaces[index]);
    }
    return reversedWord.join("");
  }

  for (let index = 0; index < spaces.length; index++) {
    wordsLength--;
    reversedWord.push(spaces[index]);
    reversedWord.push(words[wordsLength]);
  }
  return reversedWord.join("");
}

console.log(getReversedSentence(str));

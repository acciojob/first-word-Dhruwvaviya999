function firstWord(s) {
  // your code here
	let fWord = s.split(" ")[0];
	return fWord;
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

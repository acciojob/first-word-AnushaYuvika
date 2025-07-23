function firstWord(s) {
  // your code here
	let word = '';
	for (let i=0; i<s.length; i++) {
		if (s[i] == ' ') {
			break;
		} 
		word += s[i];
	}
	return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

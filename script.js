function firstWord(s) {
  // your code here
	let word = '';
	// for (let i=0; i<s.length; i++) {
	// 	if (s[i] == ' ') {
	// 		break;
	// 	} 
	// 	word += s[i];
	// }
	while (i < s.length && s[i] === ' ') {
	    i++;
	}

   while (i < s.length && s[i] !== ' ') {
	 word += s[i];
	 i++;
   }
   return word;
}
  
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

function rot13(str) { // LBH QVQ VG!
	return str.split('')
	.map.call(str, function(char){
		let c = char.charCodeAt(0);
		if (c < 65 || c > 90){
			return String.fromCharCode(c);
		}
		else if (c < 78) {
			return String.fromCharCode(c + 13);
		}
		return String.fromCharCode(c - 13);
	}).join('');

	// str.map(function(char){
	//  c = char.charCodeAT(0);
	// })
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
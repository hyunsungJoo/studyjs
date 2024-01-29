function multiply(a, b) {
	var b = typeof b !== 'undefined' ? b : 1;
	return a * b;
}
console.log(multiply(5)); // 5

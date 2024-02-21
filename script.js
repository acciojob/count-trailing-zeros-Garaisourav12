function trailingZeros(n) {
  //your JS code here. If required.
	// Initialize count of trailing zeros
    let count = 0;

    // Keep dividing n by powers of 5 and update count
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }

    return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));

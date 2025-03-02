function flipCoin() {
    // Generate a random number (0 or 1)
    let result = Math.floor(Math.random() * 2);

    if (result === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}

// Call the function to simulate the coin flip
flipCoin();

function gamble() {
    let money = 100; 
    const goal = 200; 
    let wins = 0; 
    let bets = 0; 
  
    // While loop to continue gambling until the gambler goes broke or reaches the goal
    while (money > 0 && money < goal) {
      // Simulate placing a bet
      const betResult = Math.random() < 0.5 ? 'win' : 'lose'; 
  
      if (betResult === 'win') {
        money += 1; 
        wins += 1;
        money -= 1;
      }
  
      bets += 1; 
  
      // Print the current status
      console.log(`Bet #${bets}: Money = Rs ${money}, Wins = ${wins}`);
    }
  
    // Check the final result
    if (money >= goal) {
      console.log(`Goal reached! The gambler has Rs ${money}.`);
      console.log(`Total Bets: ${bets}, Total Wins: ${wins}`);
    } else {
      console.log("Gambler went broke.");
      console.log(`Total Bets: ${bets}, Total Wins: ${wins}`);
    }
  }
  
  // Start the gambling game
  gamble();
  
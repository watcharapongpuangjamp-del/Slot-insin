export interface SpinResult {
  reels: string[];
  win: number;
  multiplier: number;
}

export function spin(rtp: number, bet: number): SpinResult {
  const symbols = ['🍒', '🍋', '💎', '7️⃣', '⭐', '🍀'];
  const reels = [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)]
  ];
  
  let win = 0;
  let multiplier = 0;
  
  // Check for wins
  if (reels[0] === reels[1] && reels[1] === reels[2]) {
    // 3 of a kind
    const mults: Record<string, number> = { 
      '🍒': 2, 
      '🍋': 5, 
      '💎': 10, 
      '7️⃣': 25, 
      '⭐': 50, 
      '🍀': 100 
    };
    multiplier = mults[reels[0]] || 2;
    win = bet * multiplier;
  } else if (reels[0] === reels[1] || reels[1] === reels[2]) {
    // 2 consecutive symbols
    multiplier = 1.5;
    win = bet * multiplier;
  }
  
  // Adjust with RTP (Simulated behavior to approach target RTP over long term)
  // In a real simulator this would be much more complex.
  // Here we use it as a weight factor for the win amount.
  const rtpFactor = rtp / 96; // 96% is our baseline
  win = win * rtpFactor;
  
  // Add some randomness to whether a win actually happens based on RTP
  // This is a VERY simplified model for educational purposes
  const winProbability = rtp / 200; // Arbitrary probability scaling
  if (win > 0 && Math.random() > winProbability) {
    win = 0;
    multiplier = 0;
  }

  return { reels, win: Math.round(win * 100) / 100, multiplier };
}

export const randomizeStarPositions = () => {
  const root = document.documentElement;
  
  // Generate random positions for stars
  const positions = Array.from({ length: 6 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  // Apply random positions to CSS variables
  positions.forEach((pos, index) => {
    root.style.setProperty(`--x${index + 1}`, `${pos.x}%`);
    root.style.setProperty(`--y${index + 1}`, `${pos.y}%`);
  });
};

// Call the function to randomize positions
randomizeStarPositions();

// Re-randomize positions every 30 seconds
setInterval(randomizeStarPositions, 30000); 
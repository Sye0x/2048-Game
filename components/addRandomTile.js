export const addRandomTile = (grid) => {
  const emptyTiles = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] === null) {
        emptyTiles.push({ row, col });
      }
    }
  }

  if (emptyTiles.length === 0) return grid; // No space left

  const { row, col } =
    emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  grid[row][col] = Math.random() < 0.9 ? 2 : 4; // 90% chance of 2, 10% chance of 4

  return grid;
};

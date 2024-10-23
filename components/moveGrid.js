// Helper function to transpose the grid (swap rows and columns)
const transposeGrid = (grid) => {
  return grid[0].map((_, colIndex) => grid.map((row) => row[colIndex]));
};

export const moveLeft = (grid) => {
  return grid.map((row) => {
    let newRow = row.filter((box) => box !== null); // Remove empty spaces
    for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] === newRow[i + 1]) {
        newRow[i] *= 2; // Merge tiles
        newRow[i + 1] = null; // Set the next tile to null after merge
      }
    }
    newRow = newRow.filter((box) => box !== null); // Remove the merged nulls
    const emptySpaces = Array(4 - newRow.length).fill(null); // Fill remaining with null
    return [...newRow, ...emptySpaces]; // Slide numbers to the left
  });
};

export const moveRight = (grid) => {
  return grid.map((row) => {
    let newRow = row.filter((box) => box !== null); // Remove empty spaces
    for (let i = newRow.length - 1; i > 0; i--) {
      if (newRow[i] === newRow[i - 1]) {
        newRow[i] *= 2; // Merge tiles
        newRow[i - 1] = null; // Set the previous tile to null after merge
      }
    }
    newRow = newRow.filter((box) => box !== null); // Remove the merged nulls
    const emptySpaces = Array(4 - newRow.length).fill(null); // Fill remaining with null
    return [...emptySpaces, ...newRow]; // Slide numbers to the right
  });
};

export const moveUp = (grid) => {
  // Transpose the grid, move left, and transpose back
  const transposedGrid = transposeGrid(grid);
  const movedGrid = moveLeft(transposedGrid);
  return transposeGrid(movedGrid);
};

export const moveDown = (grid) => {
  // Transpose the grid, move right, and transpose back
  const transposedGrid = transposeGrid(grid);
  const movedGrid = moveRight(transposedGrid);
  return transposeGrid(movedGrid);
};

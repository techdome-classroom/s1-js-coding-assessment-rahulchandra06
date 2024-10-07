 const getTotalIsles =


  function getTotalIsles(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function for DFS
    function dfs(grid, row, col) {
        // If out of bounds or at water, return
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
            return;
        }

        // Mark the current land cell as visited by setting it to 'W'
        grid[row][col] = 'W';

        // Recursively visit all adjacent land cells (up, down, left, right)
        dfs(grid, row - 1, col); // up
        dfs(grid, row + 1, col); // down
        dfs(grid, row, col - 1); // left
        dfs(grid, row, col + 1); // right
    }

    // Iterate through each cell in the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // If we find land, it's a new island
            if (grid[row][col] === 'L') {
                islandCount++;
                // Perform DFS to mark the entire island as visited
                dfs(grid, row, col);
            }
        }
    }

    return islandCount;
}


module.exports = getTotalIsles;

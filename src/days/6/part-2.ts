import { cloneGrid, FoundLoopException, getGridWithGuardVisitedPositions, Grid, isGuard, isObstacle } from './part-1';

export function runTask(grid: Grid) {
  let nbPossibleLoops = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (isGuard(grid[i][j])) {
        continue;
      }

      if (isObstacle({ x: j, y: i }, grid)) {
        continue;
      }

      const newGrid = cloneGrid(grid);
      newGrid[i][j] = '#';

      try {
        getGridWithGuardVisitedPositions(newGrid);
      } catch (err: unknown) {
        if (err instanceof FoundLoopException) {
          nbPossibleLoops++;
        }
      }
    }
  }

  return nbPossibleLoops;
}

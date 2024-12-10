import { Point } from '../../common/point';
import { Grid } from '../../common/grid';
import { getPathsEndPoints } from './part-1';

export function runTask(grid: Grid): number {
  const startPoints = grid.filterPoints((v) => v === '0');

  return startPoints.map((startPoint) => getStartPointRating(startPoint, grid)).reduce((acc, curr) => acc + curr, 0);
}

export function getStartPointRating(startPoint: Point, grid: Grid): number {
  const reachedEndPoints = getPathsEndPoints(startPoint, grid);

  return reachedEndPoints.length;
}

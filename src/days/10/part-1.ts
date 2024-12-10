import fs from 'fs';
import { Grid } from '../../common/grid';
import { Point } from '../../common/point';

export function parseInput(inputPath: string): Grid {
  const input = fs.readFileSync(inputPath, 'utf8');

  return Grid.createGridFromStrig(input);
}

export function runTask(grid: Grid): number {
  const startPoints = grid.filterPoints((v) => v === '0');

  return startPoints.map((startPoint) => getStartPointScore(startPoint, grid)).reduce((acc, curr) => acc + curr, 0);
}

function getStartPointScore(startPoint: Point, grid: Grid): number {
  const reachedEndPoints = getPathsEndPoints(startPoint, grid);
  const distinctReachedEndPoints = new Set(reachedEndPoints.map((p) => `${p.x},${p.y}`));

  return distinctReachedEndPoints.size;
}

export function getPathsEndPoints(startPoint: Point, grid: Grid): Point[] {
  const pathsEndPoints: Point[] = [];

  const paths = [[startPoint]];
  const maxPathLength = 10;
  for (let globalPathIndex = 0; globalPathIndex < maxPathLength; globalPathIndex++) {
    for (let i = 0; i < paths.length; i++) {
      const path = paths.splice(i, 1)[0];
      const validNextPoints = getValidNextPoints(path, grid);
      for (let j = 0; j < validNextPoints.length; j++) {
        const nextPoint = validNextPoints[j];

        if (grid.getValue(nextPoint) === '9') {
          pathsEndPoints.push(nextPoint);
        } else {
          paths.push([...path, nextPoint]);
          i--; // this is needed to explore the just added path
        }
      }
    }
  }

  return pathsEndPoints;
}

function getValidNextPoints(path: Point[], grid: Grid): Point[] {
  const currentPoint = path[path.length - 1];
  const allowedValue = `${Number(grid.getValue(currentPoint)!) + 1}`;
  const possibleNextPoints = [
    currentPoint.moveUp(),
    currentPoint.moveRight(),
    currentPoint.moveDown(),
    currentPoint.moveLeft(),
  ];

  return possibleNextPoints.filter((candidatePoint) => grid.getValue(candidatePoint) === allowedValue);
}

// function printGridWithVisitedPoints(grid: Grid, visitedPaths: Point[][]): void {
//   const debugArray: string[][] = [];

//   for (let i = 0; i < grid.getHeight(); i++) {
//     debugArray[i] = [];

//     for (let j = 0; j < grid.getWidth(); j++) {
//       const value = grid.getValue(new Point(j, i));
//       debugArray[i][j] = value!;
//     }
//   }

//   for (let i = 0; i < visitedPaths.length; i++) {
//     const visitedPath = visitedPaths[i];
//     for (let j = 0; j < visitedPath.length; j++) {
//       const visitedPoint = visitedPath[j];
//       debugArray[visitedPoint.y][visitedPoint.x] = 'X';
//     }
//   }

//   console.log(debugArray.map((l) => l.join('')).join('\n'));
//   console.log('_____\n');
// }

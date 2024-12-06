import fs from 'fs';

export function parseInput(inputPath: string): string[][] {
  const input = fs.readFileSync(inputPath, 'utf8');

  return input.split('\n').map((line) => [...line]);
}

export type Grid = string[][];

type Direction = '^' | '>' | 'v' | '<';

type Position = {
  x: number;
  y: number;
};

export function cloneGrid(grid: Grid): Grid {
  return grid.map((line) => [...line]);
}

export function isGuard(char: string): boolean {
  return char === '<' || char === '>' || char === '^' || char === 'v';
}

function findGuardPosition(grid: Grid): Position {
  for (let i = 0; i < grid.length; i++) {
    const line = grid[i];
    for (let j = 0; j < line.length; j++) {
      if (isGuard(line[j])) {
        return {
          x: j,
          y: i,
        };
      }
    }
  }

  throw new Error('Guard is not in the area');
}

function isInGrid(position: Position, grid: Grid): boolean {
  return grid[position.y]?.[position.x] !== undefined;
}

export function isObstacle(position: Position, grid: Grid): boolean {
  return isInGrid(position, grid) && grid[position.y][position.x] === '#';
}

function getNewGuardPosition(direction: Direction, initialPosition: Position): Position {
  if (direction === '^') {
    return {
      x: initialPosition.x,
      y: initialPosition.y - 1,
    };
  }

  if (direction === '>') {
    return {
      x: initialPosition.x + 1,
      y: initialPosition.y,
    };
  }

  if (direction === 'v') {
    return {
      x: initialPosition.x,
      y: initialPosition.y + 1,
    };
  }

  if (direction === '<') {
    return {
      x: initialPosition.x - 1,
      y: initialPosition.y,
    };
  }

  throw new Error('Invalid direction given ' + direction);
}

function getNewGuardDirection(initialDirection: Direction): Direction {
  if (initialDirection === '^') {
    return '>';
  }

  if (initialDirection === '>') {
    return 'v';
  }

  if (initialDirection === 'v') {
    return '<';
  }

  if (initialDirection === '<') {
    return '^';
  }

  throw new Error('Invalid direction given ' + initialDirection);
}

export class FoundLoopException extends Error {}

export function getGridWithGuardVisitedPositions(inputGrid: Grid): Grid {
  const grid = cloneGrid(inputGrid);
  const guardPositionsHistory: Grid = [];

  let guardPosition: Position = findGuardPosition(grid);
  let guardDirection: Direction = grid[guardPosition.y][guardPosition.x] as Direction;

  while (isInGrid(guardPosition, grid)) {
    grid[guardPosition.y][guardPosition.x] = 'X';

    const newGuardPosition = getNewGuardPosition(guardDirection, guardPosition);
    if (isObstacle(newGuardPosition, grid)) {
      guardDirection = getNewGuardDirection(guardDirection);
    } else {
      guardPosition = newGuardPosition;
    }

    if (isInGrid(guardPosition, grid)) {
      grid[guardPosition.y][guardPosition.x] = guardDirection;
      throwIfInfiniteLoopFound(guardPositionsHistory, guardPosition, guardDirection);
    }
  }

  return grid;
}

export function runTask(grid: Grid) {
  return getGridWithGuardVisitedPositions(grid).reduce((acc, curr) => {
    return acc + (curr.join('').match(/X/g) || []).length;
  }, 0);
}

function throwIfInfiniteLoopFound(positionsHistory: Grid, nextPosition: Position, direction: Direction): void {
  if (positionsHistory[nextPosition.y] === undefined) {
    positionsHistory[nextPosition.y] = [];
  }

  if (positionsHistory[nextPosition.y][nextPosition.x] === direction) {
    throw new FoundLoopException();
  }

  if (positionsHistory[nextPosition.y][nextPosition.x] === undefined) {
    positionsHistory[nextPosition.y][nextPosition.x] = direction;
  }
}

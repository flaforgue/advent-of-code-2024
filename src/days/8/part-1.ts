import fs from 'fs';

type Frequency = string;
export type Position = {
  x: number;
  y: number;
};
type FrequencyAntennas = Map<Frequency, Position[]>;
type Grid = Frequency[][];

export type ParsedInput = { antennas: FrequencyAntennas; grid: Grid };

export function parseInput(inputPath: string): ParsedInput {
  const grid: Grid = [];
  const parsedInput: FrequencyAntennas = new Map();
  const input = fs.readFileSync(inputPath, 'utf8');

  const lines = input.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const char = line[j];

      if (grid[j] === undefined) {
        grid[j] = [];
      }

      grid[j][i] = char;

      if (char === '.') {
        continue;
      }

      if (!parsedInput.has(char)) {
        parsedInput.set(char, []);
      }

      parsedInput.get(char)?.push({ x: j, y: i });
    }
  }

  return {
    antennas: parsedInput,
    grid: grid,
  };
}

export function runTask(input: ParsedInput): number {
  return countAntinodes(input.grid, input.antennas, getAntinodesPositionsFrom);
}

export function countAntinodes(grid: Grid, antennas: FrequencyAntennas, antinodeResolver: AntinodeResolver): number {
  const allAntinodePositions = new Set();
  const gridLimit: Position = {
    x: grid[0].length,
    y: grid.length,
  };

  for (const [_frequency, antennasPositions] of antennas.entries()) {
    for (let i = 0; i < antennasPositions.length; i++) {
      const antinodesPositions = antinodeResolver(antennasPositions[i], antennasPositions, gridLimit);

      for (let j = 0; j < antinodesPositions.length; j++) {
        const { x: antinodeX, y: antinodeY } = antinodesPositions[j];
        allAntinodePositions.add(`${antinodeX},${antinodeY}`);
      }
    }
  }

  return allAntinodePositions.size;
}

type AntinodeResolver = (
  originAntennaPosition: Position,
  antennasPositions: Position[],
  gridLimit: Position,
) => Position[];

const getAntinodesPositionsFrom: AntinodeResolver = function (
  originAntennaPosition: Position,
  antennasPositions: Position[],
  gridLimit: Position,
): Position[] {
  const antinodesPositions: Position[] = [];
  for (let i = 0; i < antennasPositions.length; i++) {
    const otherAntennaPosition = antennasPositions[i];
    if (otherAntennaPosition.x === originAntennaPosition.x && otherAntennaPosition.y === originAntennaPosition.y) {
      continue;
    }

    const antinodePosition = getAntinodePosition(originAntennaPosition, otherAntennaPosition);
    if (isInGrid(antinodePosition, gridLimit)) {
      antinodesPositions.push(antinodePosition);
    }
  }

  return antinodesPositions;
};

export function getAntinodePosition(originAntennaPosition: Position, otherAntennaPosition: Position): Position {
  return {
    x: 2 * originAntennaPosition.x - otherAntennaPosition.x,
    y: 2 * originAntennaPosition.y - otherAntennaPosition.y,
  };
}

export function isInGrid(position: Position, gridLimit: Position): boolean {
  return position.x >= 0 && position.y >= 0 && position.x < gridLimit.x && position.y < gridLimit.y;
}

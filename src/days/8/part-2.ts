import { ParsedInput, Position, countAntinodes, getAntinodePosition, isInGrid } from './part-1';

export function runTask(input: ParsedInput): number {
  return countAntinodes(input.grid, input.antennas, getAntinodesPositionsFrom);
}

function getAntinodesPositionsFrom(
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

    let position1 = originAntennaPosition;
    let position2 = otherAntennaPosition;
    do {
      antinodesPositions.push(position2);
      const previousPosition1 = position1;
      position1 = getAntinodePosition(position1, position2);
      position2 = previousPosition1;
    } while (isInGrid(position2, gridLimit));
  }

  return antinodesPositions;
}

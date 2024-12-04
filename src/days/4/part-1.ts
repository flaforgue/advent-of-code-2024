import fs from 'fs';

export function parseInput(inputPath: string): string[] {
  const input = fs.readFileSync(inputPath, 'utf8');

  return input.split('\n');
}

export function runTask(lines: string[]): number {
  return getHorizontalMatches(lines) + getVerticalNbMatches(lines) + getDiagonalNbMatches(lines);
}

function getNbMatchesInString(value: string): number {
  return (value.match(/XMAS/g) ?? []).length + (value.match(/SAMX/g) ?? []).length;
}

function getHorizontalMatches(lines: string[]): number {
  return lines.reduce((acc, curr) => acc + getNbMatchesInString(curr), 0);
}

function getVerticalNbMatches(lines: string[]): number {
  let nbMatches = 0;

  const nbColumns = lines[0].length;
  const nbLines = lines.length;
  for (let x = 0; x < nbColumns; x++) {
    let column = '';
    for (let y = 0; y < nbLines; y++) {
      column += lines[y][x];
    }

    nbMatches += getNbMatchesInString(column);
  }

  return nbMatches;
}

function getDiagonalNbMatches(lines: string[]): number {
  return getDiagonalFromColumnsNbMatches(lines) + getDiagonalFromLinesNbMatches(lines);
}

function getDiagonalFromColumnsNbMatches(lines: string[]): number {
  let nbMatches = 0;

  const nbColumns = lines[0].length;
  const nbLines = lines.length;

  for (let x = 0; x < nbColumns; x++) {
    let diagonalFromTopLeft = '';
    let diagonalFromTopRight = '';

    for (let y = 0; y < nbLines; y++) {
      diagonalFromTopLeft += lines[y][x + y];
      diagonalFromTopRight += lines[y][nbColumns - 1 - x - y];
    }

    nbMatches += getNbMatchesInString(diagonalFromTopLeft);
    nbMatches += getNbMatchesInString(diagonalFromTopRight);
  }

  return nbMatches;
}

function getDiagonalFromLinesNbMatches(lines: string[]): number {
  let nbMatches = 0;

  const nbColumns = lines[0].length;
  const nbLines = lines.length;

  for (let y = 1; y < nbLines; y++) {
    let diagonalFromTopLeft = '';
    let diagonalFromTopRight = '';

    for (let x = 0; x < nbColumns; x++) {
      diagonalFromTopLeft += lines[y + x]?.[x] ?? undefined;
      diagonalFromTopRight += lines[y + x]?.[nbColumns - 1 - x] ?? undefined;
    }

    nbMatches += getNbMatchesInString(diagonalFromTopLeft);
    nbMatches += getNbMatchesInString(diagonalFromTopRight);
  }

  return nbMatches;
}

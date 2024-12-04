export function runTask(lines: string[]): number {
  let nbMatches = 0;

  for (let i = 1; i < lines.length - 1; i++) {
    const line = lines[i];

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char !== 'A') {
        continue;
      }

      const firstDiagonalValue = `${lines[i - 1][j - 1]}A${lines[i + 1][j + 1]}`;
      if (firstDiagonalValue !== 'MAS' && firstDiagonalValue !== 'SAM') {
        continue;
      }

      const secondDiagonalValue = `${lines[i - 1][j + 1]}A${lines[i + 1][j - 1]}`;
      if (secondDiagonalValue !== 'MAS' && secondDiagonalValue !== 'SAM') {
        continue;
      }

      nbMatches++;
    }
  }

  return nbMatches;
}

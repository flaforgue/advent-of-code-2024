import fs from 'fs';

export function parseInput(inputPath: string): string {
  const input = fs.readFileSync(inputPath, 'utf8');

  return input;
}

export function runTask(input: string) {
  return input;
}

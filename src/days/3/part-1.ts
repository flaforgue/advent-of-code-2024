import fs from 'fs';

export function parseInput(inputPath: string): string {
  const input = fs.readFileSync(inputPath, 'utf8');

  return input;
}

export function runTask(input: string): number {
  const regex = /mul\(([0-9]{1,3},[0-9]{1,3})\)/g;

  let total = 0;
  let match = regex.exec(input);
  while (match != null) {
    const [number1, number2] = match[1].split(',');
    total += Number(number1) * Number(number2);

    match = regex.exec(input);
  }

  return total;
}

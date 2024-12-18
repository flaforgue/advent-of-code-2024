import fs from 'fs';

export function parseInput(inputPath: string): number[] {
  const input = fs.readFileSync(inputPath, 'utf8');

  return input.split(' ').map(Number);
}

export function blinkOnStone(value: number): number[] {
  if (value === 0) {
    return [1];
  }

  const stringValue = String(value);
  if (stringValue.length % 2 === 0) {
    const splitIndex = stringValue.length / 2;
    return [Number(stringValue.substring(0, splitIndex)), Number(stringValue.substring(splitIndex))];
  }

  return [value * 2024];
}

export function blinkOnLine(line: number[]): number[] {
  const res = [];

  for (let i = 0; i < line.length; i++) {
    res.push(...blinkOnStone(line[i]));
  }

  return res;
}

export function runTask(input: number[], nbBlinks: number) {
  let line = [...input];
  for (let i = 0; i < nbBlinks; i++) {
    const start = Date.now();
    line = blinkOnLine(line);
    console.log(i, Date.now() - start + 'ms');
  }

  return line.length;
}

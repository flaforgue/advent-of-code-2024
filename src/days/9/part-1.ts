import fs from 'fs';

export function parseInput(inputPath: string): string[] {
  const input = fs.readFileSync(inputPath, 'utf8');

  let currentMemoryBlockId = -1;

  return [...input].flatMap((char: string, index: number) => {
    const isFreeBlock = index % 2 === 1;

    if (isFreeBlock) {
      return Array(Number(char)).fill('.');
    }

    currentMemoryBlockId++;

    return Array(Number(char)).fill(`${currentMemoryBlockId}`);
  });
}

export function sortMemoryBlocks(input: string[]): string[] {
  const result = [...input];

  for (let i = 0; i < input.length; i++) {
    const memoryBlockId = input[i];

    if (memoryBlockId !== '.') {
      continue;
    }

    const lastFileBlockPosition = getLastFileBlockPosition(result);
    if (lastFileBlockPosition <= i) {
      return result;
    }

    result[i] = result[lastFileBlockPosition];
    result[lastFileBlockPosition] = '.';
  }

  return result;
}

export function getLastFileBlockPosition(input: string[]): number {
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] !== '.') {
      return i;
    }
  }

  throw new Error('No file block found');
}

export function getCheckSum(memoryBlocks: string[]): number {
  return memoryBlocks.reduce((acc, curr, i) => (curr === '.' ? acc : acc + Number(curr) * i), 0);
}

export function runTask(input: string[]) {
  return getCheckSum(sortMemoryBlocks(input));
}

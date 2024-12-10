import { getCheckSum } from './part-1';

export function runTask(input: string[]) {
  return getCheckSum(sortFileBlocks(input));
}

export function sortFileBlocks(input: string[]): string[] {
  const result = [...input];

  for (let i = input.length - 1; i >= 0; i--) {
    const memoryBlockId = result[i];
    const fileBlockSize = getFileBlockSize(input, i);

    if (memoryBlockId !== '.') {
      const firstFreeSlotPosition = getFirstFreeSlotPosition(result, fileBlockSize);

      if (firstFreeSlotPosition !== -1 && firstFreeSlotPosition < i) {
        moveFileBlock(result, i, firstFreeSlotPosition, fileBlockSize);
      }
    }

    i = i - fileBlockSize + 1;
  }

  return result;
}

function getFileBlockSize(input: string[], fileBlockEnd: number): number {
  const fileBlockId = input[fileBlockEnd];
  let size = 1;
  for (let i = fileBlockEnd - 1; i >= 0; i--) {
    if (input[i] !== fileBlockId) {
      return size;
    }

    size++;
  }
  return size;
}

function getFirstFreeSlotPosition(input: string[], fileBlockSize: number): number {
  let currentFreeSlotSize = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '.') {
      currentFreeSlotSize++;
    } else {
      currentFreeSlotSize = 0;
    }

    if (currentFreeSlotSize === fileBlockSize) {
      return i - currentFreeSlotSize + 1;
    }
  }

  return -1;
}

function moveFileBlock(result: string[], fileBlockEnd: number, destinationStart: number, fileBlockSize: number): void {
  for (let i = 0; i < fileBlockSize; i++) {
    result[destinationStart + i] = result[fileBlockEnd - i];
    result[fileBlockEnd - i] = '.';
  }
}

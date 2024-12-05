import fs from 'fs';

export type Rules = Map<number, Set<number>>;
export type UpdateList = number[];

export interface SafetyManualUpdates {
  rules: Rules;
  updates: UpdateList[];
}

export function parseInput(inputPath: string): SafetyManualUpdates {
  const input = fs.readFileSync(inputPath, 'utf8');
  const parsedInput: SafetyManualUpdates = {
    rules: new Map(),
    updates: [],
  };

  for (let line of input.split('\n')) {
    if (line === '') {
      continue;
    }

    if (line.includes('|')) {
      const [key, value] = line.split('|').map(Number);

      parsedInput.rules.set(key, new Set([...(parsedInput.rules.get(key) ?? []), value]));
      continue;
    }

    parsedInput.updates.push(line.split(',').map(Number));
  }

  return parsedInput;
}

export function runTask(input: SafetyManualUpdates): number {
  let result = 0;

  for (let i = 0; i < input.updates.length; i++) {
    const updateList = input.updates[i];
    if (isValidUpdateList(updateList, input.rules)) {
      result += getMiddleValue(updateList);
    }
  }

  return result;
}

export function getMiddleValue(values: number[]): number {
  return values[Math.floor(values.length / 2)];
}

export function isValidUpdateList(updateList: UpdateList, rules: Rules): boolean {
  for (let i = 0; i < updateList.length; i++) {
    if (!isValidValue(updateList, i, rules)) {
      return false;
    }
  }

  return true;
}

export function isValidValue(updateList: UpdateList, index: number, rules: Rules): boolean {
  const mustBeAfter = rules.get(updateList[index]);
  if (mustBeAfter === undefined) {
    return true;
  }

  const previousValues = new Set(updateList.slice(0, index));
  return !hasIntersection(previousValues, mustBeAfter);
}

export function hasIntersection(firstSet: Set<number>, secondSet: Set<number>): boolean {
  return getFirstIntersectionIndex(firstSet, secondSet) !== -1;
}

export function getFirstIntersectionIndex(firstSet: Set<number>, secondSet: Set<number>): number {
  const values = [...firstSet];
  for (let i = 0; i < values.length; i++) {
    if (secondSet.has(values[i])) {
      return i;
    }
  }

  return -1;
}

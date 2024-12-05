import { getFirstIntersectionIndex, getMiddleValue, Rules, SafetyManualUpdates, UpdateList } from './part-1';

export function runTask(input: SafetyManualUpdates): number {
  let result = 0;

  for (let i = 0; i < input.updates.length; i++) {
    const updateList = input.updates[i];

    result += getFixedListValue(updateList, input.rules, 1);
  }

  return result;
}

function getFixedListValue(updateList: UpdateList, rules: Rules, nbTries: number): number {
  for (let i = 0; i < updateList.length; i++) {
    const currentValue = updateList[i];

    const mustBeAfter = rules.get(currentValue);
    if (mustBeAfter === undefined) {
      continue;
    }

    const previousValues = new Set(updateList.slice(0, i));
    const firstInvalidIndex = getFirstIntersectionIndex(previousValues, mustBeAfter);
    if (firstInvalidIndex === -1) {
      continue;
    }

    return getFixedListValue(
      [
        ...updateList.slice(0, firstInvalidIndex),
        currentValue,
        ...updateList.slice(firstInvalidIndex, i),
        ...updateList.slice(i + 1),
      ],
      rules,
      nbTries + 1,
    );
  }

  return nbTries > 1 ? getMiddleValue(updateList) : 0;
}

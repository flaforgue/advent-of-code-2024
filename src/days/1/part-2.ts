import { Lists } from './part-1';

export function runTask(lists: Lists) {
  let similarity = 0;

  const nbOccurrences = new Map();
  const rightList = lists.list2;

  for (let i = 0; i < rightList.length; i++) {
    const key = rightList[i];
    nbOccurrences.set(key, (nbOccurrences.get(key) ?? 0) + 1);
  }

  const leftList = lists.list1;
  for (let i = 0; i < leftList.length; i++) {
    const key = leftList[i];
    similarity += key * (nbOccurrences.get(key) ?? 0);
  }

  return similarity;
}

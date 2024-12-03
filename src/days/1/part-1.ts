import fs from 'fs';

export type Lists = {
  list1: number[];
  list2: number[];
};

export function parseInput(inputPath: string): Lists {
  const input = fs.readFileSync(inputPath, 'utf8');

  const result: Lists = {
    list1: [],
    list2: [],
  };
  for (let line of input.split('\n')) {
    const values = line.split('   ');
    result.list1.push(Number(values[0]));
    result.list2.push(Number(values[1]));
  }

  return result;
}

export function runTask(lists: Lists) {
  let distance = 0;

  const sortedList1 = lists.list1.sort();
  const sortedList2 = lists.list2.sort();

  for (let i = 0; i < sortedList1.length; i++) {
    distance += Math.abs(sortedList1[i] - sortedList2[i]);
  }

  return distance;
}

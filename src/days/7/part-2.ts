import { Calibration, isSolvable, Operation } from './part-1';

export function runTask(input: Calibration[]): number {
  const operations: Operation[] = [
    {
      symbol: '+',
      handler: (a, b) => a + b,
    },
    {
      symbol: 'x',
      handler: (a, b) => a * b,
    },
    {
      symbol: '||',
      handler: (a, b) => Number(`${a}${b}`),
    },
  ];

  return input.reduce((acc, curr) => {
    return isSolvable(curr, operations) ? acc + curr.testValue : acc;
  }, 0);
}

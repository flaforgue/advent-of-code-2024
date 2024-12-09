import fs from 'fs';

export type Calibration = {
  testValue: number;
  equation: number[];
};

export type Operation = {
  handler: (a: number, b: number) => number;
  symbol: string;
};

export function parseInput(inputPath: string): Calibration[] {
  const input = fs.readFileSync(inputPath, 'utf8');

  return input.split('\n').reduce((acc, curr): Calibration[] => {
    const [testValue, equationString] = curr.split(':').map((s) => s.trim());

    return [
      ...acc,
      {
        testValue: Number(testValue),
        equation: equationString.split(' ').map(Number),
      },
    ];
  }, [] as Calibration[]);
}

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
  ];

  return input.reduce((acc, curr) => {
    return isSolvable(curr, operations) ? acc + curr.testValue : acc;
  }, 0);
}

export function isSolvable(calibration: Calibration, operations: Operation[]): boolean {
  const nbOperations = calibration.equation.length - 1;
  const nbPossibilities = Math.pow(operations.length, nbOperations);
  for (let i = 0; i < nbPossibilities; i++) {
    if (isEquationValid(calibration, getPossibilityOperations(i, nbOperations, operations))) {
      return true;
    }
  }

  return false;
}

function isEquationValid(calibration: Calibration, operations: Operation[]): boolean {
  const values = calibration.equation;
  let result = values[0];

  for (let i = 1; i < values.length; i++) {
    result = operations[i - 1].handler(result, values[i]);
    if (result > calibration.testValue) {
      return false;
    }
  }

  return result === calibration.testValue;
}

function getPossibilityOperations(
  possibilityIndex: number,
  nbOperations: number,
  operations: Operation[],
): Operation[] {
  return possibilityIndex
    .toString(operations.length)
    .padStart(nbOperations, '0')
    .split('')
    .map((i) => operations[Number(i)]);
}

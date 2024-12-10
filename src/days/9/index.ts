import { runWithTimer } from '../../utils';
import { parseInput, runTask as runTask1 } from './part-1';
import { runTask as runTask2 } from './part-2';

console.info(`Day 9 started`);

const parsedInput = runWithTimer(() => parseInput(`${__dirname}/input.txt`));
console.info(`Input parsed`);

const solution1 = runWithTimer(() => runTask1(parsedInput));
console.info(`Part 1 solution is ${solution1}`);

const solution2 = runWithTimer(() => runTask2(parsedInput));
console.info(`Part 2 solution is ${solution2}`);

console.info(`Day 9 ended`);

import { runWithTimer } from '../../utils';
import { parseInput, runTask as runTask } from './part-1';
// import { runTask as runTask2 } from './part-2';

console.info(`Day 11 started`);

const parsedInput = runWithTimer(() => parseInput(`${__dirname}/input.txt`));
console.info(`Input parsed`);

const solution1 = runWithTimer(() => runTask(parsedInput, 25));
console.info(`Part 1 solution is ${solution1}`);

const solution2 = runWithTimer(() => runTask(parsedInput, 75));
console.info(`Part 2 solution is ${solution2}`);

console.info(`Day 11 ended`);

import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-2';
import { Grid } from '../../../common/grid';

suite('Day 10 - part 2', () => {
  describe('runTask', () => {
    it('should return the correct result when advent of code example #1 given', () => {
      const input = new Grid([
        ['.', '.', '.', '.', '.', '0', '.'],
        ['.', '.', '4', '3', '2', '1', '.'],
        ['.', '.', '5', '.', '.', '2', '.'],
        ['.', '.', '6', '5', '4', '3', '.'],
        ['.', '.', '7', '.', '.', '4', '.'],
        ['.', '.', '8', '7', '6', '5', '.'],
        ['.', '.', '9', '.', '.', '.', '.'],
      ]);

      const result = runTask(input);

      assert.strictEqual(result, 3);
    });

    it('should return the correct result when advent of code example #2 given', () => {
      const input = new Grid([
        ['.', '.', '9', '0', '.', '.', '9'],
        ['.', '.', '.', '1', '.', '9', '8'],
        ['.', '.', '.', '2', '.', '.', '7'],
        ['6', '5', '4', '3', '4', '5', '6'],
        ['7', '6', '5', '.', '9', '8', '7'],
        ['8', '7', '6', '.', '.', '.', '.'],
        ['9', '8', '7', '.', '.', '.', '.'],
      ]);

      const result = runTask(input);

      assert.strictEqual(result, 13);
    });

    it('should return the correct result when advent of code example #3 given', () => {
      const input = new Grid([
        ['0', '1', '2', '3', '4', '5'],
        ['1', '2', '3', '4', '5', '6'],
        ['2', '3', '4', '5', '6', '7'],
        ['3', '4', '5', '6', '7', '8'],
        ['4', '.', '6', '7', '8', '9'],
        ['5', '6', '7', '8', '9', '.'],
      ]);

      const result = runTask(input);

      assert.strictEqual(result, 227);
    });

    it('should return the correct result when advent of code example #4 given', () => {
      const input = new Grid([
        ['8', '9', '0', '1', '0', '1', '2', '3'],
        ['7', '8', '1', '2', '1', '8', '7', '4'],
        ['8', '7', '4', '3', '0', '9', '6', '5'],
        ['9', '6', '5', '4', '9', '8', '7', '4'],
        ['4', '5', '6', '7', '8', '9', '0', '3'],
        ['3', '2', '0', '1', '9', '0', '1', '2'],
        ['0', '1', '3', '2', '9', '8', '0', '1'],
        ['1', '0', '4', '5', '6', '7', '3', '2'],
      ]);

      const result = runTask(input);

      assert.strictEqual(result, 81);
    });
  });
});

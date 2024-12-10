import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask } from '../part-1';
import { Grid } from '../../../common/grid';
import { Point } from '../../../common/point';

suite('Day 10 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return the first line as the first grid row', () => {
      const grid = parseInput(sampleInputPath);

      assert.strictEqual(grid.getValue(new Point(0, 0)), '9');
      assert.strictEqual(grid.getValue(new Point(1, 0)), '8');
    });

    it('should return the second line as the second grid row', () => {
      const grid = parseInput(sampleInputPath);

      assert.strictEqual(grid.getValue(new Point(0, 1)), '3');
      assert.strictEqual(grid.getValue(new Point(1, 1)), '4');
    });
  });

  describe('runTask', () => {
    describe('when one row with one start point given', () => {
      it('should return 0 if the only path given is not increasing', () => {
        const input = new Grid([['0', '1', '1']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the only path given is increasing too much', () => {
        const input = new Grid([['0', '2']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the only path given is decreasing', () => {
        const input = new Grid([['0', '1', '2', '1']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the only path given stops before 9', () => {
        const input = new Grid([['0', '1', '2', '3', '4', '5', '6', '7', '8']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 1 if the path is valid', () => {
        const input = new Grid([['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']]);

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });
    });

    describe('when one column with one start point given', () => {
      it('should return 0 if the only path given is not increasing', () => {
        const input = new Grid([['0'], ['1'], ['1']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the only path given is increasing too much', () => {
        const input = new Grid([['0'], ['2']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the only path given is decreasing', () => {
        const input = new Grid([['0'], ['1'], ['2'], ['1']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the only path given stops before 9', () => {
        const input = new Grid([['0'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8']]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 1 if the path is valid', () => {
        const input = new Grid([['0'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9']]);

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });
    });

    describe('when multiple rows and multiple columns with only one start point given', () => {
      it('should return 0 if no valid path', () => {
        const input = new Grid([
          ['0', '2', '3'],
          ['2', '7', '4'],
          ['8', '6', '5'],
          ['9', '8', '7'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 1 if one valid path to one end point', () => {
        const input = new Grid([
          ['0', '1', '2'],
          ['5', '4', '3'],
          ['6', '7', '8'],
          ['.', '.', '9'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 1 if two valid paths to the same end point', () => {
        const input = new Grid([
          ['0', '1', '2', '3', '4', '5', '6', '7'],
          ['1', '.', '.', '.', '.', '.', '.', '8'],
          ['2', '3', '4', '5', '6', '7', '8', '9'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 if two valid paths to 2 distinct end points', () => {
        const input = new Grid([
          ['0', '1', '2', '3', '4', '5', '6', '7'],
          ['1', '.', '.', '.', '.', '.', '.', '8'],
          ['2', '3', '4', '5', '6', '7', '.', '9'],
          ['.', '.', '.', '.', '.', '8', '9', '.'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });
    });

    describe('when multiple rows and multiple columns with two start points given', () => {
      it('should return 0 if no valid path', () => {
        const input = new Grid([
          ['0', '2', '0'],
          ['2', '7', '4'],
          ['8', '6', '5'],
          ['9', '8', '7'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 2 if each start point has one valid path to distinct end points', () => {
        const input = new Grid([
          ['0', '1', '2', '.', '0', '1', '2'],
          ['5', '4', '3', '.', '5', '4', '3'],
          ['6', '7', '8', '.', '6', '7', '8'],
          ['.', '.', '9', '.', '.', '.', '9'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 2 if each start point has one valid path to the same end point', () => {
        const input = new Grid([
          ['0', '1', '2', '3', '4', '5', '6', '7'],
          ['.', '.', '.', '.', '.', '.', '.', '8'],
          ['.', '.', '.', '.', '.', '.', '.', '9'],
          ['.', '.', '.', '.', '.', '.', '.', '8'],
          ['0', '1', '2', '3', '4', '5', '6', '7'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 2 if two valid paths to 2 distinct end points', () => {
        const input = new Grid([
          ['0', '1', '2', '3', '4', '5', '6', '7'],
          ['1', '.', '.', '.', '.', '.', '.', '8'],
          ['2', '3', '4', '5', '6', '7', '.', '9'],
          ['.', '.', '.', '.', '.', '8', '9', '.'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return the correct result when advent of code example #1 given', () => {
        const input = new Grid([
          ['0', '1', '2', '3'],
          ['1', '2', '3', '4'],
          ['8', '7', '6', '5'],
          ['9', '8', '7', '6'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return the correct result when advent of code example #2 given', () => {
        const input = new Grid([
          ['.', '.', '.', '0', '.', '.', '.'],
          ['.', '.', '.', '1', '.', '.', '.'],
          ['.', '.', '.', '2', '.', '.', '.'],
          ['6', '5', '4', '3', '4', '5', '6'],
          ['7', '.', '.', '.', '.', '.', '7'],
          ['8', '.', '.', '.', '.', '.', '8'],
          ['9', '.', '.', '.', '.', '.', '9'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return the correct result when advent of code example #3 given', () => {
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

        assert.strictEqual(result, 4);
      });

      it('should return the correct result when advent of code example #4 given', () => {
        const input = new Grid([
          ['1', '0', '.', '.', '9', '.', '.'],
          ['2', '.', '.', '.', '8', '.', '.'],
          ['3', '.', '.', '.', '7', '.', '.'],
          ['4', '5', '6', '7', '6', '5', '4'],
          ['.', '.', '.', '8', '.', '.', '3'],
          ['.', '.', '.', '9', '.', '.', '2'],
          ['.', '.', '.', '.', '.', '0', '1'],
        ]);

        const result = runTask(input);

        assert.strictEqual(result, 3);
      });

      it('should return the correct result when advent of code example #5 given', () => {
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

        assert.strictEqual(result, 36);
      });
    });
  });
});

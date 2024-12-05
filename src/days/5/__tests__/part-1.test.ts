import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask } from '../part-1';

suite('Day 1 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return the first rule in the rules map', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.rules.get(69), new Set([26]));
    });

    it('should return the second rule in the rules map', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.rules.get(41), new Set([84]));
    });

    it('should return the correct number of rules', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.rules.size, 2);
    });

    it('should return the first updates list in the first value of the updates array', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.updates[0], [57, 47, 82, 32, 18]);
    });

    it('should return the second updates list in the second value of the updates array', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.updates[1], [74, 56, 86, 81, 84, 44, 53, 92, 12, 36, 15, 66, 95, 26, 71]);
    });

    it('should return the correct number of updates list', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.updates.length, 2);
    });
  });

  describe('runTask', () => {
    describe('when no constraint given', () => {
      it('should return the middle number when one updates list with 3 values given', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3]],
        };

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return the middle number when one updates list with 5 values given', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3, 5, 4]],
        };

        const result = runTask(input);

        assert.strictEqual(result, 3);
      });

      it('should return the sum of middle numbers when two updates lists given', () => {
        const input = {
          rules: new Map(),
          updates: [
            [1, 2, 3],
            [4, 5, 6],
          ],
        };

        const result = runTask(input);

        assert.strictEqual(result, 7);
      });
    });

    describe('when constraints given', () => {
      it('should return 0 if the first update value breaks the only constraint given', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3]],
        };
        input.rules.set(2, new Set([1]));

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the first update value breaks the first one of the the constraints given', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3]],
        };
        input.rules.set(2, new Set([3, 1]));

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return 0 if the first update value breaks the last one of the the constraints given', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3]],
        };
        input.rules.set(2, new Set([1, 3]));

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });
    });
  });
});

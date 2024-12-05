import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-2';

suite('Day 5 - part 2', () => {
  describe('runTask', () => {
    describe('when only one invalid update list given', () => {
      it('should return the middle number after fix when one value is misplaced of one position', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3]],
        };
        input.rules.set(2, new Set([1]));

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return the middle number after fix when one value is misplaced of two positions', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3, 4, 5]], // 5, 1, 2, 3, 4
        };
        input.rules.set(5, new Set([1]));

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return the middle number after fix when two values are misplaced', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3, 4, 5]], // 5, 1, 3, 2, 4
        };
        input.rules.set(3, new Set([2]));
        input.rules.set(5, new Set([1]));

        const result = runTask(input);

        assert.strictEqual(result, 3);
      });

      it('should return the middle number after fix when two values are misplaced in cascade', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3, 4, 5]], // 5, 3, 1, 2, 4
        };
        input.rules.set(3, new Set([1]));
        input.rules.set(5, new Set([3]));

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return the middle number after fix when two values are misplaced in reverse cascade', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3, 4, 5]],
        };
        input.rules.set(5, new Set([1]));
        input.rules.set(3, new Set([5]));

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return the middle number after fix when one value is misplaced in sandwich', () => {
        const input = {
          rules: new Map(),
          updates: [[1, 2, 3, 4, 5]], // 1, 4, 5, 3, 2
        };
        input.rules.set(3, new Set([2]));
        input.rules.set(4, new Set([5]));
        input.rules.set(5, new Set([3]));

        const result = runTask(input);

        assert.strictEqual(result, 5);
      });
    });

    describe('when two invalid update lists given', () => {
      it('should return the sum of the middle numbers', () => {
        const input = {
          rules: new Map(),
          updates: [
            [1, 2, 3],
            [1, 2, 3],
          ],
        };
        input.rules.set(2, new Set([1]));

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });
    });
  });
});

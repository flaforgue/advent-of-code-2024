import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-2';

suite('Day 1 - part 2', () => {
  describe('runTask', () => {
    describe('when empty arrays given', () => {
      it('should return 0 when empty arrays given', () => {
        const list1: number[] = [];
        const list2: number[] = [];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 0);
      });
    });

    describe('when single value arrays given', () => {
      it('should return 0 when values are different', () => {
        const list1: number[] = [1];
        const list2: number[] = [2];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 0);
      });

      it('should return the first value when values are equal', () => {
        const list1: number[] = [1];
        const list2: number[] = [1];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 1);
      });
    });

    describe('when multiple values arrays given', () => {
      it('should return the sum of the first array values when values are all equal', () => {
        const list1: number[] = [1, 2, 3];
        const list2: number[] = [1, 2, 3];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 6);
      });

      it('should return 0 when values are all different', () => {
        const list1: number[] = [1, 2, 3];
        const list2: number[] = [4, 5, 6];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 0);
      });

      it('should multiply the values by the number of occurrences in the second array', () => {
        const list1: number[] = [1, 0, 1];
        const list2: number[] = [0, 1, 1];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 4);
      });
    });
  });
});

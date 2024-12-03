import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask } from '../part-1';

suite('Day 1 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return the first value of the first line in the first value of the first array', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.list1[0], 49744);
    });

    it('should return the second value of the first line in the first value of the second array', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.list2[0], 57964);
    });

    it('should return the first value of the second line in the second value of the first array', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.list1[1], 20738);
    });

    it('should return the second value of the second line in the second value of the second array', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.list2[1], 85861);
    });
  });

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
      it('should return 0 when the first value is equal to the second value', () => {
        const list1: number[] = [1];
        const list2: number[] = [1];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 0);
      });

      it('should return the difference when the first value is greated than the second value', () => {
        const list1 = [2];
        const list2 = [1];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 1);
      });

      it('should return the difference when the first value is lower than the second value', () => {
        const list1 = [1];
        const list2 = [2];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 1);
      });
    });

    describe('when multiple value arrays given', () => {
      it('should return 0 when all values are equal', () => {
        const list1 = [1, 2, 3];
        const list2 = [1, 2, 3];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 0);
      });

      it('should return 0 when all values are equal with sort', () => {
        const list1 = [1, 2, 3];
        const list2 = [3, 2, 1];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 0);
      });

      it('should return the correct distance when no sort is needed', () => {
        const list1 = [1, 2, 3];
        const list2 = [11, 2, 33];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 40);
      });

      it('should return the correct distance when sort is needed', () => {
        const list1 = [1, 2, 3];
        const list2 = [2, 11, 33];

        const result = runTask({ list1, list2 });

        assert.strictEqual(result, 40);
      });
    });
  });
});

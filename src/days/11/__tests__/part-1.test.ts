import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { blinkOnLine, blinkOnStone, parseInput, runTask } from '../part-1';

suite.only('Day 11 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return an array with each number as a value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput, [2, 77706, 5847, 9258441, 0, 741, 883933, 12]);
    });
  });

  describe('blinkOnStone', () => {
    it('should return 1 when the given value is 0', () => {
      const value = 0;

      const result = blinkOnStone(value);

      assert.deepStrictEqual(result, [1]);
    });

    it('should return 2 values when the given value has an even number of digits', () => {
      const value = 1234;

      const result = blinkOnStone(value);

      assert.deepStrictEqual(result, [12, 34]);
    });

    it('should return 2024 when the given value is 1', () => {
      const value = 1;

      const result = blinkOnStone(value);

      assert.deepStrictEqual(result, [2024]);
    });
  });

  describe('blinkOnLine', () => {
    it('should return the correct value for example #1 - blink 1', () => {
      const value = [125, 17];

      const result = blinkOnLine(value);

      assert.deepStrictEqual(result, [253000, 1, 7]);
    });

    it('should return the correct value for example #1 - blink 2', () => {
      const value = [253000, 1, 7];

      const result = blinkOnLine(value);

      assert.deepStrictEqual(result, [253, 0, 2024, 14168]);
    });

    it('should return the correct value for example #1 - blink 3', () => {
      const value = [253, 0, 2024, 14168];

      const result = blinkOnLine(value);

      assert.deepStrictEqual(result, [512072, 1, 20, 24, 28676032]);
    });

    it('should return the correct value for example #1 - blink 4', () => {
      const value = [512072, 1, 20, 24, 28676032];

      const result = blinkOnLine(value);

      assert.deepStrictEqual(result, [512, 72, 2024, 2, 0, 2, 4, 2867, 6032]);
    });

    it('should return the correct value for example #1 - blink 5', () => {
      const value = [512, 72, 2024, 2, 0, 2, 4, 2867, 6032];

      const result = blinkOnLine(value);

      assert.deepStrictEqual(result, [1036288, 7, 2, 20, 24, 4048, 1, 4048, 8096, 28, 67, 60, 32]);
    });

    it('should return the correct value for example #1 - blink 6', () => {
      const value = [1036288, 7, 2, 20, 24, 4048, 1, 4048, 8096, 28, 67, 60, 32];

      const result = blinkOnLine(value);

      assert.deepStrictEqual(
        result,
        [2097446912, 14168, 4048, 2, 0, 2, 4, 40, 48, 2024, 40, 48, 80, 96, 2, 8, 6, 7, 6, 0, 3, 2],
      );
    });
  });

  describe('runTask', () => {
    it('should return the correct value for example #1', () => {
      const value = [125, 17];

      const result = runTask(value, 6);

      assert.deepStrictEqual(result, 22);
    });
  });
});

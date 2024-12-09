import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask } from '../part-1';

suite('Day 7 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return the first line testValue in the testValue key of the first array value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput[0].testValue, 80453);
    });

    it('should return all the first line equation in the equation key of the first array value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput[0].equation[0], 65);
      assert.strictEqual(parsedInput[0].equation[1], 232);
      assert.strictEqual(parsedInput[0].equation[2], 17);
      assert.strictEqual(parsedInput[0].equation[3], 4);
      assert.strictEqual(parsedInput[0].equation[4], 253);
      assert.strictEqual(parsedInput[0].equation[5], 1);
      assert.strictEqual(parsedInput[0].equation[6], 1);
      assert.strictEqual(parsedInput[0].equation.length, 7);
    });

    it('should return as much array values as lines', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.length, 2);
    });

    it('should return the second line testValue in the testValue key of the second array value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput[1].testValue, 11072880);
    });

    it('should return all the second line equation in the equation key of the second array value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput[1].equation[0], 9);
      assert.strictEqual(parsedInput[1].equation[1], 5);
      assert.strictEqual(parsedInput[1].equation[2], 91);
      assert.strictEqual(parsedInput[1].equation[3], 338);
      assert.strictEqual(parsedInput[1].equation[4], 8);
    });
  });

  describe('runTask', () => {
    describe('when one calibration given', () => {
      describe('when two values given', () => {
        it('should return the test value when the operation can be resolved with + or *', () => {
          const input = [
            {
              testValue: 3,
              equation: [1, 2],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 3);
        });

        it('should return 0 when the operation cannot be resolved with +', () => {
          const input = [
            {
              testValue: 3,
              equation: [1, 1],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 0);
        });

        it('should return the test value when the operation can be resolved with *', () => {
          const input = [
            {
              testValue: 2,
              equation: [1, 2],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 2);
        });
      });

      describe('when three values given', () => {
        it('should return the test value when the operation can be resolved with only +', () => {
          const input = [
            {
              testValue: 3,
              equation: [1, 1, 1],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 3);
        });

        it('should return the test value when the operation can be resolved with only *', () => {
          const input = [
            {
              testValue: 1,
              equation: [1, 1, 1],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 1);
        });

        it('should return the test value when the operation can be resolved with * and +', () => {
          const input = [
            {
              testValue: 5,
              equation: [1, 2, 3],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 5);
        });

        it('should return the test value when the operation can be resolved with + and *', () => {
          const input = [
            {
              testValue: 6,
              equation: [3, 2, 1],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 6);
        });
      });
    });

    describe('when two calibrations given', () => {
      it('should return 0 when no operation can be resolved', () => {
        const input = [
          {
            testValue: 3,
            equation: [1, 1],
          },
          {
            testValue: 3,
            equation: [1, 4],
          },
        ];

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });

      it('should return the sum of the operations than can be resolved', () => {
        const input = [
          {
            testValue: 3,
            equation: [1, 3],
          },
          {
            testValue: 1,
            equation: [1, 1],
          },
          {
            testValue: 3,
            equation: [1, 4],
          },
        ];

        const result = runTask(input);

        assert.strictEqual(result, 4);
      });
    });
  });
});

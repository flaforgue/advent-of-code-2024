import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-2';

suite.only('Day 7 - part 2', () => {
  describe('runTask', () => {
    describe('when one calibration given', () => {
      describe('when two values given', () => {
        it('should return the test value when the operation can be resolved with ||', () => {
          const input = [
            {
              testValue: 12,
              equation: [1, 2],
            },
          ];

          const result = runTask(input);

          assert.strictEqual(result, 12);
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

        // it('should return the test value when the operation can be resolved with *', () => {
        //   const input = [
        //     {
        //       testValue: 2,
        //       equation: [1, 2],
        //     },
        //   ];

        //   const result = runTask(input);

        //   assert.strictEqual(result, 2);
        // });
      });
    });
  });
});

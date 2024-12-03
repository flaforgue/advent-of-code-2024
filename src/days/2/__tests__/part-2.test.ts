import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-2';

suite('Day 2 - part 2', () => {
  describe('runTask', () => {
    describe('when only one invalid report is given', () => {
      it('should return 0 when the problem is not dampenable', () => {
        const report = '0 5 10';

        const result = runTask(report);

        assert.strictEqual(result, 0);
      });

      it('should return 1 when the first two values are equal', () => {
        const report = '0 0 1';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when the last two values are equal', () => {
        const report = '1 0 0';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when two values in the middle are equal', () => {
        const report = '1 2 2 3';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the first value is wrong in an increasing report', () => {
        const report = '2 1 2 3';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the last value is wrong in an increasing report', () => {
        const report = '1 2 3 2';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only one value in the middle is wrong in an increasing report', () => {
        const report = '1 2 1 3';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the first value is wrong in an decreasing report', () => {
        const report = '1 3 2 1';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the last value is wrong in an decreasing report', () => {
        const report = '3 2 1 4';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only one value in the middle is wrong in an decreasing report', () => {
        const report = '3 4 2 1';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the second value increases by more than 3', () => {
        const report = '1 5 6';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the last value increases by more than 3', () => {
        const report = '1 2 6';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the second value decreases by more than 3', () => {
        const report = '6 2 1';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when only the last value decreases by more than 3', () => {
        const report = '6 5 1';

        const result = runTask(report);

        assert.strictEqual(result, 1);
      });
    });
  });
});

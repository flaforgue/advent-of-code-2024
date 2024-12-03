import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask } from '../part-1';

suite('Day 2 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('returns the content as a string', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput, '35 37 38 41 43 41\n64 66 69 71 72 72');
    });
  });

  describe('runTask', () => {
    describe('when only one report given', () => {
      it('should return 0 if values are increasing then decreasing', () => {
        const report = '1 2 3 2';

        const result = runTask(report);

        assert.strictEqual(0, result);
      });

      it('should return 0 if values are decreasing then increasing', () => {
        const report = '3 2 1 2';

        const result = runTask(report);

        assert.strictEqual(0, result);
      });

      it('should return 0 if two consecutive values are equal', () => {
        const report = '0 1 1';

        const result = runTask(report);

        assert.strictEqual(0, result);
      });

      it('should return 0 if one value increases by more than 3', () => {
        const report = '0 4';

        const result = runTask(report);

        assert.strictEqual(0, result);
      });

      it('should return 0 if one value decreases by more than 3', () => {
        const report = '4 0';

        const result = runTask(report);

        assert.strictEqual(0, result);
      });
    });

    describe('when multiple reports given', () => {
      it('should return 0 when no valid report', () => {
        const reports = [
          '1 2 3 2', // increasing then decreasing
          '3 2 1 2', // decreasing then increasing
          '0 1 1', // two values neither increasing or decreasing
          '0 4', // two values increasing by more than 3
          '4 0', // two values decreasing by more than 3
        ];

        const result = runTask(reports.join('\n'));

        assert.strictEqual(0, result);
      });

      it('should return 2 when 2 reports are valid', () => {
        const reports = ['1 2 3', '1 2 3', '1 1'];

        const result = runTask(reports.join('\n'));

        assert.strictEqual(2, result);
      });
    });
  });
});

import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask } from '../part-1';

suite('Day xxx - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return xxx', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput, 'xxx');
    });
  });

  describe('runTask', () => {
    describe('when xxx', () => {
      it('should xxx', () => {
        const input = 'xxx';

        const result = runTask(input);

        assert.strictEqual(result, 'xxx');
      });
    });
  });
});

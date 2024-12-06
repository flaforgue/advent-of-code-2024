import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-2';

suite('Day 6 - part 2', () => {
  describe('runTask', () => {
    it('should return 0 when no loop is possible', () => {
      const input = [['>', '.', '#']];

      const result = runTask(input);

      assert.strictEqual(result, 0);
    });

    it('should return 1 when one loop is possible', () => {
      const input = [
        ['.', 'O', '>', '.', '#'],
        ['.', '.', '.', '.', '#'],
        ['#', '.', '.', '.', '.'],
        ['.', '.', '.', '#', '.'],
      ];

      const result = runTask(input);

      assert.strictEqual(result, 1);
    });

    it('should return 1 when one loop is possible with only rotation points', () => {
      const input = [
        ['.', 'O', '>', '#'],
        ['.', '.', '.', '#'],
        ['#', '.', '.', '.'],
        ['.', '.', '#', '.'],
      ];

      const result = runTask(input);

      assert.strictEqual(result, 1);
    });

    it('should return 0 when the only loop possible is the initial guard position', () => {
      const input = [
        ['.', '>', '.', '#'],
        ['.', '.', '.', '#'],
        ['#', '.', '.', '.'],
        ['.', '.', '#', '.'],
      ];

      const result = runTask(input);

      assert.strictEqual(result, 0);
    });

    it('should return 6 like in the example', () => {
      const input = [
        ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '#', '.', 'O', '^', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ];

      const result = runTask(input);

      assert.strictEqual(result, 6);
    });
  });
});

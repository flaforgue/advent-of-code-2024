import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-1';

suite('Day 3 - part 1', () => {
  describe('runTask', () => {
    describe('when one single valid instruction given', () => {
      it('should return the result when the instruction is valid with one digit numbers', () => {
        const result = runTask('mul(1,2)');

        assert.strictEqual(result, 2);
      });

      it('should return the result when the instruction is valid with two digit numbers', () => {
        const result = runTask('mul(11,22)');

        assert.strictEqual(result, 242);
      });

      it('should return the result when the instruction is valid with three digit numbers', () => {
        const result = runTask('mul(111,222)');

        assert.strictEqual(result, 24642);
      });

      it('should return the result when the instruction is valid with a mix of digit numbers', () => {
        const result = runTask('mul(1,666)');

        assert.strictEqual(result, 666);
      });
    });

    describe('when one single invalid instruction given', () => {
      it('should return 0 when the instruction does not start with mul', () => {
        const result = runTask('mal(1,2)');

        assert.strictEqual(result, 0);
      });

      it('should return 0 when the instruction has a character between mul and parenthesis', () => {
        const result = runTask('mula(1,2)');

        assert.strictEqual(result, 0);
      });

      it('should return 0 when the instruction does not have an opening parenthesis', () => {
        const result = runTask('mul1,2)');

        assert.strictEqual(result, 0);
      });

      it('should return 0 when the instruction does not have an closing parenthesis', () => {
        const result = runTask('mul(1,2');

        assert.strictEqual(result, 0);
      });

      it('should return 0 when the instruction has the first value with more than 3 digits', () => {
        const result = runTask('mul(1111,2)');

        assert.strictEqual(result, 0);
      });

      it('should return 0 when the instruction has the last value with more than 3 digits', () => {
        const result = runTask('mul(1,2222)');

        assert.strictEqual(result, 0);
      });

      it('should return 0 when the instruction has both values with more than 3 digits', () => {
        const result = runTask('mul(1111,2222)');

        assert.strictEqual(result, 0);
      });
    });

    describe('when multiple instructions given', () => {
      it('should return the total when 2 valid instructions are given', () => {
        const result = runTask('mul(1,2)mul(2,1)');

        assert.strictEqual(result, 4);
      });
    });

    describe('when multiple instructions given', () => {
      it('should return the total of only valid instructions when some of the instructions given are valid', () => {
        const result = runTask('mul(1,)mul(1,2)mul(2,1)');

        assert.strictEqual(result, 4);
      });
    });
  });
});

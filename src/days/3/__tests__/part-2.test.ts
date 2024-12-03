import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { runTask } from '../part-2';

suite('Day 3 - part 2', () => {
  describe('runTask', () => {
    describe('when one single valid instruction is given', () => {
      it("should return the result when it's not prefixed", () => {
        const result = runTask('mul(1,2)');

        assert.strictEqual(result, 2);
      });

      it("should return 0 when it's prefixed with don't()", () => {
        const result = runTask("don't()mul(1,2)");

        assert.strictEqual(result, 0);
      });

      it("should return the result when it's prefixed with don't() and do()", () => {
        const result = runTask("don't()do()mul(1,2)");

        assert.strictEqual(result, 2);
      });
    });

    describe('when multiple valid instructions are given', () => {
      it("should return the total without any instruction after the don't()", () => {
        const result = runTask("mul(1,2)mul(3,4)don't()mul(100,100)");

        assert.strictEqual(result, 14);
      });

      it('should return the total with only instructions after the do()', () => {
        const result = runTask("don't()mul(100,100)do()mul(1,2)mul(3,4)");

        assert.strictEqual(result, 14);
      });

      it('should return the total with all the instructions after the first do()', () => {
        const result = runTask("don't()mul(100,100)do()mul(1,2)do()mul(3,4)");

        assert.strictEqual(result, 14);
      });
    });
  });
});

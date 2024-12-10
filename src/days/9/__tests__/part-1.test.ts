import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask, sortMemoryBlocks } from '../part-1';

suite('Day 9 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return 0 as first file block id', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.slice(0, 1), ['0']);
    });

    it('should return as much . as free blocks count for the first free block', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.slice(1, 3), ['.', '.']);
    });

    it('should return as much occurrences of the file block id as the file block count for the first file block', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.slice(3, 6), ['1', '1', '1']);
    });

    it('should return as much . as free blocks count for the second free block', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.slice(6, 10), ['.', '.', '.', '.']);
    });

    it('should return as much occurrences of the file block id as the file block count for the first file block', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.slice(10, 15), ['2', '2', '2', '2', '2']);
    });

    it('should return the correct file block id after a 0', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.slice(15, 16), ['3']);
    });

    it('should return the correct first line', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput, [
        '0',
        '.',
        '.',
        '1',
        '1',
        '1',
        '.',
        '.',
        '.',
        '.',
        '2',
        '2',
        '2',
        '2',
        '2',
        '3',
      ]);
    });
  });

  describe('sortMemoryBlocks', () => {
    describe('when no free block', () => {
      it('should return the string as is', () => {
        const input = ['0', '1', '2', '3', '4', '5'];

        const result = sortMemoryBlocks(input);

        assert.deepStrictEqual(result, input);
      });
    });

    describe('when one free block', () => {
      it('should return the string as is when the free block is at the end', () => {
        const input = ['0', '1', '.'];
        const result = sortMemoryBlocks(input);
        assert.deepStrictEqual(result, input);
      });

      it('should move the last memory block when the free block is in the middle', () => {
        const input = ['0', '.', '1'];
        const result = sortMemoryBlocks(input);
        assert.deepStrictEqual(result, ['0', '1', '.']);
      });

      it('should move the last memory block when the free block is at the start', () => {
        const input = ['.', '0', '1'];
        const result = sortMemoryBlocks(input);
        assert.deepStrictEqual(result, ['1', '0', '.']);
      });
    });

    describe('when multiple free blocks', () => {
      it('should return the string as is when the free blocks are at the end', () => {
        const input = ['0', '1', '2', '.', '.', '.', '.'];
        const result = sortMemoryBlocks(input);
        assert.deepStrictEqual(result, input);
      });

      it('should move the memory blocks from the end', () => {
        const input = ['.', '.', '.', '0', '1', '2'];
        const result = sortMemoryBlocks(input);
        assert.deepStrictEqual(result, ['2', '1', '0', '.', '.', '.']);
      });

      it('should move the memory blocks from the end when free blocks are separate by file blocks', () => {
        const input = ['0', '.', '1', '.', '2', '.', '3', '.'];
        const result = sortMemoryBlocks(input);
        assert.deepStrictEqual(result, ['0', '3', '1', '2', '.', '.', '.', '.']);
      });

      it('should return the correct order when advent of code example given', () => {
        const input = '00...111...2...333.44.5555.6666.777.888899'.split('');
        const result = sortMemoryBlocks(input);
        assert.deepStrictEqual(result, '0099811188827773336446555566..............'.split(''));
      });
    });
  });

  describe('runTask', () => {
    it('should return 0 when only one digit given', () => {
      const input = ['1'];

      const result = runTask(input);

      assert.strictEqual(result, 0);
    });

    it('should return the second digit when two digits given', () => {
      const input = ['0', '1'];

      const result = runTask(input);

      assert.strictEqual(result, 1);
    });

    it('should return the correct checksum when three digits given', () => {
      const input = ['0', '1', '2'];

      const result = runTask(input);

      assert.strictEqual(result, 5);
    });

    it('should return the correct checksum when three digits and a few dots given', () => {
      const input = ['0', '1', '2', '.', '.', '.'];

      const result = runTask(input);

      assert.strictEqual(result, 5);
    });

    it('should return the correct checksum when advent of code example given', () => {
      const input = '0099811188827773336446555566..............'.split('');

      const result = runTask(input);

      assert.strictEqual(result, 1928);
    });
  });
});

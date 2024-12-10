import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { sortFileBlocks } from '../part-2';

suite('Day 9 - part 2', () => {
  describe('runTask', () => {
    describe('when no free block', () => {
      it('should return the string as is', () => {
        const input = ['0', '1', '2', '3', '4', '5'];

        const result = sortFileBlocks(input);

        assert.deepStrictEqual(result, input);
      });
    });
  });

  describe('when one free block', () => {
    it('should return the string as is when the free block is at the end', () => {
      const input = ['0', '1', '.'];
      const result = sortFileBlocks(input);
      assert.deepStrictEqual(result, input);
    });

    it('should return the string as is when the free block is no large enough to fit any file block', () => {
      const input = ['0', '.', '1', '1'];
      const result = sortFileBlocks(input);
      assert.deepStrictEqual(result, input);
    });

    it('should move the last file block when its length is 1', () => {
      const input = ['.', '0', '1'];
      const result = sortFileBlocks(input);
      assert.deepStrictEqual(result, ['1', '0', '.']);
    });
  });

  describe('when multiple free blocks', () => {
    it('should return the string as is when the free block is no large enough to fit any file block', () => {
      const input = ['.', '.', '0', '0', '0', '1', '1', '1', '1'];
      const result = sortFileBlocks(input);
      assert.deepStrictEqual(result, input);
    });

    it('should move the last file block when the free block is large enough', () => {
      const input = ['.', '.', '0', '0', '0', '1', '1'];
      const result = sortFileBlocks(input);
      assert.deepStrictEqual(result, ['1', '1', '0', '0', '0', '.', '.']);
    });

    it('should move the middle file block when the free block is large enough', () => {
      const input = ['.', '.', '0', '0', '1', '1', '1'];
      const result = sortFileBlocks(input);
      assert.deepStrictEqual(result, ['0', '0', '.', '.', '1', '1', '1']);
    });

    it('should return the correct order when advent of code example given', () => {
      const input = '00...111...2...333.44.5555.6666.777.888899'.split('');
      const result = sortFileBlocks(input);
      assert.deepStrictEqual(result.join(''), '00992111777.44.333....5555.6666.....8888..');
    });
  });
});

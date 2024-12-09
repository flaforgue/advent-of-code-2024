import assert from 'node:assert';
import { beforeEach, describe, it, suite } from 'node:test';
import { ParsedInput, parseInput, runTask } from '../part-1';

suite.only('Day 8 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return as much frequencies as distinct chars', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.antennas.size, 3);
    });

    it('should return as much antennas as char occurrence', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.antennas.get('a')!.length, 2);
      assert.strictEqual(parsedInput.antennas.get('b')!.length, 1);
      assert.strictEqual(parsedInput.antennas.get('c')!.length, 1);
    });

    it('should return all the positions of antennas for each frequency', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput.antennas.get('a'), [
        { x: 4, y: 1 },
        { x: 3, y: 2 },
      ]);
      assert.deepStrictEqual(parsedInput.antennas.get('b'), [{ x: 6, y: 1 }]);
      assert.deepStrictEqual(parsedInput.antennas.get('c'), [{ x: 5, y: 2 }]);
    });
  });

  describe('runTask', () => {
    describe('when only one line given', () => {
      let parsedInput: ParsedInput;
      beforeEach(() => {
        parsedInput = {
          grid: [['.', '.', '.', '.', '.']],
          antennas: new Map(),
        };
      });

      it('should return 0 when empty line', () => {
        parsedInput.grid = [['']];

        const result = runTask(parsedInput);

        assert.strictEqual(result, 0);
      });

      it('should return 0 when line with no antinode', () => {
        parsedInput.grid[0][2] = 'a';
        parsedInput.antennas.set('a', [{ x: 2, y: 0 }]);

        const result = runTask(parsedInput);

        assert.strictEqual(result, 0);
      });

      it('should return 1 when 1 antinode on the right', () => {
        parsedInput.grid[0][0] = 'a';
        parsedInput.grid[0][1] = 'a';
        parsedInput.antennas.set('a', [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
        ]);

        const result = runTask(parsedInput);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when 1 antinode on the left', () => {
        parsedInput.grid[0][4] = 'a';
        parsedInput.grid[0][3] = 'a';
        parsedInput.antennas.set('a', [
          { x: 3, y: 0 },
          { x: 4, y: 0 },
        ]);

        const result = runTask(parsedInput);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when 2 antinodes on the same position', () => {
        parsedInput.grid[0][0] = 'a';
        parsedInput.grid[0][1] = 'a';
        parsedInput.grid[0][3] = 'a';
        parsedInput.grid[0][4] = 'a';
        parsedInput.antennas.set('a', [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 3, y: 0 },
          { x: 4, y: 0 },
        ]);

        const result = runTask(parsedInput);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when 2 antinodes on distinct positions', () => {
        parsedInput.grid[0][0] = 'a';
        parsedInput.grid[0][1] = 'a';
        parsedInput.grid[0][4] = 'a';
        parsedInput.grid[0][5] = 'a';
        parsedInput.antennas.set('a', [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 4, y: 0 },
          { x: 5, y: 0 },
        ]);

        const result = runTask(parsedInput);

        assert.strictEqual(result, 2);
      });
    });
  });
});

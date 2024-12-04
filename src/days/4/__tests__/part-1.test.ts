import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { parseInput, runTask } from '../part-1';

suite('Day 4 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return the first line in the first value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput[0], 'SAMXXSXXSXSAM');
    });

    it('should return as much values as lines', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(2, parsedInput.length);
    });

    it('should return the second line in the second value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput[1], 'MAMMXSMMMAASM');
    });
  });

  describe('runTask', () => {
    describe('Horizontal matches', () => {
      it('should return 1 when XMAS is horizontally', () => {
        const input = ['XMAS'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when XMAS is present twice horizontally', () => {
        const input = ['XMASXMAS'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 1 when SAMX is present horizontally', () => {
        const input = ['SAMX'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when XMAS is  present twice horizontally', () => {
        const input = ['SAMXSAMX'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 2 when XMAS and SAMX are both present with noise', () => {
        const input = ['.SAMX...SAMX...'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 0 when XMAS and SAMX are not present at all', () => {
        const input = ['MXAS'];

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });
    });

    describe('Vertical matches', () => {
      it('should return 1 when XMAS is present vertically', () => {
        const input = ['X', 'M', 'A', 'S'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when XMAS is present twice vertically', () => {
        const input = ['XX', 'MM', 'AA', 'SS'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 1 when SAMX is present vertically', () => {
        const input = ['S', 'A', 'M', 'X'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when SAMX is present twice vertically', () => {
        const input = ['SS', 'AA', 'MM', 'XX'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 2 when XMAS and SAMX are both present vertically twice', () => {
        const input = ['XS', 'MA', 'AM', 'SX'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 2 when XMAS and SAMX are both present twice vertically with noise', () => {
        const input = ['.....', '.X.S.', '.M.A.', '.A.M.', '.S.X.', '.....'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 0 when XMAS and SAMX are not present', () => {
        const input = ['...', '...', '...', '...', '...', '...'];

        const result = runTask(input);

        assert.strictEqual(result, 0);
      });
    });

    describe('Diagonal matches', () => {
      it('should return 1 when XMAS is present diagonally from top left to bottom right', () => {
        const input = ['X...', '.M..', '..A.', '...S'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when XMAS is present twice diagonally from top left to bottom right', () => {
        const input = ['XX...', '.MM..', '..AA.', '...SS'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 1 when SAMX is present diagonally from top left to bottom right', () => {
        const input = ['S...', '.A..', '..M.', '...X'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when SAMX is present twice diagonally from top left to bottom right', () => {
        const input = ['SS...', '.AA..', '..MM.', '...XX'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 2 when XMAS and SAMX are both present diagonally from top left to bottom right', () => {
        const input = ['XS...', '.MA..', '..AM.', '...SX'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 1 when XMAS is present diagonally from top right to bottom left', () => {
        const input = ['...X', '..M.', '.A..', 'S...'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when XMAS is present twice diagonally from top right to bottom left', () => {
        const input = ['...XX', '..MM.', '.AA..', 'SS...'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 1 when SAMX is present diagonally from top right to bottom left', () => {
        const input = ['...S', '..A.', '.M..', 'X...'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 2 when SAMX is present twice diagonally from top right to bottom left', () => {
        const input = ['...SS', '..AA.', '.MM..', 'XX...'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 2 when XMAS and SAMX are both present diagonally from top right to bottom left', () => {
        const input = ['...SX', '..AM.', '.MA..', 'XS...'];

        const result = runTask(input);

        assert.strictEqual(result, 2);
      });

      it('should return 1 when XMAS is present from top right to bottom left with noise on columns', () => {
        const input = ['..X...', '...M..', '....A.', '.....S'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when XMAS is present from top left to bottom right with noise on previous lines', () => {
        const input = ['.....', 'X....', '.M...', '..A..', '...S.'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });

      it('should return 1 when XMAS is present from top right to bottom left with noise on previous lines', () => {
        const input = ['.....', '....X', '...M.', '..A..', '.S...'];

        const result = runTask(input);

        assert.strictEqual(result, 1);
      });
    });
  });
});

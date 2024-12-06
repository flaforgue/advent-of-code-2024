import assert from 'node:assert';
import { describe, it, suite } from 'node:test';
import { getGridWithGuardVisitedPositions, parseInput, runTask } from '../part-1';

suite('Day 6 - part 1', () => {
  describe('parseInput', () => {
    const sampleInputPath = `${__dirname}/sample.txt`;

    it('should return the first line in the first array value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput[0], ['.', '.', '#', '.', '#', '.', '.']);
    });

    it('should return the correct number of lines', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.strictEqual(parsedInput.length, 2);
    });

    it('should return the second line in the second array value', () => {
      const parsedInput = parseInput(sampleInputPath);

      assert.deepStrictEqual(parsedInput[1], ['.', '.', '.', '#', '.', '.', '.']);
    });
  });

  describe('getGridWithGuardVisitedPositions', () => {
    describe('when one line of one char given', () => {
      it('should return X when > given', () => {
        const input = [['>']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X']]);
      });

      it('should return X when < given', () => {
        const input = [['<']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X']]);
      });

      it('should return X when ^ given', () => {
        const input = [['^']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X']]);
      });

      it('should return X when v given', () => {
        const input = [['v']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X']]);
      });
    });

    describe('when one line of multiple chars with no obstacle given', () => {
      it('should return a line of only X when moving from the start to the end of the line', () => {
        const input = [['>', '.', '.']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X', 'X', 'X']]);
      });

      it('should return only X when moving from the end to the start of the line', () => {
        const input = [['.', '.', '<']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X', 'X', 'X']]);
      });

      it('should return . and X when moving from the middle to the end of the line', () => {
        const input = [['.', '>', '.']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['.', 'X', 'X']]);
      });

      it('should return X and . when moving from the middle to the start of the line', () => {
        const input = [['.', '<', '.']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X', 'X', '.']]);
      });
    });

    describe('when one column of multiple chars with no obstacle given', () => {
      it('should return only X when moving from the start to the end of the column', () => {
        const input = [['v'], ['.'], ['.']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X'], ['X'], ['X']]);
      });

      it('should return only X when moving from the end to the start of the column', () => {
        const input = [['.'], ['.'], ['^']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X'], ['X'], ['X']]);
      });

      it('should return . and X when moving from the middle to the end of the column', () => {
        const input = [['.'], ['v'], ['.']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['.'], ['X'], ['X']]);
      });

      it('should return only X when moving from the middle to the start of the column', () => {
        const input = [['.'], ['^'], ['.']];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [['X'], ['X'], ['.']]);
      });
    });

    describe('when 9x9 grid with obstacles given', () => {
      it('should head to right when obstacle found while moving to top', () => {
        const input = [
          ['#', '.', '.'],
          ['.', '.', '.'],
          ['^', '.', '.'],
        ];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [
          ['#', '.', '.'],
          ['X', 'X', 'X'],
          ['X', '.', '.'],
        ]);
      });

      it('should head to bottom when obstacle found while moving to right', () => {
        const input = [
          ['>', '.', '#'],
          ['.', '.', '.'],
          ['.', '.', '.'],
        ];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [
          ['X', 'X', '#'],
          ['.', 'X', '.'],
          ['.', 'X', '.'],
        ]);
      });

      it('should head to left when obstacle found while moving to bottom', () => {
        const input = [
          ['.', '.', 'v'],
          ['.', '.', '.'],
          ['.', '.', '#'],
        ];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [
          ['.', '.', 'X'],
          ['X', 'X', 'X'],
          ['.', '.', '#'],
        ]);
      });

      it('should head to top when obstacle found while moving to left', () => {
        const input = [
          ['.', '.', '.'],
          ['.', '.', '.'],
          ['#', '.', '<'],
        ];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [
          ['.', 'X', '.'],
          ['.', 'X', '.'],
          ['#', 'X', 'X'],
        ]);
      });

      it('should head to top when 2 consecutive obstacles found while moving to bottom', () => {
        const input = [
          ['.', '.', '.'],
          ['.', '#', '.'],
          ['#', '.', '<'],
        ];

        const result = getGridWithGuardVisitedPositions(input);

        assert.deepStrictEqual(result, [
          ['.', '.', '.'],
          ['.', '#', '.'],
          ['#', 'X', 'X'],
        ]);
      });
    });
  });

  describe('runTask', () => {
    it('should return the number of positions visited by the guard when no obstacle', () => {
      const input = [['>', '.', '.']];

      const result = runTask(input);

      assert.strictEqual(result, 3);
    });

    it('should return the number of positions visited by the guard when one obstacle', () => {
      const input = [
        ['>', '.', '#'],
        ['.', '.', '.'],
        ['.', '.', '.'],
      ];

      const result = runTask(input);

      assert.strictEqual(result, 4);
    });

    it('should return the distinct number of positions visited by the guard', () => {
      const input = [
        ['>', '.', '.', '#'],
        ['#', '.', '.', '.'],
        ['.', '.', '#', '.'],
      ];

      const result = runTask(input);

      assert.strictEqual(result, 5);
    });
  });
});

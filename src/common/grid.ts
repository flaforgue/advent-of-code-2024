import { Point } from './point';

export class Grid {
  constructor(private readonly _values: string[][]) {}

  static createGridFromStrig(input: string): Grid {
    return new Grid(input.split('\n').map((line) => line.split('')));
  }

  public getValue(point: Point): string | undefined {
    return this._values[point.y]?.[point.x] ?? undefined;
  }

  public filterPoints(predicate: (v: string) => boolean): Point[] {
    const points: Point[] = [];

    for (let i = 0; i < this._values.length; i++) {
      const line = this._values[i];

      for (let j = 0; j < line.length; j++) {
        if (predicate(line[j])) {
          points.push(new Point(j, i));
        }
      }
    }

    return points;
  }

  public getWidth(): number {
    return this._values[0].length;
  }

  public getHeight(): number {
    return this._values.length;
  }
}

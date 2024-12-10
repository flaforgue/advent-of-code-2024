export class Point {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  public moveRight(): Point {
    return new Point(this.x + 1, this.y);
  }

  public moveDown(): Point {
    return new Point(this.x, this.y + 1);
  }

  public moveLeft(): Point {
    return new Point(this.x - 1, this.y);
  }

  public moveUp(): Point {
    return new Point(this.x, this.y - 1);
  }
}

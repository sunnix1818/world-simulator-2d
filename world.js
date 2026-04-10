class World {
  constructor(cols, rows, size) {
    this.cols = cols;
    this.rows = rows;
    this.size = size;
    this.tiles = [];

    this.generate();
  }

  generate() {
    for (let y = 0; y < this.rows; y++) {
      this.tiles[y] = [];

      for (let x = 0; x < this.cols; x++) {

        let noise = Math.random();

        let type = "grass";

        if (noise > 0.75) type = "water";
        else if (noise > 0.6) type = "sand";

        this.tiles[y][x] = new Tile(x, y, this.size, type);
      }
    }

    // PASSAGGIO DI SMOOTH (effetto più naturale)
    for (let i = 0; i < 2; i++) {
      this.smooth();
    }
  }

  smooth() {
    for (let y = 1; y < this.rows - 1; y++) {
      for (let x = 1; x < this.cols - 1; x++) {

        let waterCount = 0;

        for (let yy = -1; yy <= 1; yy++) {
          for (let xx = -1; xx <= 1; xx++) {
            if (this.tiles[y + yy][x + xx].type === "water") {
              waterCount++;
            }
          }
        }

        if (waterCount > 4) {
          this.tiles[y][x].type = "water";
        }
      }
    }
  }

  getTile(x, y) {
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) return null;
    return this.tiles[y][x];
  }

  draw(ctx) {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.tiles[y][x].draw(ctx, this);
      }
    }
  }
}

class Tile {
  constructor(x, y, size, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.type = type;

    // variante per evitare ripetizione visiva
    this.variant = Math.floor(Math.random() * 4);
  }

  draw(ctx, world) {
    let px = this.x * this.size;
    let py = this.y * this.size;

    // COLORI VARIATI (effetto naturale)
    if (this.type === "grass") {
      const colors = ["#6ecb3c", "#66bb33", "#5fae2e", "#77d645"];
      ctx.fillStyle = colors[this.variant];
    }

    if (this.type === "water") {
      const colors = ["#4aa3ff", "#3a8be0", "#5bb1ff", "#3f95f0"];
      ctx.fillStyle = colors[this.variant];
    }

    if (this.type === "sand") {
      const colors = ["#e6d18c", "#d8c37a", "#f0db9e", "#d2bb6b"];
      ctx.fillStyle = colors[this.variant];
    }

    ctx.fillRect(px, py, this.size, this.size);

    // OMBRA LEGGERA (profondità)
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(px, py, this.size, this.size);

    // BORDO LEGGERO
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.strokeRect(px, py, this.size, this.size);

    // MINI DETTAGLI (stile WorldBox)
    this.drawDetails(ctx, px, py);
  }

  drawDetails(ctx, px, py) {
    if (this.type === "grass" && Math.random() < 0.1) {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(px + 4, py + 4, 2, 2);
    }

    if (this.type === "sand" && Math.random() < 0.1) {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(px + 6, py + 6, 2, 2);
    }

    if (this.type === "water") {
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.fillRect(px + 2, py + 2, 3, 1);
    }
  }
}

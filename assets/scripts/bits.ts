// Simple deterministic RNG from: https://jakearchibald.com/2020/css-paint-predictably-random/
function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Helper lerp function
const lerp = (x, y, a) => x * (1 - a) + y * a;

abstract class Shape {
    public readonly x: number;
    public readonly y: number;
    public readonly rand: () => number;

    constructor(x: number, y: number, rand: () => number) {
        this.x = x;
        this.y = y;
        this.rand = rand;
    }

    abstract draw(ctx: CanvasRenderingContext2D, p: number);
}

class Dot extends Shape {
    private readonly MAX_SIZE = 4;
    private readonly MAX_OFFSET = 10;
    private direction: number;

    constructor(x: number, y: number, rand: () => number) {
        super(x, y, rand);
        this.direction = rand() > 0.5 ? -1 : 1;
    }

    draw(ctx: CanvasRenderingContext2D, p: number) {
        const size = lerp(0, this.MAX_SIZE, p);
        const offset = lerp(this.MAX_OFFSET, 0, p) * this.direction;

        let x = this.x - (size / 2) + offset;
        let y = this.y - 2;

        ctx.fillRect(x, y, size, this.MAX_SIZE);
    }
}

class Square extends Shape {
    private readonly MAX_SIZE = 8;
    private readonly MAX_OFFSET = 10;
    private direction: number;

    constructor(x: number, y: number, rand: () => number) {
        super(x, y, rand);
        this.direction = rand() > 0.5 ? -1 : 1;
    }

    draw(ctx: CanvasRenderingContext2D, p: number) {
        const size = lerp(0, this.MAX_SIZE, p);
        const offset = lerp(this.MAX_OFFSET, 0, p) * this.direction;

        let x = this.x - (size / 2);
        let y = this.y - (size / 2);

        ctx.fillRect(x, y, size, size);
    }
}

class Line extends Shape {
    private readonly MAX_SIZE = 25;
    private readonly MAX_OFFSET = 20;
    private direction: number;

    constructor(x: number, y: number, rand: () => number) {
        super(x, y, rand);
        this.direction = rand() > 0.5 ? -1 : 1;
    }

    draw(ctx: CanvasRenderingContext2D, p: number) {
        const size = lerp(0, this.MAX_SIZE, p);
        const offset = lerp(this.MAX_OFFSET, 0, p) * this.direction;

        let x = this.x - (size / 2) + offset;
        let y = this.y - 2;

        ctx.fillRect(x, y, size, 4);
    }
}

class Arrow extends Shape {
    private readonly MAX_SIZE = 15;
    private readonly MAX_OFFSET = 20;
    private direction: number;

    constructor(x: number, y: number, rand: () => number) {
        super(x, y, rand);
        this.direction = rand() > 0.5 ? -1 : 1;
    }

    draw(ctx: CanvasRenderingContext2D, p: number) {
        const size = lerp(0, this.MAX_SIZE, p);
        const offset = lerp(this.MAX_OFFSET, 0, p) * this.direction;

        let x = this.x - (size / 2) + offset;
        let y = this.y - 5;

        ctx.fillRect(x, y, size, 10);
    }
}


class BitsPainter {
    static get inputProperties() {
        return ["--bits-percentage", "--bits-seed", "--bits-color"];
    }

    paint(ctx: CanvasRenderingContext2D, geom, props) {
        const percent = props.get("--bits-percentage").value / 100;
        const rand = mulberry32(props.get("--bits-seed").value);
        ctx.fillStyle = props.get("--bits-color");

        const shapes = new Array<Shape>();

        for (let x = 0; x < geom.width; x += 100) {
            for (let y = 20; y < geom.height; y += 105) {
                const r = rand();

                if (r < 0.05) {
                    shapes.push(new Arrow(x, y, rand));
                } else if (r < 0.2) {
                    shapes.push(new Dot(x, y, rand));
                } else if (r < 0.3) {
                    shapes.push(new Line(x, y, rand));
                } else if (r < 0.35) {
                    shapes.push(new Square(x, y, rand));
                }
            }
        }

        shapes.forEach((shape) => shape.draw(ctx, percent));
    }
}

registerPaint("bits", BitsPainter);

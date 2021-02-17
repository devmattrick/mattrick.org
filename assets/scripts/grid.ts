export {};

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x));
const clamp = (a: number, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const range = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  a: number
) => lerp(x2, y2, invlerp(x1, y1, a));

class GridPainter {
    static get inputProperties() {
        return ["--grid-percent", "--grid-color", "--grid-size"];
    }

    paint(ctx: CanvasRenderingContext2D, geom, props) {
        const percent = props.get("--grid-percent").value / 100;
        const size = props.get("--grid-size").value;

        ctx.strokeStyle = props.get("--grid-color");

        ctx.beginPath();

        drawVerticalLines(ctx, percent, size, geom.width, geom.height);
        drawHorizontalLines(ctx, percent, size, geom.width, geom.height);

        ctx.stroke();
    }
}

function drawVerticalLines(ctx: CanvasRenderingContext2D, percent: number, size: number, width: number, height: number) {
    const lineCount = Math.ceil(width / size);
    for (let line = 0; line < lineCount; line++) {
        const divisor = lineCount + 5;
        const min = line / divisor;
        const max = (line + 5) / divisor;

        const y1 = range(min, max, 0, height, (percent - 0.5) * 2);
        const y2 = range(min, max, 0, height, percent * 2);

        verticalLine(ctx, line * size, y1, y2);
    }
}


function verticalLine(ctx: CanvasRenderingContext2D, x: number, y1: number, y2: number) {
    ctx.moveTo(x, y1);
    ctx.lineTo(x, y2);
}

function drawHorizontalLines(ctx: CanvasRenderingContext2D, percent: number, size: number, width: number, height: number) {
    const lineCount = Math.round(height / size) + 1;
    for (let line = 0; line < lineCount; line++) {
        const divisor = lineCount + 5;
        const min = line / divisor;
        const max = (line + 5) / divisor;

        const x1 = range(min, max, 0, width, (percent - 0.5) * 2);
        const x2 = range(min, max, 0, width, percent * 2);

        horizontalLine(ctx, line * size, x1, x2);
    }
}

function horizontalLine(ctx: CanvasRenderingContext2D, y: number, x1: number, x2: number) {
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
}

registerPaint("grid", GridPainter);

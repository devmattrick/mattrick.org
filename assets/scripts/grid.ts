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

        {
            const lineCount = Math.round(geom.width / size) + 1;
            const step = 1 / lineCount;
            let line = 0;
            for (let pos = 0; pos < geom.width; pos += size) {
                const height = range((line - 1) * step, line * step, 0, geom.height, percent);
                verticalLine(ctx, pos, 0, height);
                line++;
            }
        }

        {
            const lineCount = Math.round(geom.height / size) + 1;
            const step = 1 / lineCount;
            let line = 1;
            for (let pos = 0; pos < geom.height; pos += size) {
                const width = range((line - 1) * step, line * step, 0, geom.width, percent);
                horizontalLine(ctx, pos, 0, width);
                line++;
            }
        }

        ctx.stroke();
    }
}

function verticalLine(ctx: CanvasRenderingContext2D, x: number, y1: number, y2: number) {
    ctx.moveTo(x, y1);
    ctx.lineTo(x, y2);
}

function horizontalLine(ctx: CanvasRenderingContext2D, y: number, x1: number, x2: number) {
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
}

registerPaint("grid", GridPainter);

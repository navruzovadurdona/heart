// Define a simple Vector class
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    scale(factor) {
        return new Vector(this.x * factor, this.y * factor);
    }
}

// Initialize origin and mouse positions
let origin = new Vector(canvas.width / 2, canvas.height / 2);
let mouse = new Vector(canvas.width / 2, canvas.height / 2);

// Update mouse position on movement
canvas.addEventListener('mousemove', (event) => {
    mouse = new Vector(event.clientX, event.clientY);
});

// The polar function remains the same
let polar = (rad, time) => {
    rad += Math.sin(time / 100);
    let x = 16 * Math.pow(Math.sin(rad), 3);
    let y = 13 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad);
    let scale = (Math.sin(time / 10) + 3) * 4;
    return new Vector(x * scale, -y * scale)
        .add(origin.add(mouse.subtract(origin).scale(0.5)));
};
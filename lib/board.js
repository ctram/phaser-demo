import { SceneObject } from "./scene-object";

export class Board extends SceneObject{
    constructor(graphics, x = 0, y = 0, width = 10, height = 10) {
        super(graphics);
        this.width = width;
        this.height = height;
        this.originX = x;
        this.originY = y
        this.rect = new Phaser.Geom.Rectangle(this.originX, this.originY, this.width, this.height);
    }

    draw() {
        this.graphics.strokeRectShape(this.rect);
    }
}
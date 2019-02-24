import { Board } from "./board";

export class GameEngine {

    constructor(graphics, width = 400, height = 400, options = {}) {
        this.graphics = graphics;
        this.width = width;
        this.height = height;

        let  boardWidth = this.width / 2;
        let  boardHeight = this.height;
        let  boardOriginX = this.width / 4;
        let  boardOriginY = 0;

        options = Object.assign(options, { board: { width: boardWidth, height: this.height } });
        
        let board = new Board(this.graphics, boardOriginX, boardOriginY, boardWidth, boardHeight);
        
        this.sceneObjects = { board };
        // this.stages = ['startMenu'];
    }

    run() {
        this.startMenu();
    }

    startMenu() {
        this.draw();
    }

    draw() {
        for (let key in this.sceneObjects) {
            let sceneObject = this.sceneObjects[key];

            if (typeof sceneObject.draw === 'function') {
                sceneObject.draw();
            }
        }
    }

    addSceneObject(sceneObject) {
        this.sceneObjects.push(sceneObject);
    }

    removeSceneObject(sceneObject) {
        delete this.sceneObjects[sceneObject.key];
    }
}
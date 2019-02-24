import { Board } from "./board";
import { StartMenu } from "./stages/start-menu";

export class GameEngine {

    constructor(game, width = 400, height = 400, options = {}) {
        this.game = game;
        this.graphics = this.game.graphics;
        this.width = width;
        this.height = height;
        this.stepSpeed = 500;
        
        let boardWidth = this.width / 2;
        let boardHeight = this.height;
        let boardOriginX = this.width / 4;
        let boardOriginY = 0;
        
        options = Object.assign(options, { board: { width: boardWidth, height: this.height } });
        
        this.board = new Board(this.graphics, boardOriginX, boardOriginY, boardWidth, boardHeight);
        
        this.stages = { startMenu: new StartMenu(this) };
        this.sceneObjects = { board: this.board };
        this.currStage = 'startMenu';
        
        // this.stages = ['startMenu', 'playing', 'end'];
    }

    run() {
        let fn = () => { 
            while (this.currStage !== 'end') {
                let currStage = this.stages[this.currStage];
                currStage.run();
            }
        }

        setInterval(fn, this.stepSpeed);
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
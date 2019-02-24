import { GameEngine } from './game-engine.js';

function create() {
    let graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });
    let gameEngine = new GameEngine(graphics, config.width, config.height);
    gameEngine.run();
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: () => { },
        create: create
    }
};

var game = new Phaser.Game(config);

export class StartMenu {
    constructor(gameEngine) {
        this.gameEngine = gameEngine;

        let boardOriginY = this.gameEngine.board.originY

        this.textOriginY = boardOriginY + boardOriginY / 2;
        this.textOriginX = 10;
    }

    run() {
        this.draw();
    }

    draw() {
        this.gameEngine.game.add.text(this.textOriginX, this.textOriginY, 'Start', { fontFamily: 'serif' });
    }
}
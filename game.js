function create() {
    function redraw() {
        graphics.clear();

        graphics.strokePoints(polygon.points, true);
        graphics.strokeRectShape(rect);
    }

    var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

    var points = [
        new Phaser.Geom.Point(220, 450),
        new Phaser.Geom.Point(200, 200),
        new Phaser.Geom.Point(400, 300)
    ];

    var polygon = new Phaser.Geom.Polygon(points);
    let rect = new Phaser.Geom.Rectangle(0, 0, 100, 100);

    redraw();
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

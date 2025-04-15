export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('player', 'assets/player.png'); // Debes poner una imagen llamada player.png
    this.load.image('bullet', 'assets/bullet.png');
  }

  create() {
    this.player = this.physics.add.sprite(100, 450, 'player');
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.bullets = this.physics.add.group();

    this.input.keyboard.on('keydown-SPACE', () => {
      const bullet = this.bullets.create(this.player.x + 20, this.player.y, 'bullet');
      bullet.setVelocityX(600);
      bullet.setCollideWorldBounds(true);
      bullet.setGravityY(-300);
    });
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}

import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

const spritesheet = require('../asset/character.png');

export interface Point {
  x: number,
  y: number
};

export interface Keys {
  left: string,
  up: string,
  right: string,
  down: string
}

export interface Constructor {
  game: Phaser.Game,
  name: string,
  initialPosition: Point,
  keys?: Keys
}

export interface Preload {
  game: Phaser.Game
}

export default class Character {
  private params: Constructor;
  private character: Phaser.Sprite;
  private cursors: Phaser.CursorKeys;

  public static preload(params: Preload) {
    const { game } = params;
    game.load.spritesheet('character', spritesheet, 300 / 9, 18, 4);
  }

  public constructor(params: Constructor) {
    this.params = {
      keys: {
        left: 'LEFT',
        up: 'UP',
        right: 'RIGHT',
        down: 'DOWN',
      },
      ...params
    };
  }

  public create() {
    const {
      params: {
        initialPosition,
        game,
        keys,
        name
      }
    } = this;

    const character = game.add.sprite(initialPosition.x, initialPosition.y, 'character');

    character.animations.add('walk');

    character.animations.play('walk', 8, true);
    // character.anchor.setTo(0.5, 0.5);
    // Enable physics on those sprites
    game.physics.enable([ character ], Phaser.Physics.ARCADE);
    character.body.collideWorldBounds = true;

    const cursors = game.input.keyboard.addKeys({
      left: Phaser.KeyCode[keys.left],
      up: Phaser.KeyCode[keys.up],
      right: Phaser.KeyCode[keys.right],
      down: Phaser.KeyCode[keys.down]
    });

    this.character = character;
    this.cursors = cursors;
  }

  public update() {
    const {
      params: {
        game
      },
      character,
      cursors
    } = this;

    character.body.acceleration.set(0);

    const accelerationAngles = [];

    if (cursors.down.isDown)
    {
      accelerationAngles.push((0.5 * Math.PI));
    }
    if (cursors.left.isDown) {
      accelerationAngles.push(Math.PI);
    }
    if (cursors.right.isDown) {
      accelerationAngles.push(0);
    }
    if (cursors.up.isDown) {
      accelerationAngles.push((1.5 * Math.PI));
    }
    const accelerationAnglesLength = accelerationAngles.length;
    if(accelerationAnglesLength !== 0) {
      const totalSin = accelerationAngles.reduce((tot, a) => tot + Math.sin(a), 0);
      const totalCos = accelerationAngles.reduce((tot, a) => tot + Math.cos(a), 0);
      const accelerationAngle = Math.atan2(totalSin, totalCos);
      game.physics.arcade.accelerationFromRotation(accelerationAngle, 400, character.body.acceleration);
    }
  }
}

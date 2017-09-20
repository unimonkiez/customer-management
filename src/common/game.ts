import 'pixi';
import 'p2';
import * as Phaser from 'phaser';
import Character from './character';

const Config = {
  width: 1600,
  height: 1000
};

export default class Game {
  game: Phaser.Game;
  logo: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  character1: Character;
  character2: Character;

  constructor({
    container
  }) {
    this.game = new Phaser.Game(Config.width, Config.height, Phaser.AUTO, container, this);
    this.character1 = new Character({
      game: this.game,
      name: 'omer1',
      initialPosition: {
        x: 0,
        y: 0
      }
    });
    this.character2 = new Character({
      game: this.game,
      name: 'omer2',
      initialPosition: {
        x: 200,
        y: 0
      },
      keys: {
        left: 'A',
        up: 'W',
        right: 'D',
        down: 'S'
      }
    });
  }

  preload() {
    const { game } = this;
    Character.preload({ game });
  }

  create() {
    const { game } = this;
    game.stage.backgroundColor = '#2d2d2d';

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  Set the world (global) gravity
    game.physics.arcade.gravity.y = 100;

    this.character1.create();
    this.character2.create();
  }

  update() {
    this.game.input.update();
    this.character1.update();
    this.character2.update();
  }
}

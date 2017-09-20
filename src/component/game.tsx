/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>
/// <reference path="../../node_modules/phaser/typescript/pixi.d.ts"/>
/// <reference path="../.d.ts"/>

import * as React from 'react';
import SimpleGame from '../common/game';

const { Component } = React;

export default class Game extends Component {
  _containerRef = undefined;
  componentDidMount() {
    const game = new SimpleGame({
      container: this._containerRef
    });
  }
  render() {
    const canvasContainerClassName = '__Game_canvas_container';
    return (
      <div>
        <style
          dangerouslySetInnerHTML={{__html: `
            .${canvasContainerClassName}>canvas {
              width: 100% !important;
              height: auto !important;
              max-height: 750px;
              max-width: ${750 * 1.6}px
            }
          `}}
        />
        <div
          className={canvasContainerClassName}
          ref={ref => { this._containerRef = ref; }}
        />
      </div>
    )
  }
}

import * as React from 'react';
import Game from './game';

const { Component } = React;

export default class App extends Component {
  render() {
    return (
      <div>
        Hello world
        <Game />
      </div>
    )
  }
}

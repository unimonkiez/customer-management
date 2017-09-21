import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';

const { Component } = React;

export default class App extends Component {
  store: any;
  componentWillMount() {
    this.store = configureStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <div>
          Hello world
        </div>
      </Provider>
    )
  }
}

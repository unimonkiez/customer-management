import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import EditDriverDetails from './edit-driver-details';

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
          <EditDriverDetails
            name="unimonkiez"
            email="unimonkiez@gmail.com"
            phone="+972505555555"
          />
        </div>
      </Provider>
    )
  }
}

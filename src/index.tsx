import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './component/app';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

declare const module: any;
if (module.hot) {
  module.hot.accept(() => {
    const NewRoot = require('./component/app').default;
    ReactDOM.render(
      <App/>,
      document.getElementById('app')
    );
  });
}

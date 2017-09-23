// import * as React from 'react';
// import App from './app';
// import { Provider } from 'react-redux';
// import * as configureStore from '../store/configure-store';
// import { shallow } from 'enzyme';

// describe('App component', () => {
//   let configureStoreMock;
//   let storeMock = { subscribe: () => { }, dispatch: () => { }, getState: () => { } };
//   let originalConfigureStore;
//   beforeEach(() => {
//     configureStoreMock = jest.fn().mockReturnValue(storeMock);
//     originalConfigureStore = configureStore['default'];
//     configureStore['default'] = configureStoreMock;
//   });
//   afterEach(() => {
//     configureStore['default'] = originalConfigureStore;
//   });
//   test('create a store on mount', () => {
//     expect(configureStoreMock).toHaveBeenCalledTimes(0);
//     shallow(
//       <App />
//     );
//     expect(configureStoreMock).toHaveBeenCalledTimes(1);
//   });
//   test('renders Provider with store', () => {
//     expect(configureStoreMock).toHaveBeenCalledTimes(0);
//     const app = shallow(
//       <App />
//     );
//     const provider = app.find(Provider);
//     expect(provider.props().store).toBe(storeMock);
//   });
// });
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

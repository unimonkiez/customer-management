import { createStore, compose } from 'redux';
import rootReducer from '../reducer';

declare function require(name: string);
declare const module: any;

export default (initialState = undefined) => {
    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    const store = createStore(rootReducer, initialState);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducer', () =>
            store.replaceReducer(require('../reducer'))
        );
    }

    return store;
};
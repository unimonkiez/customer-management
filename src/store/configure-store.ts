import { createStore, compose } from 'redux';
import rootReducer from '../reducer';

export default initialState => {
    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    const store = createStore(rootReducer, initialState);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    /* eslint-disable no-undef, global-require */
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }
    /* eslint-enable no-undef, global-require */

    return store;
};
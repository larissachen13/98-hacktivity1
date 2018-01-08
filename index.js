import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = (store : Object) => (next : Function) => (action: Object) => {
  const result = next(action);
  return result;
};

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('hacktivity1', () => Root);

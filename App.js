import React from 'react';
import AppNavigation from './src/routes';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const store = createStore(rootReducer, applyMiddleware(promise, thunk));

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;

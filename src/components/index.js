import React from 'react';
import { Provider } from 'react-redux';
import store from '../data/store'
import AppWithNavigationState from './AppWithNavigationState';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

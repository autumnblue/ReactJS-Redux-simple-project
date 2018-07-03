import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import router from './config/router';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            { router }
        </Provider>
    );
  }
}

export default App;

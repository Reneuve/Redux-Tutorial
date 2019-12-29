/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux'
import Navigator from './Navigator'
import store from './redux_src/store'



export default class App extends React.Component {
  constructor(props) {
    super(props)
    //...
    this.store = store
  }

  render() {
    return (
      <Provider
        store={this.store}>
        <Navigator/>
      </Provider>
    )
  }
}
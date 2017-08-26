import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Start from './src/index.js';

export default class RepairMaster extends Component {
  render() {
    return (
        <Start /> 
    );
  }
}


AppRegistry.registerComponent('RepairMaster', () => RepairMaster);
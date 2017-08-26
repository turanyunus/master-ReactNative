import React, { Component } from 'react';
import {
View,
Text,
StyleSheet,
Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MainPage extends Component {
  render() {
      return (
        <View style={styles.container}>
            <View style={styles.oneBox}>
                <View style={styles.twoBox}>
                    <Button
                        title='Mesaj Var'
                        onPress={()=> Actions.message}
                    ></Button>
                </View>
                <View style={styles.threeBox}></View>
            </View>
            <View style={styles.oneBox}>
                <View style={styles.threeBox}></View>
                <View style={styles.twoBox}></View>
            </View>
            <View style={styles.oneBox}>
                <View style={styles.twoBox}></View>
                <View style={styles.threeBox}></View>
            </View>
         </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      padding:10,
      flexDirection:'column',
    },
    oneBox:{
        flex: 1,
        backgroundColor: 'steelblue',
        flexDirection:'row',
        marginTop:10,
    },
    twoBox :{
        flex: 1,
        backgroundColor: '#CCC',
    },
    threeBox:{
        flex: 1,
        backgroundColor: '#3498db',
    },
  });
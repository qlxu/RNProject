/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
          Welcome to React Native!
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
        <TextInput placeholder="hairlineWidth"
                   style= {styles.input}
                   onChange={(text) => this.setState({text})}
        />
        <Text style={styles.welcome}>
            $$$$$$$$$$$$$$$$$$$$$$$$$$$$$这里是分隔符$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        </Text>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            这里是第二个view
          </Text>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
      </View>
    );
  }


    setState(partialState) {
        return (<Text style={styles.welcome}
            >
            {partialState}
            </Text>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    input: {
        justifyContent:'space-between',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        height:50,
        width:300,
        color:"#944534"
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

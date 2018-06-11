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
import MyScene from "./MyScene";

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
        <Navigator
            initialRoute={{ title: 'My Initial Scene', index: 0 }}
            renderScene={(route, navigator) =>
                <MyScene
                    title={route.title}

                    // Function to call when a new scene should be displayed
                    onForward={ () => {
                        const nextIndex = route.index + 1;
                        navigator.push({
                            title: 'Scene ' + nextIndex,
                            index: nextIndex,
                        });
                    }}

                    // Function to call to go back to the previous scene
                    onBack={() => {
                        if (route.index > 0) {
                            navigator.pop();
                        }
                    }}
                />
            }
        />);
   {/*     <MyScene/>);*/}
{/*      <View style={styles.container}>
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
          <View>
              <Blink text='I love to blink' />
              <Blink text='Yes blinking is so great' />
              <Blink text='Why did they ever take this out of HTML' />
              <Blink text='Look at me look at me look at me' />
          </View>
      </View>*/}

  }


    setState(partialState) {
        return (<Text style={styles.welcome}
            >
            {partialState}
            </Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
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

import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet, ImageBackground, View, Dimensions } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Constants from "expo-constants";

const { manifest } = Constants;


const bgImage = require('./images/AppBg.jpg')

import Routes from './components/routes/Routes'

//  Setting Theme
const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};



export default class App extends Component {

  constructor(){
    super();
    this.state={
      homeSelected: 'Gyms'
    }
    global.uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`;

  }

  selectHome(select){
    this.setState({
      homeSelected : select
    })
  }


  render() {

    const { homeSelected } = this.state;

    return (

        <PaperProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
          />
          <ImageBackground
              source={bgImage}
              style={{width: '100%', height: '100%'}}
          >
            <Routes />
          </ImageBackground>
        </PaperProvider>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0c0c',
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backgroundView:{
    width: Dimensions.get('window').width
  }
});
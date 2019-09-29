import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'

// Import custom Components
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';




import {StyleSheet} from "react-native";


class Routes extends Component{



    render() {
        return (
            <Router
                navigationBarStyle={{ backgroundColor: '#000000', borderBottomWidth: 0 }}
                navTitle={styles.title}
                navBarButtonColor='#ffffff'
                sceneStyle={{backgroundColor:'transparent'}}
            >
                <Scene key = "root">
                    <Scene key = "login" component = {Login} hideNavBar={true} initial = {true} />
                    <Scene key = "register" component = {Register} hideNavBar={true} />
                </Scene>
            </Router>
        );
    }
}

export default Routes;

const styles = StyleSheet.create({

    title: {
        color : '#ffffff',
        fontSize: 30,
        fontWeight: "400"
    }
});
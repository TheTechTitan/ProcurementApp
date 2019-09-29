import React, { Component } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    Picker,
    Dimensions,
    ImageBackground
} from 'react-native';
import { Avatar, Title, Subheading, TextInput, Button } from 'react-native-paper';

import {Actions} from "react-native-router-flux";

const bgImage = require('../../../images/AppBg.jpg')


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            loading: false
        }
    }

    selectHome(select){
        this.setState({
            homeSelected : select
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.homeSelected !== this.props.homeSelected) {
            this.setState({
                homeSelected: this.props.homeSelected
            })
        }
    }

    componentDidMount() {

        console.log(this.props.user.firstName)

    }

    render() {

        const { email, password, loading } = this.state;

        return (
            <ImageBackground
                source={bgImage}
                style={{width: '100%', height: '100%'}}
            >
                <SafeAreaView>
                    <View style={styles.container}>
                        <Avatar.Icon style={styles.iconStyle} size={100} icon="business"/>
                    </View>
                </SafeAreaView>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '25%',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconStyle: {
        backgroundColor: 'transparent',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center'
    },
    textLinkStyle: {
        padding: 20,
        color: 'white',
        textAlign: 'center'
    },
    linkStyle: {
        color: '#f4c737',
    },
    titleStyle: {
        fontSize: 26,
        color: 'white',
        textAlign: 'center'
    },
    inputStyle: {
        width: '80%',
        marginTop: 10,
        alignSelf: 'center'
    },
    buttonStyle: {
        width: '80%',
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#f4c737'
    }
});
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

    constructor(){
        super();
        this.state={
            homeSelected: 'Gyms',
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
                    <View>
                        <Title style={styles.titleStyle}>Procurement App</Title>
                        <Subheading style={styles.textStyle}>Login with your credentials</Subheading>
                        <TextInput
                            mode='flat'
                            style={styles.inputStyle}
                            label='Email'
                            value={email}
                            selectionColor='#f4c737'
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ email : text })}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            label='Password'
                            value={password}
                            textContentType='password'
                            secureTextEntry={true}
                            onChangeText={text => this.setState({ password : text })}
                        />
                        <Button style={styles.buttonStyle} loading={loading} mode="contained" onPress={() => console.log('Pressed')}>
                            Login
                        </Button>
                        <TouchableOpacity onPress={() => {Actions.jump('register')}} >
                        <Subheading style={styles.textLinkStyle}>New User?
                            <Subheading style={styles.linkStyle} > Register Now</Subheading>
                        </Subheading>
                        </TouchableOpacity>
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
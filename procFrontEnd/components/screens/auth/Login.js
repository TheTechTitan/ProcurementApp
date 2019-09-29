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

    handleLogin(){

        let loginDetails = {
            email : this.state.email.toLowerCase(),
            password : this.state.password
        }

        const loginPostUrl = global.uri + '/rest/api/users/login';
        this.setState({
            loading : true
        })

        fetch(loginPostUrl,  {
            method : 'POST',
            body : JSON.stringify(loginDetails),
            headers: {'Content-Type' : 'application/json'}
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(json => {
            if(json.auth){
                console.log("User Logged in")

                // window.localStorage.setItem("jwt", json.token);
                // window.localStorage.setItem("email", json.email);
                // this.props.setAuth(json)
                Actions.jump('home', {user : json})
            } else {
                this.setState({
                    loginError : true,
                    errorMessage : json.message,
                }, console.log(this.state))
            }
            console.log(json)
        })

        this.setState({
            loading : false
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
                        <Button style={styles.buttonStyle} loading={loading} mode="contained" onPress={() => this.handleLogin()}>
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
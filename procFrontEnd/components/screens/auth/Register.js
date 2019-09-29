import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Modal,
    TouchableOpacity,
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


export default class Register extends Component {

    constructor(){
        super();
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            company: 0,
            companyFetched: '',
            userLevel: 0,
            pickerVisible: false,
            pickerVisibleUser: false,
            password: '',
            confirmPassword: '',
            loading: false
        }
    }

    registerUser(){


        let registerData = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email.toLowerCase(),
            userLevel : this.state.userLevel,
            company : this.state.company,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword
        }

        const fetchRegisterUri = global.uri + '/rest/api/users/register'
        console.log(fetchRegisterUri)

        this.setState({
            loading : true
        })

        //Post Details
        fetch(fetchRegisterUri, {
            method : 'POST',
            body : JSON.stringify(registerData),
            headers: {'Content-Type' : 'application/json'}
        }).then(response => {
            return response.json()
        }).then(json => {
            if(json.user){
                this.setState({
                    registerUserError: true,
                    notValidated : true,
                    errorMessage : 'Error! Email already in use.',
                }, console.log('Error! Email already in use.'))
            }
            if(json.created){

                console.log("User Created");
                Actions.jump('login')
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

    componentDidMount() {

        const fetchCompanyUri = global.uri + '/rest/api/company'
        console.log(fetchCompanyUri)

        fetch(fetchCompanyUri)
            .then(response =>{
                return response.json()
            })
            .then(json => {
                this.setState({
                    companyFetched : json.data
                })
            })

    }

    render() {

        const { firstName, lastName, email, company, companyFetched, userLevel, password, confirmPassword, loading, pickerVisible, pickerVisibleUser } = this.state;
        let companyName = companyFetched.length > 0 ? companyFetched.find(companyFetched => companyFetched._id === company) : '';
        console.log(companyName)

        return (
            <ImageBackground
                source={bgImage}
                style={{width: '100%', height: '100%'}}
            >
                <SafeAreaView>
                    <ScrollView>
                    <View style={styles.container}>
                        <Avatar.Icon style={styles.iconStyle} size={100} icon="business"/>
                    </View>
                    <View>
                        <Title style={styles.titleStyle}>Procurement App</Title>
                        <Subheading style={styles.textStyle}>Register as a new User</Subheading>
                        <TextInput
                            mode='flat'
                            style={styles.inputStyle}
                            label='First Name'
                            value={firstName}
                            selectionColor='#f4c737'
                            textContentType='name'
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ firstName : text })}
                        />
                        <TextInput
                            mode='flat'
                            style={styles.inputStyle}
                            label='Last Name'
                            value={lastName}
                            selectionColor='#f4c737'
                            textContentType='name'
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ lastName : text })}
                        />
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
                        <View style={{width: '80%', alignSelf: 'center'}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Subheading style={{color: 'white', paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>{company == 0 ? 'Select a Company' : "Company : " + companyName.name}</Subheading>
                                </View>
                                <View style={{flex: 1}}>
                                    <Subheading
                                        style={{ color: '#f4c737', textAlign: 'right', paddingRight: 10, paddingTop: 10, paddingBottom: 10}}
                                        onPress={() => this.setState({pickerVisible: true})}>Change</Subheading>
                                </View>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={pickerVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                }}>
                                <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', marginTop: Dimensions.get('window').height * 0.5 }}>

                                    <View style={{flex: 1}}>
                                        <Subheading
                                            style={{ color: '#f4c737', textAlign: 'right', fontSize: 20, paddingRight: 15, paddingTop: 10 }}
                                            onPress={() => this.setState({pickerVisible: false})}>Select</Subheading>
                                    </View>
                                </View>
                                <Picker
                                    selectedValue={company}
                                    mode="dropdown"
                                    style={{backgroundColor: 'white'}}
                                    onValueChange={(text) => this.setState({ company: text })}
                                >
                                    <Picker.Item label="Select a Company" value={0} key="0" />
                                    {companyFetched.length > 0 ? companyFetched.map((companies, index) => {
                                        return <Picker.Item label={companies.name} value={companies._id} key={index + 1} />
                                        console.log(companies._id)
                                    })
                                    : <Picker.Item label="No data available" value={100} key="2" />}

                                </Picker>
                            </Modal>

                        </View>
                        <View style={{width: '80%', alignSelf: 'center'}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Subheading style={{color: 'white', paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                                        {userLevel == 0 ? 'Select a User Type' :
                                            userLevel == 1 ? "User Type : Manager/SiteManager"
                                        : "User Type : Procurement Staff"}
                                    </Subheading>
                                </View>
                                <View style={{flex: 1}}>
                                    <Subheading
                                        style={{ color: '#f4c737', textAlign: 'right', paddingRight: 10, paddingTop: 10, paddingBottom: 10}}
                                        onPress={() => this.setState({pickerVisibleUser: true})}>Change</Subheading>
                                </View>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={pickerVisibleUser}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                }}>
                                <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', marginTop: Dimensions.get('window').height * 0.5 }}>

                                    <View style={{flex: 1}}>
                                        <Subheading
                                            style={{ color: '#f4c737', textAlign: 'right', fontSize: 20, paddingRight: 15, paddingTop: 10 }}
                                            onPress={() => this.setState({pickerVisibleUser: false})}>Select</Subheading>
                                    </View>
                                </View>
                                <Picker
                                    selectedValue={userLevel}
                                    mode="dropdown"
                                    style={{backgroundColor: 'white'}}
                                    onValueChange={(text) => this.setState({ userLevel: text })}
                                >
                                    <Picker.Item label="Select a User Type" value={0} key="0" />
                                    <Picker.Item label="Manager/Site Manager" value={1} key="1" />
                                    <Picker.Item label="Procurement Staff" value={2} key="2" />


                                </Picker>
                            </Modal>

                        </View>
                        <TextInput
                            style={styles.inputStyle}
                            label='Password'
                            value={password}
                            textContentType='password'
                            secureTextEntry={true}
                            onChangeText={text => this.setState({ password : text })}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            label='Confirm Password'
                            value={confirmPassword}
                            textContentType='password'
                            secureTextEntry={true}
                            onChangeText={text => this.setState({ confirmPassword : text })}
                        />
                        <Button style={styles.buttonStyle} loading={loading} mode="contained" onPress={() => this.registerUser()}>
                            Register
                        </Button>
                        <TouchableOpacity onPress={() => {Actions.jump('login')}} >
                        <Subheading style={styles.textLinkStyle}>Already a registered User?
                            <Subheading style={styles.linkStyle} > Login</Subheading>
                        </Subheading>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
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
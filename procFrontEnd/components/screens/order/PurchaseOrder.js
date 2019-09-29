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


export default class PurchaseOrder extends Component {

    constructor(){
        super();
        this.state={
            OrderItem: '',
            Quantity: '',
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

    /*componentDidUpdate(prevProps) {
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

    }*/

    render() {

        const { OrderItem, Quantity, company, companyFetched, userLevel, password, confirmPassword, loading, pickerVisible, pickerVisibleUser } = this.state;
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
                            <Title style={styles.titleStyle}>Purchase Order</Title>

                            <TextInput
                                mode='flat'
                                style={styles.inputStyle}
                                label='First Name'
                                value={OrderItem}
                                selectionColor='#f4c737'
                                textContentType='name'
                                keyboardType='email-address'
                                onChangeText={text => this.setState({ firstName : text })}
                            />
                            <TextInput
                                mode='flat'
                                style={styles.inputStyle}
                                label='Last Name'
                                value={Quantity}
                                selectionColor='#f4c737'
                                textContentType='name'
                                keyboardType='email-address'
                                onChangeText={text => this.setState({ lastName : text })}
                            />



                            <Button style={styles.buttonStyle} loading={loading} mode="contained" onPress={() => console.log('pressed')}>
                                PROCEED
                            </Button>

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
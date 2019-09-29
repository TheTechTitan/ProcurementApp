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
import {Dropdown} from 'react-native-material-dropdown';

import {Actions} from "react-native-router-flux";

const bgImage = require('../../../images/AppBg.jpg')


export default class PurchaseOrder extends Component {

    constructor(props){
        super(props);
        this.state={
            OrderItem: '',
            Quantity: '',
            qty:[{value: '1',}, {value: '2',}, {value: '3',}],
            supplier:[{value: 'mark',}, {value: 'wallberg',}, {value: 'sheq',}],
            dSite:[{value: 'w1',}, {value: 'w2',}, {value: 'w3',}],
            date:"2016-05-15",
            testingFetch:[]
        }
    }

    onPost = () => {
        var { qty } = this.state;
        console.log(qty) // Undefined

    }

    onChangeHandler = (value) => {
        console.log(`Selected value: ${value}`);
    }


    render() {

        const { OrderItem, Quantity} = this.state;


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
                                label='Item'
                                value={OrderItem}
                                selectionColor='#f4c737'
                                textContentType='name'
                                keyboardType='email-address'
                                onChangeText={text => this.setState({ firstName : text })}
                            />

                            <TextInput
                                mode='flat'
                                style={styles.inputStyle}
                                label='Quantity'
                                value={Quantity}
                                selectionColor='#f4c737'
                                textContentType='name'
                                keyboardType='email-address'
                                onChangeText={text => this.setState({ lastName : text })}
                            />
                            <View style={{alignSelf: 'center', width: '80%'}}>

                            <Dropdown
                                label='Supplier'
                                data={this.state.supplier}
                                baseColor='white'
                                onChangeText={(value => this.onChangeHandler(value))}
                                style={{color: 'black', height: 50, width: '80%', alignSelf: 'center'}}
                            />

                            <Dropdown
                                label='Delivery Site'
                                data={this.state.dSite}
                                baseColor='white'
                                style={{color: 'black', height: 50, width: '80%', alignSelf: 'center', marginBottom: 20}}

                            />

                            </View>

                            <Button style={styles.buttonStyle}  mode="contained" onPress={() => console.log('pressed')}>
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
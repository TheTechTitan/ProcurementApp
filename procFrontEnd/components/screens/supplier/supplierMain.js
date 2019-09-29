import React, {Component, Fragment} from 'react';

import {
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    Picker,
    Dimensions,
    ImageBackground, ScrollView
} from 'react-native';
import {
    Avatar,
    Title,
    Subheading,
    TextInput,
    Button,
    Card,
    Checkbox,
    Portal,
    Dialog,
    IconButton, Divider, Paragraph
} from 'react-native-paper';

import {Actions} from "react-native-router-flux";

const bgImage = require('../../../images/AppBg.jpg')


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            loading: false,
            user: []
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
        if(this.props.user){
            this.setState({
                user : this.props.user
            })
        }
    }



    render() {

        const { email, password, loading, user } = this.state;

        return (
            <ImageBackground
                source={bgImage}
                style={{width: '100%', height: '100%'}}
            >
                <SafeAreaView>
                    <ScrollView style={{height: '100%'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <Subheading
                                    style={{ color: '#f4c737', textAlign: 'right', paddingRight: 20, paddingTop: 40, paddingBottom: 10, fontSize: 45, fontWeight: 'bold'}}>
                                    Suppliers
                                </Subheading>
                            </View>
                        </View>
                        <Card style={{
                            backgroundColor: '#f4c737',
                            paddingVertical: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 10,
                            paddingHorizontal: 20,
                            borderRadius: 25
                        }}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Subheading
                                        style={{ color: 'black', textAlign: 'left', paddingleft: 20, paddingTop: 6, fontSize: 26}}>
                                        08 Suppliers
                                    </Subheading>
                                    <Subheading
                                        style={{ color: 'black', textAlign: 'left', paddingleft: 20, paddingTop: 6, fontSize: 16}}>
                                        {'Last Updated : ' + new Date().toLocaleDateString()}
                                    </Subheading>
                                </View>
                            </View>
                        </Card>

                        <TouchableOpacity onPress={() => console.log('pressed')}>
                            <Card style={{backgroundColor:'#FAFAFA',height:50, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
                                <View>
                                    <View style={{marginLeft:40,marginTop:12}}>
                                        <Text style={{fontSize:18, color: 'black'}}>View Suppliers</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('pressed')}>
                            <Card style={{
                                backgroundColor: '#FAFAFA',
                                height: 50,
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 10,
                                borderRadius: 25
                            }}>
                                <View>
                                    <View style={{marginLeft: 40, marginTop: 12}}>
                                        <Text style={{fontSize: 18, color: 'black'}}>Register new Suppliers</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('pressed')}>
                            <Card style={{backgroundColor:'#FAFAFA',height:50, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
                                <View>
                                    <View style={{marginLeft:40,marginTop:12}}>
                                        <Text style={{fontSize:18, color: 'black'}}>Requests</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
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
        color: 'black',
        alignSelf: 'flex-start',
        paddingLeft: 15
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
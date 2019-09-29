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
                                    Home
                                </Subheading>
                            </View>
                        </View>
                        <Card style={{
                            backgroundColor: '#f4c737',
                            paddingVertical: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 10,
                            borderRadius: 25
                        }}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Avatar.Icon style={styles.iconStyle} size={100} icon="account-circle" color='black'/>
                                </View>
                                <View style={{flex: 1}}>
                                    <Subheading
                                        style={{ color: 'black', textAlign: 'left', paddingRight: 20, paddingTop: 6, fontSize: 16, fontWeight: 'bold' }}>
                                        {user.firstName + ' ' + user.lastName}
                                    </Subheading>
                                    <Subheading
                                        style={{ color: 'black', textAlign: 'left', paddingRight: 20, fontSize: 16 }}>
                                        Maga
                                    </Subheading>
                                    <Subheading
                                        style={{ color: 'black', textAlign: 'left', paddingRight: 20, fontSize: 16 }}>
                                        {user.userLevel == 1 ? "Site Manager" : user.userLevel == 2 ? "Procurement Staff" : "Admin"}
                                    </Subheading>
                                </View>
                            </View>
                        </Card>

                        {user.userLevel == 2
                            ?
                            <TouchableOpacity onPress={() => Actions.jump('supplierMain', {user : user})}>
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
                                            <Text style={{fontSize: 18, color: 'black'}}>Suppliers</Text>
                                        </View>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            : user.userLevel == 1 ?
                                <TouchableOpacity onPress={() => Actions.jump('purchaseOrder')}>
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
                                                <Text style={{fontSize: 18, color: 'black'}}>Orders</Text>
                                            </View>
                                        </View>
                                    </Card>
                                </TouchableOpacity>
                                : <Fragment/>
                        }

                        <TouchableOpacity onPress={() => Actions.jump('enquiries')}>
                            <Card style={{backgroundColor:'#FAFAFA',height:50, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
                                <View>
                                    <View style={{marginLeft:40,marginTop:12}}>
                                        <Text style={{fontSize:18, color: 'black'}}>Enquiries</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.jump('deliveryStatus')}>
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
                                        <Text style={{fontSize: 18, color: 'black'}}>Deliveries</Text>
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
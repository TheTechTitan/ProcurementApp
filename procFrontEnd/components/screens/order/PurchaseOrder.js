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
import DatePicker from 'react-native-datepicker'
import {Actions} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome'



const bgImage = require('../../../images/AppBg.jpg')

//const iconImage= require('../../../images/add_cart.PNG')


export default class PurchaseOrder extends Component {

    constructor(props){
        super(props);
        this.state={
            itemID:0,
            orderId: 0,
            date:"2016-05-15",
            itemName:'',
            qty: '' ,
            supplier:[],
            supplierSelected:'',
            deliverySite:[{value:'ds1'},{value:'ds2'},{value:'ds3'}],
            deliverySiteSelected:'',
            temp:[],
            itemList:[]

        }
    }

    componentDidMount() {

        const fetchCompanyUri = global.uri + '/rest/api/supplier'
        console.log(fetchCompanyUri)

        fetch(fetchCompanyUri)
            .then(response =>{
                return response.json()
            })
            .then(json => {

                json.data.map(supplier=>{

                    this.state.temp=[...this.state.temp, {value:supplier.name}]

                });

                //console.log(this.state.temp);

                this.setState({
                    supplier : this.state.temp
                })
                //console.log(this.state.supplier);
            })

    }


    onPurchaseOrder=()=>{

        this.setState({
            orderId : this.state.orderId+1
        })
    }


    handlerAddToCart=()=>{

        console.log("IN".concat(this.state.itemID));


        let itemData = {
            itemID : "IN".concat(this.state.itemID),
            itemName : this.state.itemName,
            quantity : this.state.qty,
            amount : 100,
            supplier : this.state.supplierSelected,
            deliverySite : this.state.deliverySiteSelected,
            dueDate : this.state.date
        }

        const itemList=this.state.itemList.concat(itemData);

        this.setState({
            itemList : itemList
        })


        this.setState({
            itemID : this.state.itemID+1
        })

    }

    removeItem=(itemID)=>{

        console.log('Deleting' + itemID)
        const updatedItemList=this.state.itemList.filter(item=>item.itemID !==itemID)

        console.log(updatedItemList)

        this.setState({
            itemList: updatedItemList
        })

    }

    render() {

        const { itemName , qty , supplier , deliverySite } = this.state;


        return (
            <ImageBackground
                source={bgImage}
                style={{width: '100%', height: '100%'}}
            >
                <SafeAreaView>
                    <ScrollView>

                        <View>
                            <View style={{marginTop:20}}>
                                <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>PURCHASE</Text>
                                <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>ORDER</Text>
                            </View>


                            <TextInput
                                mode='flat'
                                style={styles.inputStyle}
                                label='Item'
                                value= {itemName}
                                selectionColor='#f4c737'
                                textContentType='name'
                                keyboardType='email-address'
                                onChangeText={text => this.setState({ itemName : text })}
                            />

                            <TextInput
                                mode='flat'
                                style={styles.inputStyle}
                                label='Quantity'
                                value= {qty}
                                selectionColor='#f4c737'
                                textContentType='name'
                                keyboardType='email-address'
                                onChangeText={text => this.setState({ qty : text })}
                            />

                            <View style={{alignSelf: 'center', width: '80%'}}>

                            <Dropdown
                                label='Supplier'
                                data={supplier}
                                baseColor='white'
                                onChangeText={(value) => this.setState({ supplierSelected : value })}
                                style={{color: 'white', height: 50, width: '80%', alignSelf: 'center' }}
                            />

                            <Dropdown
                                label='Delivery Site'
                                data={deliverySite}
                                baseColor='white'
                                onChangeText={(value) => this.setState({ deliverySiteSelected : value })}
                                style={{color: 'white', height: 50, width: '80%', alignSelf: 'center', marginBottom: 20}}

                            />

                            <View>
                                <DatePicker
                                    style={{width: 200}}
                                    date={this.state.date}
                                    mode="date"
                                    androidMode="spinner"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2016-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 50,
                                            width: '80%',
                                            marginTop: 10,
                                            alignSelf: 'center'

                                        }

                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />
                            </View>


                            </View>


                            <View style={{flexDirection:'row', paddingLeft:20 , justifyContent: 'space-around' , marginTop: 20 , fontSize: 20}} >
                                <Icon.Button  name="cart-plus" backgroundColor="#312B2B" color='#f4c737' size={45}  mode="contained" onPress={this.handlerAddToCart}>

                                </Icon.Button>

                                <Icon.Button name="cart-arrow-down"  backgroundColor="#312B2B" color='#f4c737' size={45}  mode="contained" onPress={() => {Actions.viewCart({itemList:this.state.itemList , removeItem:this.removeItem , orderId:this.state.orderId})}  }>

                                </Icon.Button>

                            </View>

                            <Button style={styles.buttonStyle}   mode="contained" onPress={() => {Actions.orderSummary({itemList:this.state.itemList, orderId:this.state.orderId })}} >
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
        backgroundColor: '#f4c737',
        color:'white'
    }
});
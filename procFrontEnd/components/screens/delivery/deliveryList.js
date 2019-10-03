import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image , ImageBackground, Picker, Switch} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Chip, RadioButton, TextInput } from 'react-native-paper';
import {Actions} from "react-native-router-flux";

class HomeData extends Component {

    constructor(props){
        super(props);
        this.state={
            homeSelected : this.props.homeSelected,
            dataOrders : [],
            driverInfo:'',
            deliverRoute:'',
            switch1Value: false,
            checked: 'first',
            status1:'partially delivered',
            status2:''
            }
    }




        toggleSwitch1 = (value) => {
            this.setState({switch1Value: value})
            console.log('Switch 1 is: ' + value)
         }


    render() {
        const { checked } = this.state;
        const {deliverRoute, driverInfo} = this.state;

        let dataOrdersList = [
            {
                orderID: '#ON002',

                itemList:[
                    {
                    itemID: '#IN001',
                    itemName: 'Metal',
                    quantity:'3 Cubes',
                    amount: '21000 LKR',
                    supplier: 'Wijethunga Hardware Malabe',
                    deliverySite: 'Site 1 Malabe',
                    dueDate:'25/08/19'
                    },

                     {
                    itemID: '#IN002',
                    itemName: 'SLON-PVC-25MM-200M',
                    quantity:'45',
                    amount: '9000 LKR',
                    supplier: 'Wijethunga Hardware Malabe',
                    deliverySite: 'Site 2 Malabe',
                    dueDate:'27/08/19'
                    }
        ]
    }
]
      //Mapping all the approved orders
        return (
          <View style={{flex: 1}}>
          <ImageBackground
           resizeMode={'stretch'} // or cover
           style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
           source={require('../../../images/AppBg.jpg')}
          >

          <View style={{marginTop:20}}>
              <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>DELIVERY</Text>
          <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>CONFIRMATION</Text>
              </View>
                  <ScrollView contentContainerStyle={styles.contentContainerStyle}>

                  <TextInput
                            mode='flat'
                            style={styles.inputStyle}
                            label='Delivery Route'
                            value={deliverRoute}
                            selectionColor='#f4c737'
                            textContentType='name'
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ deliverRoute : text })}
                        />
                        <TextInput
                            mode='flat'
                            style={styles.inputStyle}
                            label='Driver Info'
                            value={driverInfo}
                            selectionColor='#f4c737'
                            textContentType='name'
                            keyboardType='email-address'
                            onChangeText={text => this.setState({ driverInfo : text })}
                        />
                
                { dataOrdersList.map((dataObject, index) =>{
                        return(
                            <Card style={styles.card} theme={{ roundness : 15 }} key={index + "class"}>
                                         <Text style={{fontSize:25, textAlign:'center', fontWeight:"100", color:"#f2a600"}}>{dataObject.orderID}</Text>
                                        <Card.Content  key={index + "class" + "cardContent"}>
                                        <View style={{paddingTop:18, height:50}}>
                                                   <Text style={{textAlign:'left', color:'#f2a600', fontSize:20, fontWeight:"300"}}>{dataObject.itemList[0].itemID}</Text>
                                        </View>
                                        <View style={{flexDirection:'column'}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Order Item          :</Text>
                                                    <Text style={{textAlign:'center',color:'#000000'}}>{dataObject.itemList[0].itemName}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Quantity              :</Text>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.itemList[0].quantity}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Amount               :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.itemList[0].amount}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Supplier              :</Text>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.itemList[0].supplier}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Delivery Site       :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.itemList[0].deliverySite}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Due Date             :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.itemList[0].dueDate}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                <Text style={{textAlign:'left',color:'#000000'}}>Delivery Status   :</Text>
                                            <Picker
                                                selectedValue={this.state.status1}
                                                style={{height: 50,width:140, paddingLeft:180, paddingBottom:20, fontSize:12, borderColor: "#f2a600"}}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    this.setState({status1: itemValue})
                                                }>
                                                <Picker.Item label="Delivered" value="delivered" />
                                                <Picker.Item label="Partially Delivered" value="partially delivered" />
                                            </Picker>
                                            </View> 
                                        </View>
                                        <View style={{paddingTop:18, height:50}}>
                                                   <Text style={{textAlign:'left', color:'#f2a600', fontSize:20, fontWeight:"300"}}>{dataObject.itemList[1].itemID}</Text>
                                        </View>
                                        <View style={{flexDirection:'column'}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Order Item          :</Text>
                                                    <Text style={{textAlign:'center',color:'#000000'}}>{dataObject.itemList[1].itemName}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Quantity              :</Text>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.itemList[1].quantity}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Amount               :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.itemList[1].amount}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Supplier              :</Text>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.itemList[1].supplier}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Delivery Site       :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.itemList[1].deliverySite}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Due Date             :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.itemList[1].dueDate}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                <Text style={{textAlign:'left',color:'#000000'}}>Delivery Status   :</Text>
                                            <Picker
                                                selectedValue={this.state.status2}
                                                style={{height: 50,width:160, paddingLeft:180, paddingBottom:20, fontSize:12, borderColor: "#f2a600"}}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    this.setState({status2: itemValue})
                                                }>
                                                <Picker.Item label="Delivered" value="delivered" />
                                                <Picker.Item label="Partially Delivered" value="partially delivered" />
                                            </Picker>
                                            </View>       
                                        </View>
                                        </Card.Content>
                                    
                            </Card>
                        )
                    })}
                    <Card style={{ width : Dimensions.get('window').width - 30,marginTop : 20,backgroundColor: '#ffffff', height:25}}>
                    <View style={{flexDirection:'row'}}>
                                                    <Text style={{fontSize:18}}>Confirm Delivery</Text>
                                                <Switch
                                                    onValueChange = {() => Actions.jump('deliveryNotification')}
                                                    value = {this.state.switch1Value}/>
                                                    </View>
                    </Card>

            </ScrollView>
            </ImageBackground>
            </View>
        );
    }
}

export default HomeData;

//Styles for each element
const styles = StyleSheet.create({

    card: {
        width : Dimensions.get('window').width - 30,
        marginTop : 20,
        backgroundColor: '#ffffff'
    },
    cardCover:{
        overflow: 'hidden',
    },
    cardTitle:{
        fontWeight: "700",
        color: 'white',
        flexWrap: 'wrap',
        marginBottom: -8
    },
    rating:{
        marginRight: 20,
        backgroundColor: '#ff6000'
    },
    ratingText:{
        fontSize: 16,
        fontWeight: "700",
    },
    contentText: {
        color: '#bdbdbd'    
    },
    priceText: {
        color: '#ff6000'
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop : 15,
        paddingBottom : Dimensions.get('window').height / 1.6,

    },
    inputStyle: {
        width: '80%',
        marginTop: 10,
        alignSelf: 'center'
    }
});

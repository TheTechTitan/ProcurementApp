import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity, Switch, Dimensions } from 'react-native';
import { Checkbox, Card, TextInput, Button, Paragraph, Dialog, Portal, Divider, IconButton, Colors, RadioButton } from 'react-native-paper';

import {Actions} from "react-native-router-flux";
 
export default class OrderDetails extends React.Component {

  constructor(props){
    super(props);
    this.state={
        homeSelected : this.props.homeSelected,
        dataOrders : [],

        checked: 'first',



        }
    }
    
  render() {
    const { checked } = this.state;
    const {homeSelected, dataGym, dataClasses} = this.state;

    let dataOrders = [
        {
            orderID : 'ON001',
            status : 'Delivered',
        },
        {
            orderID : 'ON002',
            status : 'Partially-Delivered',
        },
        {orderID:"ON01",
        itemList:[
            {_id:"5d8f44571b8aa71710689b7c",
            item:"5d8f43a51b8aa71710689b79",
            quantity:5
        },
        {_id:"5d8f44571b8aa71710689b7b",
        item:"5d8f43a51b8aa71710689b79",
        quantity:2
        }
        ]
        }
    ]

    let dataOrdersList2 = [
        {
            orderID: '#ON005',
            itemID: '#IN001',
            itemName: 'Metal',
            quantity:'3 Cubes',
            amount: '21000 LKR',
            supplier: 'Wijethunga Hardware Malabe',
            deliverySite: 'Site 1 Malabe',
            dueDate:'25/08/19'
        },
        {
            orderID: '#ON005',
            itemID: '#IN002',
            itemName: 'SLON-PVC-25MM-200M',
            quantity:'45',
            amount: '9000 LKR',
            supplier: 'Wijethunga Hardware Malabe',
            deliverySite: 'Site 2 Malabe',
            dueDate:'27/08/19'
        }
    ]

    let dataOrdersList = [
        {
            orderID: '#ON005',

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
   

    return (

      <View style={{flex: 1}}>
      <ImageBackground
      resizeMode={'stretch'} // or cover
      style={{flex: 1}}
      source={require('C:/Users/sasmini_112033/Desktop/FitzkyUEE/fitzkyUEE/components/screens/spm/InterfaceNew.png')}
      >
       
       <View style={{marginTop:20}}>
       
        <Text style={{fontSize:45,color:'#ffa600',fontWeight:3,marginLeft:253,marginTop:20}}>ORDER</Text>
        <Text style={{fontSize:45,color:'#ffa600',fontWeight:3,marginLeft:230}}>DETAILS</Text>
              </View>
                  <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                { dataOrdersList2.map((dataObject, index) =>{
                        return(
                          
                            <Card style={styles.card} theme={{ roundness : 15 }} key={index + "class"}>


                                    <TouchableOpacity  key={index + "class" + "touchable"}>
                                         <Text style={{fontSize:25, textAlign:'center', fontWeight:"50", color:"#f2a600"}}>ORDER NO : {dataObject.orderID}</Text>
                                        <Card.Content  key={index + "class" + "cardContent"}>
                                        <View style={{paddingTop:18, flexDirection:'row', height:50}}>
                                              <View>
                                                   <Text style={{textAlign:'left', color:'#000000', fontSize:20, fontWeight:"60"}}>ORDER ITEM NO : {dataObject.itemID}</Text>
                                                </View>
                                        </View>
                                        <View style={{flexDirection:'column'}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Order Item          :</Text>
                                                    <Text style={{textAlign:'center',color:'#000000'}}>{dataObject.itemName}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Quantity             :</Text>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.quantity}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Amount              :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.amount}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Supplier             :</Text>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.supplier}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Delivery Site       :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.deliverySite}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Due Date            :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{dataObject.dueDate}</Text>
                                                </View>
                                              </View>
                                        </Card.Content>

                                    </TouchableOpacity>
                            </Card> 
                              
                        )
                    })}

                    <View>
                      <Card style={{width:380, height:35, marginTop:10}}>
                        <Text style={{textAlign: 'center'}}>ORDER TOTAL AMOUNT : 30000 LKR</Text>
                      </Card>
                    </View>
                    <Button  mode="contained" onPress={() => console.log('Edit Enquiry')} color='#ffbf00'  style={{width:150, marginLeft:-220, marginTop:35, height:38}}>
                       EDIT
                    </Button>
                    <Button  mode="contained" onPress={() => console.log('Add Enquiry')} color='#ffbf00' style={{width:150, marginLeft:105, marginTop:-42, height:38}}>
                      ENQUIRY
                    </Button>
                    <IconButton style={{marginLeft:330, marginTop:-42}}
                          icon="delete"
                          color='#ffbf00'
                          size={45}
                          onPress={() => console.log('Delete order')}
                          />

            </ScrollView>
      </ImageBackground>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width : Dimensions.get('window').width - 30,
    marginTop : 10,
    backgroundColor: '#ffffff',
    height:200
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
  

}
 
    
     
});



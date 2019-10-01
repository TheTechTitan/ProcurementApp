import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image , ImageBackground, Picker, Switch} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Chip } from 'react-native-paper';
import {Actions} from "react-native-router-flux";

class OrderList extends Component {

    constructor(props){
        super(props);
        this.state={
            homeSelected : this.props.homeSelected,
            dataOrders : [],
        }
    }

    onCardPress = (dataObject) =>{

        console.log('Card Pressed ' + this.state.homeSelected);
        Action.jump('deliveryNotification')


    }

  

    render() {

        const {homeSelected, dataGym, dataClasses} = this.state;

        let dataOrders = [
            {
                orderID : 'ON001',
                status : 'APPROVED',
            },
            {
                orderID : 'ON002',
                status : 'PENDING',
            },
            {
                orderID : 'ON003',
                status : 'APPROVED',
            },
            {
                orderID : 'ON004',
                status : 'DECLINED',
            },
            {
                orderID : 'ON005',
                status : 'PLACED',
            },
            {
                orderID : 'ON006',
                status : 'PENDING',
            },
            {
                orderID : 'ON007',
                status : 'APPROVED',
            },
           
        ]
       
        

        return (
         
   
          <View style={{flex: 1}}>
          <ImageBackground
           resizeMode={'stretch'} // or cover
           style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
           source={require('C:/Users/sasmini_112033/Desktop/FitzkyUEE/fitzkyUEE/components/screens/spm/InterfaceNew.png')}
          >    
          <View style={{marginTop:20}}>
          <Text style={{fontSize:45,color:'#ffa600',fontWeight:"bold",marginLeft:90}}>ORDER LIST</Text>
          
              </View> 
              <View>
              <Card style={{width:160, marginLeft:35, marginTop:20, height:35, backgroundColor:'#FAD02C'}}>
                    <Text style={{fontSize:20, textAlign:'center', color:"#000000", fontWeight:"3"}}>ORDER NO</Text>
              </Card>
              <Card style={{width:160, marginLeft:220, marginTop:-35, height:35, backgroundColor:'#FAD02C'}}>
                    <Text style={{fontSize:20, color:"#000000", fontWeight:"3", textAlign:'center'}}>STATUS</Text>
              </Card>
              </View>
                  <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                { dataOrders.map((dataObject, index) =>{
                        return(
                            <Card style={styles.card} theme={{ roundness : 15 }} key={index + "class"}>
                                    <TouchableOpacity onPress={() => Actions.jump('OrderSummary')} key={index + "class" + "touchable"}>
                                        <Card.Content  key={index + "class" + "cardContent"}>
                                            <View style={{paddingTop:18, flexDirection:'row', height:50}}>
                                                <View>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.orderID}</Text> 
                                                </View>
                                                <View style={{paddingLeft: Dimensions.get('window').width - 220}}>
                                                    <Text style={{textAlign:'right',color:'#000000'}} key={index + "class" + "pricePerDay"}>{dataObject.status}</Text>
                                                </View>
                                            {/* <Picker
                                                selectedValue={this.state.language}
                                                style={{height: 50, width: 100, alignSelf:'flex-end'}}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    this.setState({language: itemValue})
                                                }>
                                                <Picker.Item label="Java" value="java" />
                                                <Picker.Item label="JavaScript" value="js" />
                                                </Picker> */}
                                                </View>
                                        </Card.Content>
                                    </TouchableOpacity>
                            </Card>
                        )
                    })}
            </ScrollView>
            </ImageBackground>
            </View>
            
            
        );
    }
}

export default OrderList;

const styles = StyleSheet.create({

    card: {
        width : Dimensions.get('window').width - 30,
        marginTop : 20,
        backgroundColor: '#ffffff',
        paddingTop:10

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

    }
});
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image , ImageBackground, Picker, Switch} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Chip, RadioButton } from 'react-native-paper';
import {Actions} from "react-native-router-flux";

const bgImage = require('../../../images/AppBg.jpg')

export default class ViewCart extends Component {

    constructor(props){
        super(props);
        this.state={
           itemList:this.props.itemList
        }
    }

    componentDidUpdate(prevProps) {
        console.log('comp did update')
        if (prevProps.itemList !== this.props.itemList) {
            this.setState({
                itemList: this.props.itemList
            })
        }
    }


   componentWillMount() {
       console.log('comp will mount')
   }


    render() {

        const { itemList } = this.state;

         return (

             <ImageBackground
                 source={bgImage}
                 style={{width: '100%', height: '100%'}}
             >

                 <View style={{flex: 1}}>

                     <View style={{flexDirection:'row', paddingLeft:10 ,justifyContent: 'space-around' , marginTop : 15}} >
                         <View style={styles.container}>
                             <Avatar.Icon style={styles.iconStyle} size={100} icon="shopping-cart"/>
                         </View>

                         <View style={{marginTop:20}}>
                             <Text style={{textAlign:'center', color:"#f2a600", fontWeight:"bold", fontSize:50}}>CART</Text>
                         </View>

                     </View>


                     <Card style={styles.card} theme={{ roundness : 15 }} >
                         <TouchableOpacity >
                             <Card.Content  >
                                 <View style={{ flexDirection:'row', height:50}}>
                                     <View>
                                         <Text style={{textAlign:'left', color:'#000000'}}>ORDER ID : </Text>
                                     </View>
                                     <View >
                                         <Text style={{fontSize:25, textAlign:'left', color:"#000000"}}>{'ON'.concat(this.props.orderId)}</Text>
                                     </View>

                                 </View>
                             </Card.Content>
                         </TouchableOpacity>
                     </Card>

                     <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                         { itemList.map((orderItem, index) =>{
                             return(
                                 <Card style={styles.card} theme={{ roundness : 15 }} key={index + "class"}>


                                     <TouchableOpacity onPress={()=> this.props.removeItem(orderItem.itemID)} key={index + "class" + "touchable"}>

                                         <Card.Content  key={index + "class" + "cardContent"}>

                                             <View style={{paddingTop:18, flexDirection:'row', height:50}}>
                                                 <View>
                                                     <Text style={{textAlign:'left', color:'#000000', fontSize:20, fontWeight:"300"}}>{orderItem.itemID}</Text>
                                                 </View>
                                             </View>

                                             <View style={{flexDirection:'column'}}>
                                                 <View style={{flexDirection:'row'}}>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>Order Item           :</Text>
                                                     <Text style={{textAlign:'center',color:'#000000'}}>{orderItem.itemName}</Text>
                                                 </View>

                                                 <View style={{flexDirection:'row'}}>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>Quantity             :</Text>
                                                     <Text style={{textAlign:'left', color:'#000000'}}>{orderItem.quantity}</Text>
                                                 </View>

                                                 <View style={{flexDirection:'row'}}>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>Amount                :</Text>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>{orderItem.amount}</Text>
                                                 </View>

                                                 <View style={{flexDirection:'row'}}>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>Supplier              :</Text>
                                                     <Text style={{textAlign:'left', color:'#000000'}}>{orderItem.supplier}</Text>
                                                 </View>

                                                 <View style={{flexDirection:'row'}}>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>Delivery Site         :</Text>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>{orderItem.deliverySite}</Text>
                                                 </View>

                                                 <View style={{flexDirection:'row'}}>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>Due Date              :</Text>
                                                     <Text style={{textAlign:'left',color:'#000000'}}>{orderItem.dueDate}</Text>
                                                 </View>

                                             </View>

                                         </Card.Content>
                                     </TouchableOpacity>
                                 </Card>
                             )
                         })}
                     </ScrollView>
                 </View>
             </ImageBackground>
         );


    }
}

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
    iconStyle: {
        backgroundColor: 'transparent',
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop : 15,
        paddingBottom : Dimensions.get('window').height / 1.6,

    }
});

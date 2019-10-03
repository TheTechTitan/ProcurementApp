import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image , ImageBackground, Picker, Switch} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Chip, RadioButton } from 'react-native-paper';
import {Actions} from "react-native-router-flux";

const bgImage = require('../../../images/AppBg.jpg')

export default class OrderSummary extends Component {

    constructor(props){
        super(props);
        this.state={
            itemList:this.props.itemList,
            subTotal:0
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


    componentDidMount() {

        let subTotal=0;
        this.state.itemList.map(item=>{
            subTotal+=item.amount * item.quantity;
        });

        this.setState({
            subTotal: subTotal
        })

    }


    render() {

        const { itemList } = this.state;

        return (

            <ImageBackground
                source={bgImage}
                style={{width: '100%', height: '100%'}}
            >
                <View style={{flex: 1}}>
                    <View style={{marginTop:20}}>
                        <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>ORDER SUMMARY</Text>
                    </View>

                    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                        <Card style={styles.card} theme={{ roundness : 15 }} >
                            <TouchableOpacity  >
                                <Text style={{fontSize:25, textAlign:'center', fontWeight:"100", color:"#f2a600"}}>"Order number here"</Text>

                                { itemList.map((orderItem, index) =>{
                                    return(

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
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Amount               :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{orderItem.amount}</Text>
                                                </View>

                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Supplier             :</Text>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{orderItem.supplier}</Text>
                                                </View>

                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Delivery Site        :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{orderItem.deliverySite}</Text>
                                                </View>

                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Due Date            :</Text>
                                                    <Text style={{textAlign:'left',color:'#000000'}}>{orderItem.dueDate}</Text>
                                                </View>

                                            </View>

                                        </Card.Content>
                                    )

                                })}

                            </TouchableOpacity>
                        </Card>
                    </ScrollView>

                    <Card style={styles.card} theme={{ roundness : 15 }} >
                        <TouchableOpacity >
                            <Card.Content  >
                                <View style={{ flexDirection:'row', height:50}}>
                                    <View>
                                        <Text style={{textAlign:'left', color:'#000000'}}>TOTAL ORDER AMOUNT : </Text>
                                    </View>
                                    <View >
                                        <Text style={{textAlign:'left',color:'#000000'}} >{this.state.subTotal}</Text>
                                    </View>
                                </View>
                            </Card.Content>
                        </TouchableOpacity>
                    </Card>

                    <View style={{flexDirection:'row', paddingLeft:10}} >
                            <Button style={styles.buttonStyle} mode="contained" onPress={() => console.log('cancel pressed')}>
                                CANCEL
                            </Button>


                            <Button style={styles.buttonStyle} mode="contained" onPress={() => console.log('proceed pressed')}>
                                PROCEED
                            </Button>
                    </View>

                </View>
            </ImageBackground>
        );


    }
}

const styles = StyleSheet.create({

    card: {
        width : Dimensions.get('window').width - 30,
        marginTop : 20,
        backgroundColor: '#ffffff',
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
    buttonStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#f4c737',
        color:'white'
    }
});

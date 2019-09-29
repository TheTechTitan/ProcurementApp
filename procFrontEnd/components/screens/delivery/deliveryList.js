import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image , ImageBackground, Picker, Switch} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Chip, RadioButton } from 'react-native-paper';
import {Actions} from "react-native-router-flux";
// import { Actions } from 'react-native-router-flux';
// import NavBar from "./Homescreen";
class HomeData extends Component {

    constructor(props){
        super(props);
        this.state={
            homeSelected : this.props.homeSelected,
            dataOrders : [],


            switch1Value: false,
            checked: 'first',



            }
        }




        toggleSwitch1 = (value) => {
            this.setState({switch1Value: value})
            console.log('Switch 1 is: ' + value)
         }

    // onCardPress = (dataObject) =>{

    //     console.log('Card Pressed ' + this.state.homeSelected);
    //     if(this.state.homeSelected == 'Classes'){
    //         Actions.classMain({dataObject: dataObject})
    //     }


    // }

    // onBookNow = () =>{

    //     console.log('Book Now Pressed ' + this.state.homeSelected);
    //     Actions.jump('reservationMain')


    // }

    // selectHome(select){
    //     this.setState({
    //         homeSelected : select
    //     })
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.homeSelected !== this.props.homeSelected) {
    //         this.setState({
    //             homeSelected: this.props.homeSelected
    //         })
    //     }
    // }

    // componentDidMount() {


    //     const ipAddress = "192.168.8.101"

    //     const getClasses = "http://"+ ipAddress +":5000/order/Order";
    //     // const getGyms = "http://"+ ipAddress +":5000/class/Gym";


    //     fetch(getClasses)
    //         .then(response =>{
    //             return response.json()
    //         })
    //         .then(json => {
    //             this.setState({
    //                 dataClasses : json
    //             })
    //         })


    // }


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
        //     {
        //         title : 'Sports Club',
        //         cover : 'https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        //         location : 'Rajagiriya',
        //         distance : 4.0,
        //         pricePerDay : 250.00,
        //         pricePerYear : 10000.00,
        //         rating : 4.5
        //     },
        //     {
        //         title : 'Fitness Energy',
        //         cover : 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        //         location : 'Nugegoda',
        //         distance : 6.0,
        //         pricePerDay : 250.00,
        //         pricePerYear : 10000.00,
        //         rating : 4.3
        //     }
        // ]

        // let swipeBtns = [{
        //     text: 'Book Now',
        //     backgroundColor: '#ff6000',
        //     underlayColor: '#ff60000',
        //     onPress: () => { Actions.jump('reservationMain') }
        // }];

        // let dataClasses = [
        //     {
        //         title : 'Yoga Studio NYC',
        //         cover : 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        //         location : 'Nugegoda',
        //         distance : 6.0,
        //         pricePerDay : 250.00,
        //         pricePerYear : 10000.00,
        //         rating : 4.3
        //     },
        //     {
        //         title : 'Wu Karate Academy',
        //         cover : 'https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
        //         location : 'Rajagiriya',
        //         distance : 4.0,
        //         pricePerDay : 250.00,
        //         pricePerYear : 10000.00,
        //         rating : 4.5
        //     },
        //     {
        //         title : 'Zumba DDL',
        //         cover : 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        //         location : 'Nugegoda',
        //         distance : 6.0,
        //         pricePerDay : 250.00,
        //         pricePerYear : 10000.00,
        //         rating : 4.3
        //     }
        // ]



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
                { dataOrdersList2.map((dataObject, index) =>{
                        return(
                            <Card style={styles.card} theme={{ roundness : 15 }} key={index + "class"}>


                                    <TouchableOpacity onPress={() => Actions.jump('deliveryNotification')} key={index + "class" + "touchable"}>
                                         <Text style={{fontSize:25, textAlign:'center', fontWeight:"100", color:"#f2a600"}}>{dataObject.orderID}</Text>
                                        <Card.Content  key={index + "class" + "cardContent"}>
                                        <View style={{paddingTop:18, flexDirection:'row', height:50}}>
                                              <View>
                                                   <Text style={{textAlign:'left', color:'#000000', fontSize:20, fontWeight:"300"}}>{dataObject.itemID}</Text>
                                                </View>
                                              {/* <View style={{paddingLeft: 50}}>
                                            <Picker
                                                selectedValue={this.state.status}
                                                style={{height: 50, width: 100,alignSelf:'flex-end' }}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    this.setState({status: itemValue})
                                                }>
                                                <Picker.Item label="Delivered" value="delivered" />
                                                <Picker.Item label="Partially Delivered" value="partially delivered" />
                                            </Picker>
                                            </View>  */}
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
                                                    <Text style={{textAlign:'left',color:'#000000'}}>Supplier            :</Text>
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

                                                <View style={{flexDirection:'row',  paddingTop: 10}}>
                                                <RadioButton.Group
                                                        onValueChange={value => this.setState({ value })}
                                                        value={this.state.value}
                                                    >
                                                        <View style={{flexDirection:'row'}}>
                                                        <Text>Delivered</Text>
                                                        <RadioButton value="first" />
                                                        </View>
                                                        <View style={{flexDirection:'row'}}>
                                                        <Text>Partially Delivered</Text>
                                                        <RadioButton value="second" />
                                                        </View>
                                                    </RadioButton.Group>
                                                </View>

                                                </View>
                                        </Card.Content>
                                    </TouchableOpacity>
                            </Card>
                        )
                    })}
                    <Card style={styles.card}>
                    <View style={{flexDirection:'row'}}>
                                                    <Text style={{fontSize:18}}>Confirm Delivery</Text>
                                                <Switch
                                                    onValueChange = {this.toggleSwitch1}
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

    }
});

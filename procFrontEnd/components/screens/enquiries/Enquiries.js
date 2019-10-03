import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import { Checkbox, Card, TextInput, Button, Paragraph, Dialog, Portal, Divider, IconButton, Colors, RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group'
import {Actions} from "react-native-router-flux";
 
export default class Enquiries extends React.Component {

  //Enquiry Details
  constructor(props) {
    super(props);

    this.onChangeEnquiryAdditionalNote1 = this.onChangeEnquiryAdditionalNote1.bind(this);
    this.onChangeEnquiryAdditionalNote2 = this.onChangeEnquiryAdditionalNote2.bind(this);
    this.onChangeEnquiryAdditionalNote3 = this.onChangeEnquiryAdditionalNote3.bind(this);
    this.onChangeEnquiryAdditionalNote4 = this.onChangeEnquiryAdditionalNote4.bind(this);
    this.onChangeEnquiryAdditionalNoteOther = this.onChangeEnquiryAdditionalNoteOther.bind(this);
    this.onPressPriority = this.onPressPriority.bind(this);
    this.onChangeEnquiryAdditionalNoteDescription = this.onChangeEnquiryAdditionalNoteDescription.bind(this);   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      //Enquiry Details
      //Enquiry additional notes
      enquiryAdditionalNote1: '',
      enquiryAdditionalNote2: '',
      enquiryAdditionalNote3: '',
      enquiryAdditionalNote4: '',

      //Enquiry additional other notes
      enquiryAdditionalNoteOther: '' ,

      //Enquiry Description
      enquiryAdditionalNoteDescription: '',
       
      //Check box values 
      checked5: '',
      checkBox1Text: 'Due date exceeded',
      checkBox2Text: 'Incorrect items delivered',
      checkBox3Text: 'Incorrect quantities delivered',
      checkBox4Text: 'Damaged materials',
      visible: false,
      dataObject: [],

      //Enquiry priority - Low, Medium, High
      priority: [
        {
            label: 'Low',
            color: 'blue',
            size: 30,
            value: "Low"
        },
        {
            label: 'Medium',
            value: "Medium",
            color: 'blue',
            size: 30
        },
        {
            label: 'High',
            color: 'blue',
            size: 30,
            value: "High"
        },
         
    ],
   
    }
}


//Methods for enquiry additional notes
onChangeEnquiryAdditionalNote1(e) {
     this.setState({
         enquiryAdditionalNote1: e.target.value
   });
}

onChangeEnquiryAdditionalNote2(e) {
  this.setState({
        enquiryAdditionalNote2: e.target.value
   });
}

onChangeEnquiryAdditionalNote3(e) {
  this.setState({
        enquiryAdditionalNote3: e.target.value
   });
}

onChangeEnquiryAdditionalNote4(e) {
  this.setState({
        enquiryAdditionalNote4: e.target.value
   });
}

//Method for enquiry additional other notes
onChangeEnquiryAdditionalNoteOther(e) {
  this.setState({
        enquiryAdditionalNoteOther: e.target.value
   });
}

//Method for enquiry description
onChangeEnquiryAdditionalNoteDescription(e) {
  this.setState({
        enquiryAdditionalNoteDescription: e.target.value
   });
}

//Method for enquiry priority
onPressPriority = priority => this.setState({ priority });

//Method to add enquiry details
onSubmit(e) {
  e.preventDefault();
  
  console.log(`Enquiry Created:`);
  console.log(`Enquiry Details: ${this.state.enquiryAdditionalNote1}`);
  console.log(`Enquiry Details: ${this.state.enquiryAdditionalNote2}`);
  console.log(`Enquiry Details: ${this.state.enquiryAdditionalNote3}`);
  console.log(`Enquiry Details: ${this.state.enquiryAdditionalNote4}`);
  console.log(`Enquiry Other Details: ${this.state.enquiryAdditionalNoteOther}`);
  console.log(`Priority: ${this.state.priority}`);
  console.log(`Enquiry Description: ${this.state.enquiryAdditionalNoteDescription}`);
  
  this.setState({
    enquiryAdditionalNote1: '',
    enquiryAdditionalNote2: '',
    enquiryAdditionalNote3: '',
    enquiryAdditionalNote4: '',
    enquiryAdditionalNoteOther: '' ,
    priority: '',
    enquiryAdditionalNoteDescription: ''
  })
}

  //Method used to display the dialog box (Dialog box to confirm the enquiry)
  _showDialog = () => this.setState({ visible: true });

  //Method used to hide the dialog box
  _hideDialog = () => this.setState({ visible: false });

  //Navigate to view enquiries page
  navToEnquiries = () =>{
    Actions.jump('viewEnquiries')
 }

    
  render() {
    const { enquiryAdditionalNote1 } = this.state;
    const { enquiryAdditionalNote2 } = this.state;
    const { enquiryAdditionalNote3 } = this.state;
    const { enquiryAdditionalNote4 } = this.state;
    const { checked5 } = this.state;
  

    return (

        <View style={{flex: 1}}>
        <ImageBackground
        resizeMode={'stretch'} // or cover
        style={{flex: 1}}
        source={require('../../../images/AppBg.jpg')}
        >
       
        <ScrollView>
        <View>
            <Text style={{fontSize:45,color:'#ffa600',fontWeight:'bold',marginLeft:265,marginTop:20}}>MAKE</Text>
            <Text style={{fontSize:45,color:'#ffa600',fontWeight:'bold',marginLeft:200}}>ENQUIRY</Text>

            {/* Button to view enquiries */}
            <Button mode="contained" color='#ffbf00' onPress={()=>this.navToEnquiries()} style={{width:160, marginLeft:25,marginTop:-45}}>
            VIEW ENQUIRIES
            </Button>
        </View>
        
        {/* View and add Enquiry additional details */}
        <Card style={{backgroundColor:'#FAFAFA',height:50, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
        <View>
        <View style={{marginLeft:40,marginTop:12}}>
            <Text style={{fontSize:18}}>{this.state.checkBox1Text}</Text>
        </View>
        <View style={{marginLeft:320,marginTop:-26}}>
            <Checkbox.Android
                status={enquiryAdditionalNote1 ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ enquiryAdditionalNote1: !enquiryAdditionalNote1 }); }}
                value="Due date exceeded"
                checked={this.state.enquiryAdditionalNote1==='Due date exceeded'}
            />
        </View>
        </View>
        </Card>

        {/* View and add Enquiry additional details */}
        <Card style={{backgroundColor:'#FAFAFA',height:50, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
        <View>
        <View style={{marginLeft:40,marginTop:12}}>
           <Text style={{fontSize:18}}>{this.state.checkBox2Text}</Text>
        </View>
        <View style={{marginLeft:320,marginTop:-26}}>
            <Checkbox.Android
                status={enquiryAdditionalNote2 ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ enquiryAdditionalNote2: !enquiryAdditionalNote2 }); }}
                value="Incorrect items delivered"
                checked={this.state.enquiryAdditionalNote2==='Incorrect items delivered'}
            />
        </View>
        </View>
        </Card>

        {/* View and add Enquiry additional details */}
        <Card style={{backgroundColor:'#FAFAFA',height:50, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
        <View>
        <View style={{marginLeft:40,marginTop:12}}>
           <Text style={{fontSize:18}}>{this.state.checkBox3Text}</Text>
        </View>
        <View style={{marginLeft:320,marginTop:-26}}>
            <Checkbox.Android
                status={enquiryAdditionalNote3 ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ enquiryAdditionalNote3: !enquiryAdditionalNote3 }); }}
                value="Incorrect quantities delivered"
                checked={this.state.enquiryAdditionalNote3==='Incorrect quantities delivered'}
            />
        </View>
        </View>
        </Card>

        {/* View and add Enquiry additional details */}
        <Card style={{backgroundColor:'#FAFAFA',height:50, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
        <View>
        <View style={{marginLeft:40,marginTop:12}}>
           <Text style={{fontSize:18}}>{this.state.checkBox4Text}</Text>
        </View>
        <View style={{marginLeft:320,marginTop:-26}}>
            <Checkbox.Android
                status={enquiryAdditionalNote4 ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ enquiryAdditionalNote4: !enquiryAdditionalNote4 }); }}
                value="Damaged materials"
                checked={this.state.enquiryAdditionalNote4==='Damaged materials'}
            />
        </View>
        </View>
        </Card>
        
        {/* To add enquiry additionalnotes */}
        <Card style={{backgroundColor:'#FAFAFA',height:70, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
        
        <TextInput style={{fontSize:16,backgroundColor:'#FAFAFA',color:'#ffffff', marginLeft:9, marginTop:3, marginRight:13}}
            label='Other:'
            value={this.state.enquiryAdditionalNoteOther}
            onChangeText={enquiryAdditionalNoteOther => this.setState({ enquiryAdditionalNoteOther })}
            //onChange={this.onChangeEnquiryAdditionalNoteOther}
            underlineColor='#ffbf00'
            selectionColor='#ffbf00'
        />
        
        <View style={{marginLeft:320,marginTop:-45}}>
        <Checkbox.Android
            status={checked5 ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked5: !checked5 }); }}
        />
        </View>
        </Card>

        {/* To add enquiry priority */}
        <Card style={{backgroundColor:'#FAFAFA',height:70, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
        <View>
        <View style={{marginLeft:20,marginTop:12}}>
        <Text style={{fontSize:16}}>Priority:</Text>
        </View>
        <View style={{marginLeft:60,marginTop:-10}}>
        <RadioGroup radioButtons={this.state.priority} onPress={this.onPressPriority}  flexDirection='row'/>
        </View>
        </View>
        </Card>

        {/* To add enquiry description */}
        <Card style={{backgroundColor:'#FAFAFA',height:150, marginLeft:20, marginRight:20, marginTop:10, borderRadius:25}}>
        <TextInput style={{fontSize:16,backgroundColor:'#FAFAFA',color:'#ffffff', marginLeft:9, marginTop:3, marginRight:13, height:120}}
            label='Description:'
            value={this.state.enquiryAdditionalNoteDescription}
            onChangeText={enquiryAdditionalNoteDescription => this.setState({ enquiryAdditionalNoteDescription })}
            // onChange={this.onChangeEnquiryAdditionalNoteDescription}
            underlineColor='#ffbf00'
            selectionColor='#ffbf00'
            numberOfLines='4'
        />
        </Card>

        {/* Button to cancel the enquiry */}
        <Button icon="cancel" mode="contained" onPress={() => console.log('Enquiry Cancelled')} color='#ffbf00'  style={{width:150, marginLeft:45, marginTop:20}}>
            CANCEL
        </Button>

        {/* Button to make an enquiry */}
        <Button icon="message" mode="contained" onPress={this._showDialog} onSubmit={this.onSubmit} color='#ffbf00' style={{width:150, marginLeft:215, marginTop:-35}}>
            ENQUIRE
        </Button>

        {/* Dialog box to display enquiry confirmation */}
        <Portal>
            <Dialog 
                visible={this.state.visible}
                onDismiss={this._hideDialog}>
                <Dialog.Title style={{color:'#fbbb04',marginTop:12}}>Enquiry</Dialog.Title>
                <IconButton icon="cancel" color='#fbbb04' size={25} style={{marginLeft:320, marginTop:-50}} onPress={this._hideDialog}/>
                <Divider style={{borderColor : '#fbbb04', backgroundColor: '#fbbb04', height:1,marginTop:8}}/>
                <Dialog.Content>
                
                <Paragraph style={{fontSize:18,alignSelf:'center',marginTop:15}}>Your enquiry have been sent</Paragraph>
                <Paragraph style={{fontSize:18,alignSelf:'center'}}>Successfully !</Paragraph>
                
                </Dialog.Content>
                <Divider style={{borderColor : '#fbbb04', backgroundColor: '#fbbb04', height:1}}/>
                <Dialog.Actions>
                
                <Button mode="contained" onPress={this._hideDialog} color='#ffbf00' style={{width:100,marginRight:120}}>OK</Button>
                </Dialog.Actions>
            </Dialog>
            </Portal>
    
        </ScrollView>
        </ImageBackground>
        </View>
     
    );
  }
}


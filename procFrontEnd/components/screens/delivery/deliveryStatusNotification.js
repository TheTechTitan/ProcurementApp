import React, {Component} from 'react';
import { ScrollView, View, StyleSheet, Provider, Alert, Dimensions, Text , Button, ImageBackground} from 'react-native';
import { Paragraph, Portal, Dialog } from 'react-native-paper';
import {Actions} from "react-native-router-flux";

const bgImage = require('../../../images/AppBg.jpg')

export default class deliveryStatusNotification extends Component {

  render() {
    return (
      <View style={{marginTop:20}}>
        <ImageBackground
                source={bgImage}
                style={{width: '100%', height: '100%'}}
            >
      <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>DELIVERY</Text>
    <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>CONFIRMATION</Text>
      

        <Dialog
        visible={true}
        
      style={{ maxHeight: 0.6 * Dimensions.get('window').height }}
    >
      <Dialog.Title><Text style={{color:"#f7c50c"}}>Deliver Confirmation</Text></Dialog.Title>
      <Dialog.ScrollArea style={{ paddingHorizontal: 0}}>
        
          <Text style={{fontSize:18, alignSelf:"center"}}>
          {'\n'}
        {'\n'}
        Your delivery has been confirmed </Text>
          <Text style={{fontSize:18, alignSelf:"center"}}>successfully!
          {'\n'}
          {'\n'}
          </Text>
          
      </Dialog.ScrollArea>
      <Dialog.Actions>
      <View style={{marginRight:Dimensions.get('window').width - 250}}>        
          <Button title= "     OK      "
          color="#f7c50c"
          
           onPress={() => Actions.jump('deliveryList')}
           />
        </View>
      </Dialog.Actions>
</Dialog>
</ImageBackground>
</View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    paddingLeft: 8,
  },
});
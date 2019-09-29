import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'

// Import custom Components
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Home from '../screens/home/home';
import Enquiries from '../screens/enquiries/Enquiries';
import ViewEnquiries from '../screens/enquiries/ViewEnquiries';
import DeliveryList from '../screens/delivery/deliveryList';
import DeliveryStatus from '../screens/delivery/DeliveryStatusList';
import DeliveryNotification from '../screens/delivery/deliveryStatusNotification';
import SupplierMain from '../screens/supplier/supplierMain';
import PurchaseOrder from '../screens/order/PurchaseOrder';
import OrderSummary from '../screens/order/OrderSummary';
import ViewCart from '../screens/order/ViewCart';



import {StyleSheet} from "react-native";


class Routes extends Component{



    render() {
        return (
            <Router
                navigationBarStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
                navTitle={styles.title}
                navBarButtonColor='#ffffff'
                sceneStyle={{backgroundColor:'transparent'}}
            >
                <Scene key = "root">
                    <Scene key = "login" component = {Login} hideNavBar={true} initial = {true} />
                    <Scene key = "register" component = {Register} hideNavBar={true} />
                    <Scene key = "home" component = {Home} hideNavBar={true} />
                    <Scene key = "enquiries" component = {Enquiries} navTransparent={true}/>
                    <Scene key = "viewEnquiries" component = {ViewEnquiries} navTransparent={true}/>
                    <Scene key = "deliveryList" component = {DeliveryList}/>
                    <Scene key = "deliveryStatus" component = {DeliveryStatus} navTransparent={true}/>
                    <Scene key = "deliveryNotification" component = {DeliveryNotification} navTransparent={true}/>
                    <Scene key = "supplierMain" component = {SupplierMain} navTransparent={true}/>
                    <Scene key = "purchaseOrder" component = {PurchaseOrder} navTransparent={true}/>
                    <Scene key = "orderSummary" component = {OrderSummary} navTransparent={true}/>
                    <Scene key = "viewCart" component = {ViewCart} navTransparent={true}/>

                </Scene>
            </Router>
        );
    }
}

export default Routes;

const styles = StyleSheet.create({

    title: {
        color : '#ffffff',
        fontSize: 30,
        fontWeight: "400"
    }
});
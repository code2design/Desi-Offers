import React from 'react';
import {Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';


class MyOffer extends React.Component{
    render(){
        return(
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My Offers</Text>
           </View> 
        );
    }
}

export default MyOffer;
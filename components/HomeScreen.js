import React from 'react';
import {Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';


class HomeScreen extends React.Component{
    render(){
        return(
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen</Text>
           </View> 
        );
    }
}

export default HomeScreen;
import React from 'react';
import {Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';


class Message extends React.Component{
    render(){
        return(
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Message</Text>
           </View> 
        );
    }
}

export default Message;
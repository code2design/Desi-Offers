import React from 'react';
import {Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';


class PostItem extends React.Component{
    render(){
        return(
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Post Items</Text>
           </View> 
        );
    }
}

export default PostItem;
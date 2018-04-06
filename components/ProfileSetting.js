import React from 'react';
import {Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';


class ProfileSetting extends React.Component{
    render(){
        return(
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile Settings</Text>
           </View> 
        );
    }
}

export default ProfileSetting;
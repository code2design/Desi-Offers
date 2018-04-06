import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterNav from './components/FooterNav';
import { TabNavigator, TabBarBottom } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
        <FooterNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

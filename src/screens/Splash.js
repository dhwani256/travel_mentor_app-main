import {Image, ImageBackground, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      {
        this.props.navigation.replace('Login');
      }
    }, 2000);
  }
  render() {
    return (
      <ScrollView
        style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
          }}>
          <Image
            source={require('../assest/logo.png')}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              backgroundColor: '#fff',
              marginTop: 50,
            }}
            resizeMode="contain"></Image>

          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Go miles with smiles
          </Text>

          <Image
            source={require('../assest/bg.jpg')}
            style={{
              width: '100%',
              height: 500,

              backgroundColor: '#fff',
            }}></Image>
        </View>
      </ScrollView>
    );
  }
}

export default Splash;

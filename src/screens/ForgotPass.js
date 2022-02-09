import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-element-textinput';

export class ForgotPass extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assest/login_bg_new.png')}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <SafeAreaView>
          <View
            style={{
              width: '100%',
              height: '100%',
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

            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 50,
              }}>
              Go miles with smiles
            </Text>

            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Email or Agent Code"
              placeholder="Email or Agent Code"
              placeholderTextColor="gray"
              focusColor="#8DC42E"
            />

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ForgotOtp');
              }}>
              <View
                style={{
                  width: '50%',
                  height: 50,
                  backgroundColor: '#7A9F45',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: 60,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
    borderColor: '#DDDDDD',
  },
  inputStyle: {fontSize: 16},
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
});

export default ForgotPass;

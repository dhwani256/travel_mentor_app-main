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

export class RegisterAddress extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assest/login_bg_new.png')}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <ScrollView>
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

              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 18,
                  color: '#000',
                  fontWeight: '900',
                }}>
                Contact Details{' '}
              </Text>

              <View
                style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../assest/ring.png')}></Image>
                <View
                  style={{
                    height: 2,
                    width: 30,

                    backgroundColor: '#000',
                    marginTop: 9,
                    marginLeft: -1,
                  }}></View>
                <Image
                  style={{height: 20, width: 20, marginLeft: -1}}
                  source={require('../assest/circle.png')}></Image>

                <View
                  style={{
                    height: 2,
                    width: 30,

                    backgroundColor: '#000',
                    marginTop: 9,
                    marginLeft: -1,
                  }}></View>
                <Image
                  style={{height: 20, width: 20, marginLeft: -1}}
                  source={require('../assest/ring.png')}></Image>
              </View>

              <TextInput
                style={styles.input}
                inputStyle={styles.inputStyle}
                labelStyle={styles.labelStyle}
                placeholderStyle={styles.placeholderStyle}
                textErrorStyle={styles.textErrorStyle}
                label="Address "
                placeholder="Address"
                placeholderTextColor="gray"
                focusColor="#8DC42E"
              />

              <TextInput
                style={styles.input}
                inputStyle={styles.inputStyle}
                labelStyle={styles.labelStyle}
                placeholderStyle={styles.placeholderStyle}
                textErrorStyle={styles.textErrorStyle}
                label="City"
                placeholder="City"
                placeholderTextColor="gray"
                focusColor="#8DC42E"
              />

              <TextInput
                style={styles.input}
                inputStyle={styles.inputStyle}
                labelStyle={styles.labelStyle}
                placeholderStyle={styles.placeholderStyle}
                textErrorStyle={styles.textErrorStyle}
                label="State"
                placeholder="State"
                placeholderTextColor="gray"
                focusColor="#8DC42E"
              />

              <TextInput
                style={styles.input}
                inputStyle={styles.inputStyle}
                labelStyle={styles.labelStyle}
                placeholderStyle={styles.placeholderStyle}
                textErrorStyle={styles.textErrorStyle}
                label="Pincode"
                placeholder="Pincode"
                placeholderTextColor="gray"
                focusColor="#8DC42E"
              />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('RegisterCompany');
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
        </ScrollView>
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

export default RegisterAddress;

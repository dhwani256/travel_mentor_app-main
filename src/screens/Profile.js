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

export class Profile extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assest/login_bg_new.png')}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 10,
              marginTop: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assest/back.png')}
                  style={{width: 30, height: 30,marginLeft:3,alignSelf:'center',justifyContent:'center'}}></Image>
                <Text
                  style={{
                    marginTop: 5,
                    fontWeight: '600',
                    fontSize:15,
                    textAlign:'center'
                  }}>
                  Back
                </Text>
              </View>
            </TouchableOpacity>

            <Text
              style={{
                marginTop: 2,
                fontWeight: '700',
                color: '#000',
                marginLeft: -55,
                width: '100%',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Profile
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 60,
                width: 130,
                alignSelf: 'center',
                elevation: 10,
                marginTop: 80,
                marginBottom: 10,
                height: 130,
              }}>
              <Image
                source={require('../assest/man.png')}
                style={{
                  width: 120,
                  height: 120,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                }}></Image>
            </View>

            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 50,
              }}>
              Ravi Nimavat
            </Text>

            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Name"
              placeholder="Name"
              placeholderTextColor="gray"
              focusColor="#8DC42E"
            />

            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Email"
              placeholder="Email"
              placeholderTextColor="gray"
              focusColor="#8DC42E"
            />

            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Password"
              placeholder="Password"
              placeholderTextColor="gray"
              focusColor="#8DC42E"
            />

            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Mobile No"
              placeholder="Mobile No"
              placeholderTextColor="gray"
              focusColor="#8DC42E"
            />

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home');
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
                  Login
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

export default Profile;

import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export class Menu extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
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
            Menu
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginLeft: 20,
            marginTop: 35,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 40,
              width: 70,
              elevation: 10,
              marginBottom: 10,
              height: 70,
            }}>
            <Image
              source={require('../assest/man.png')}
              style={{
                width: 60,
                height: 60,
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 5,
              }}></Image>
          </View>

          <View
            style={{flexDirection: 'column', marginTop: 15, marginLeft: 15}}>
            <Text style={{fontSize: 12}}>Hello Good Morning</Text>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
              Spider Buddy
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: '#000',
            marginLeft: 20,
            marginTop: 20,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginLeft: 20,
            marginTop: 30,
          }}>
          <Text style={{fontSize: 14, fontWeight: '600'}}>Menu </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FlightHistory');
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assest/flight_history.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 5,
                color: '#000',
              }}>
              Flight History{' '}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => {
            this.props.navigation.navigate('AboutUs');
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assest/info.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 5,
                color: '#000',
              }}>
              About Us
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => {
            this.props.navigation.navigate('ContactUs');
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assest/contact.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 5,
                color: '#000',
              }}>
              Contact Us
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => {
            this.props.navigation.navigate('FlightHistory');
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assest/refund.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 5,
                color: '#000',
              }}>
              Cards and Refund
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => {
            this.props.navigation.navigate('FlightHistory');
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assest/privacy_policy.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 5,
                color: '#000',
              }}>
              Privacy Policy
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => {
            this.props.navigation.navigate('FlightHistory');
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assest/terms.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 5,
                color: '#000',
              }}>
              Terms and Condition
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => {
            this.props.navigation.navigate('FlightHistory');
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../assest/logout.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 5,
                color: '#000',
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Menu;

import {Image, SafeAreaView, TouchableOpacity, Text, View,Dimensions} from 'react-native';
import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
let dimensions = Dimensions.get("window");
let imageWidth = dimensions.width;
export class AboutUs extends Component {
  render() {
    return (
      <ScrollView>
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
              About Us
            </Text>
          </View>
          <View style={{marginTop:5}}>
          <Image
                source={require('../assest/mountain.jpg')}
                style={{width: imageWidth, height: 300,}}
                resizeMode='cover'></Image>
            <View style={{marginTop:'5%',justifyContent:'center',alignSelf:'center',width:'89%',}}>
            <Text style={{fontSize:20,fontWeight:'700',textAlign:'center',color:'#000',letterSpacing:-.5
          }}>OUR PURPOSE</Text>
            <Text style={{marginTop:'4%',lineHeight:22,textAlign:'center',
            fontSize:15,
          color:'#B5B7BE',fontWeight:'400'}}>All our holidays support loacl communities
             & nature and also out of India also it will gertare holidays
             with our term's</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default AboutUs;

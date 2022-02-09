import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  Easing,
  TextInput,
} from 'react-native';
export default class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_change: 1,
      ways: 0,
      // Date: new Date(),
      // new_date: null,
      // new_date: '',
      // data_state:false,
      //startDate: moment(new Date()).format('YYYY-MM-DD'),
    };
  }
  // set_date = date => {
  //     this.setState({new_date: moment(date).format('YYYY-MM-DD')});
  //     // this.setState({new_date: moment(date).add(1,'day').format('YYYY-MM-DD')});
  //   };
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <StatusBar hidden /> */}
        <View
          style={{
            backgroundColor: '#009EAE',
            alignSelf: 'center',
            borderTopRightRadius: 15,
            width: '100%',
            height: '40%',

            borderTopLeftRadius: 15,
          }}>
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
              Flight
            </Text>
          </View>

          <View
            style={{
              marginTop: '17%',
              marginLeft: 20,
            }}>
            <View>
              <Text style={{color: '#fff', fontSize: 21}}>
                Number of flights available for
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#fff', fontSize: 21}}>your journey </Text>
                <Image
                  source={require('../assest/travel.png')}
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: 7,
                    marginLeft: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: '5%',
            backgroundColor: '#fff',
            borderRadius: 20,
            width: '90%',

            marginTop: -100,
            alignSelf: 'center',
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 30,
              marginRight: 20,
              marginTop: 10,
            }}>
            <Image
              source={require('../assest/flogo.png')}
              style={{height: 50, width: 50, borderRadius: 40}}></Image>

            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                marginTop: 12,
                marginLeft: 10,
                color: '#000',
              }}>
              IndiGo A1-234567
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              paddingTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              BOM
            </Text>
            <View
              style={{
                borderColor: '#EEEEEE',
                justifyContent: 'center',
                width: 25,
                borderWidth: 1,

                borderRadius: 20,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assest/plane.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              DUX
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',

              marginTop: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontSize: 12}}>Take Time</Text>
            <Text style={{color: 'gray', fontSize: 12}}>Land time</Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              18:20
            </Text>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              23:20
            </Text>
          </View>

          <View style={{backgroundColor: '#fff', borderRadius: 10}}>
            <Text>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - -{' '}
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image
                source={require('../assest/food.png')}
                style={{width: 20, height: 20}}></Image>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 2,
                }}>
                No Meal
              </Text>
            </View>
            <Text
              style={{
                color: '#000',
                fontSize: 22,
                fontWeight: '600',
              }}>
              ₹8900
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: '5%',
            backgroundColor: '#fff',
            borderRadius: 20,
            width: '90%',

            marginTop: 20,
            alignSelf: 'center',
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 30,
              marginRight: 20,
              marginTop: 10,
            }}>
            <Image
              source={require('../assest/flogo.png')}
              style={{height: 50, width: 50, borderRadius: 40}}></Image>

            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                marginTop: 12,
                marginLeft: 10,
                color: '#000',
              }}>
              IndiGo B1-343434
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              paddingTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              BOM
            </Text>
            <View
              style={{
                borderColor: '#EEEEEE',
                justifyContent: 'center',
                width: 25,
                borderWidth: 1,

                borderRadius: 20,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assest/plane.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              DUX
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',

              marginTop: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontSize: 12}}>Take Time</Text>
            <Text style={{color: 'gray', fontSize: 12}}>Land time</Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              18:20
            </Text>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              23:20
            </Text>
          </View>

          <View style={{backgroundColor: '#fff', borderRadius: 10}}>
            <Text>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - -{' '}
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image
                source={require('../assest/food.png')}
                style={{width: 20, height: 20}}></Image>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 2,
                }}>
                No Meal
              </Text>
            </View>
            <Text
              style={{
                color: '#000',
                fontSize: 22,
                fontWeight: '600',
              }}>
              ₹8900
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',

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

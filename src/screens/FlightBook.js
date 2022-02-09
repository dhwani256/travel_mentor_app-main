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
export default class FlightBook extends Component {
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
                Let's book your{' '}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#fff', fontSize: 21}}>flight</Text>
                <Image
                  source={require('../assest/travel.png')}
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            top: '25%',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <View>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ways: 0,
                  });
                }}>
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                  <Text style={{fontSize: 18, fontWeight: '600'}}>Oneway</Text>
                  {this.state.ways == 1 ? null : (
                    <View
                      style={{
                        width: 50,
                        height: 3,
                        borderRadius: 10,
                        marginLeft: 4,
                        marginTop: 5,
                        backgroundColor: '#8DC42E',
                      }}></View>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ways: 1,
                  });
                }}>
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                  <Text style={{fontSize: 18, fontWeight: '600'}}>
                    Round Trip
                  </Text>
                  {this.state.ways == 0 ? null : (
                    <View
                      style={{
                        width: 50,
                        height: 3,
                        borderRadius: 10,
                        marginLeft: 4,
                        marginTop: 5,
                        backgroundColor: '#8DC42E',
                      }}></View>
                  )}
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginHorizontal: '6%',
                marginTop: 20,
                borderRadius: 10,
                borderColor: '#b0b0b0',
                borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View style={{flex: 6}}>
                <Text style={{fontSize: 12, marginLeft: 10, marginTop: 5}}>
                  From Country
                </Text>
                <TextInput
                  style={{marginLeft: 10, height: 40}}
                  label="To"
                  placeholder="To"
                  placeholderTextColor="black"
                  focusColor="#8DC42E"
                />
              </View>

              <View style={{flex: 1}}>
                <Image
                  source={require('../assest/flight_take_off.png')}
                  style={{width: 30, height: 30, marginTop: 15}}></Image>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                marginHorizontal: '6%',
                marginTop: 20,
                borderRadius: 10,
                borderColor: '#b0b0b0',
                borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View style={{flex: 6}}>
                <Text style={{fontSize: 12, marginLeft: 10, marginTop: 5}}>
                  To Country
                </Text>
                <TextInput
                  style={{marginLeft: 10, height: 40}}
                  label="To"
                  placeholder="To"
                  placeholderTextColor="black"
                  focusColor="#8DC42E"
                />
              </View>

              <View style={{flex: 1}}>
                <Image
                  source={require('../assest/flight_land.png')}
                  style={{width: 30, height: 30, marginTop: 15}}></Image>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                borderColor: '#dbdbdb',
                marginLeft: 20,
                marginRight: 20,
                borderWidth: 1,
                borderRadius: 10,
                flex: 1,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  marginTop: '5%',
                  marginBottom: '5%',
                }}
                //onPress={console.log("it's presss")}
                >
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../assest/calendar.png')}
                    style={{
                      width: 12,
                      height: 12,
                      tintColor: '#000',
                      marginTop: 5,
                    }}></Image>
                  <Text style={{color: '#b0b0b0', marginLeft: 5}}>
                    Departure
                  </Text>
                </View>
                <Text style={{marginTop: 5, color: '#000'}}>
                  Jun 02,2022
                  {/* {moment(new Date()).format('DD-MM-YYYY')} */}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {this.state.ways == 0 ? null : (
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View
                style={{
                  borderColor: '#dbdbdb',
                  marginLeft: 20,
                  marginRight: 20,
                  borderWidth: 1,
                  borderRadius: 10,
                  flex: 1,
                  marginBottom: 10,
                }}>
                <TouchableOpacity
                  style={{
                    marginLeft: 10,
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}
                  onPress={console.log("it's presss")}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../assest/calendar.png')}
                      style={{
                        width: 12,
                        height: 12,
                        tintColor: '#000',
                        marginTop: 5,
                      }}></Image>
                    <Text style={{color: '#b0b0b0', marginLeft: 5}}>
                      Return
                    </Text>
                  </View>
                  <Text style={{marginTop: 5, color: '#000'}}>
                    Jun 02,2022
                    {/* {moment(new Date()).format('DD-MM-YYYY')} */}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 25,
              marginTop: 20,
              marginRight: 25,
            }}>
            <View
              style={{
                flex: 1,
                borderColor: '#b0b0b0',
                borderRadius: 10,
                borderWidth: 1,
                marginRight: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assest/adult.png')}
                  style={{
                    width: 15,
                    height: 15,
                    marginLeft: 10,
                    tintColor: '#000',
                    marginTop: 8,
                  }}></Image>

                <Text style={{color: '#b0b0b0', marginLeft: 10, marginTop: 7}}>
                  Adult
                </Text>
              </View>
              <TextInput
                placeholder="No adult"
                style={{paddingLeft: 10, height: 40}}></TextInput>
            </View>

            <View
              style={{
                flex: 1,
                borderColor: '#b0b0b0',
                borderRadius: 10,
                borderWidth: 1,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assest/baby_boy.png')}
                  style={{
                    width: 15,
                    height: 15,
                    marginLeft: 10,
                    tintColor: '#000',
                    marginTop: 9,
                  }}></Image>

                <Text style={{color: '#b0b0b0', marginLeft: 10, marginTop: 7}}>
                  No Child
                </Text>
              </View>
              <TextInput
                placeholder="No child"
                style={{paddingLeft: 10, height: 40}}></TextInput>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('FlightList');
            }}>
            <View
              style={{
                width: '50%',
                height: 50,
                backgroundColor: '#7A9F45',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 30,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 10,
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#fff',
                }}>
                Search
              </Text>
            </View>
          </TouchableOpacity>
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

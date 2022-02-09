import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export class FlightHistory extends Component {
  renderItem = ({item, index}) => {};
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
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
            History
          </Text>
        </View>

        <View
          style={{
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#000',
            width: '90%',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          <TextInput
            placeholder="Search"
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              borderRadius: 20,
            }}></TextInput>
        </View>

        <View
          style={{
            marginTop: '5%',
            backgroundColor: '#fff',
            borderRadius: 20,
            width: '90%',
            marginBottom: 10,
            marginTop: 30,
            alignSelf: 'center',
            elevation: 10,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                source={require('../assest/confirm.png')}
                style={{height: 30, width: 30, marginLeft: 20}}></Image>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 6,
                  color: '#5CAEBA',
                }}>
                Ticketed
              </Text>
            </View>
            <View style={{flex: 1, marginRight: 20}}>
              <Image
                source={require('../assest/share.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#8DC42E',
                  alignSelf: 'flex-end',
                }}></Image>
            </View>
          </View>

          <Text
            style={{
              fontSize: 18,
              marginTop: 6,
              color: '#000',
              fontWeight: '600',
              marginLeft: 25,
            }}>
            Ravikumar Nimavat
          </Text>

          <View
            style={{
              marginHorizontal: '5%',
              marginBottom: 5,
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
              }}>
              <Text style={{fontSize: 12, color: '#5CAEBA', marginLeft: 10}}>
                Travelling Date
              </Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#5CAEBA',
                  marginLeft: 10,
                  alignSelf: 'flex-end',
                }}>
                Travelling Time
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: '5%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'rgba(224, 252, 255,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
                height: 30,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assest/calendar.png')}
                  style={{height: 15, width: 15}}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 12, color: '#5CAEBA', marginLeft: 10}}>
                May 30,2022
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(224, 252, 255,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
                height: 30,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assest/clock.png')}
                  style={{height: 16, width: 16}}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 12, color: '#5CAEBA', marginLeft: 10}}>
                1h 30 Min
              </Text>
            </View>
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

              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontSize: 12}}>Booking No</Text>
            <Text style={{color: 'gray', fontSize: 12}}>Booking Date</Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              123456789
            </Text>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              2nd Feb 2022
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: 'bold'}}>
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
            <Text style={{color: '#000', fontSize: 19, fontWeight: 'bold'}}>
              DUX
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: '5%',
            backgroundColor: '#fff',
            borderRadius: 20,
            width: '90%',
            marginBottom: 50,

            alignSelf: 'center',
            elevation: 10,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image
              source={require('../assest/confirm.png')}
              style={{height: 30, width: 30, marginLeft: 20}}></Image>

            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 6,
                color: '#5CAEBA',
              }}>
              Ticketed
            </Text>
          </View>

          <Text
            style={{
              fontSize: 18,
              marginTop: 6,
              color: '#000',
              fontWeight: '600',
              marginLeft: 25,
            }}>
            Ravikumar Nimavat
          </Text>

          <View
            style={{
              marginHorizontal: '5%',
              marginBottom: 5,
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
              }}>
              <Text style={{fontSize: 12, color: '#5CAEBA', marginLeft: 10}}>
                Travelling Date
              </Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#5CAEBA',
                  marginLeft: 10,
                  alignSelf: 'flex-end',
                }}>
                Travelling Time
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: '5%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'rgba(224, 252, 255,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
                height: 30,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assest/calendar.png')}
                  style={{height: 15, width: 15}}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 12, color: '#5CAEBA', marginLeft: 10}}>
                May 30,2022
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(224, 252, 255,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                width: '40%',
                height: 30,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assest/clock.png')}
                  style={{height: 16, width: 16}}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 12, color: '#5CAEBA', marginLeft: 10}}>
                1h 30 Min
              </Text>
            </View>
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

              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontSize: 12}}>Booking No</Text>
            <Text style={{color: 'gray', fontSize: 12}}>Booking Date</Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              123456789
            </Text>
            <Text style={{color: '#000', fontSize: 15, fontWeight: '900'}}>
              2nd Feb 2022
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
              marginBottom: 10,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: 'bold'}}>
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
            <Text style={{color: '#000', fontSize: 19, fontWeight: 'bold'}}>
              DUX
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default FlightHistory;

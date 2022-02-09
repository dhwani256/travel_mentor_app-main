import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';

var images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree', // Network image
];

export class Home extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
        <ImageBackground
          style={{
            width: '100%',
            height: 350,
          }}
          source={require('../assest/h2.png')}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 1, height: 60}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Menu');
                }}>
                <Image
                  source={require('../assest/menu.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginLeft: 20,
                    marginTop: 21,
                  }}></Image>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,

                alignContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 15,
                    backgroundColor: '#000',
                    alignSelf: 'flex-end',
                    borderRadius: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      paddingTop: 8,
                      color: '#fff',
                      fontWeight: 'bold',
                    }}>
                    RN
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flex: 1,
            marginTop: -30,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              elevation: 20,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('FlightBook');
              }}>
              <Image
                source={require('../assest/flight.png')}
                style={{
                  width: 35,
                  height: 35,
                  alignSelf: 'center',
                  tintColor: '#7A9F45',
                  marginTop: 10,
                }}
                resizeMode="contain"></Image>

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#000',
                  fontWeight: '600',
                  paddingBottom: 10,
                  marginTop: 5,
                }}>
                Flight
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              elevation: 20,
              marginLeft: 10,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assest/linsurance.png')}
              style={{
                width: 35,
                height: 35,
                tintColor: '#7A9F45',
                alignSelf: 'center',
                marginTop: 10,
              }}
              resizeMode="contain"></Image>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#000',
                marginTop: 5,
                fontWeight: '600',
                paddingBottom: 10,
              }}>
              Insurance
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              elevation: 20,
              marginLeft: 10,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assest/visa.png')}
              style={{
                width: 35,
                height: 35,
                tintColor: '#7A9F45',
                alignSelf: 'center',
                marginTop: 10,
              }}
              resizeMode="contain"></Image>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#000',
                fontWeight: '600',
                paddingBottom: 10,
                marginTop: 5,
              }}>
              Visa
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              elevation: 20,
              borderRadius: 10,
              marginLeft: 10,
            }}>
            <Image
              source={require('../assest/cruise.png')}
              style={{
                width: 35,
                height: 35,
                alignSelf: 'center',
                tintColor: '#7A9F45',
                marginTop: 10,
              }}
              resizeMode="contain"></Image>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#000',
                fontWeight: '600',
                paddingBottom: 10,
                marginTop: 5,
              }}>
              Cruise
            </Text>
          </View>
        </View>

        <View style={{alignSelf: 'center', width: '90%', marginTop: 20}}>
          <SliderBox
            autoplay={true}
            circleLoop
            resizeMode="stretch"
            images={images}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            style={{
              width: '90%',
              height: 180,
              marginTop: 10,
              borderRadius: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Recent Ticket{' '}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'flex-end',
              alignContent: 'flex-end',
              paddingLeft: '40%',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('FlightHistory');
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    textAlign: 'right',
                    width: 80,
                  }}>
                  View All
                </Text>
                <Image
                  source={require('../assest/next.png')}
                  style={{
                    height: 20,
                    width: 20,
                    marginTop: 2,
                    tintColor: '#000',
                  }}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: '5%',
            backgroundColor: '#fff',
            borderRadius: 20,
            width: '90%',
            marginBottom: 50,
            marginTop: 30,
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
      </ScrollView>
    );
  }
}

export default Home;

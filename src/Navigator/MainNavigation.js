import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import ForgotPass from '../screens/ForgotPass';
import ForgotOtp from '../screens/ForgotOtp';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import FlightHistory from '../screens/FlightHistory';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import RegisterAddress from '../screens/RegisterAddress';
import RegisterCompany from '../screens/RegisterCompany';
import FlightBook from '../screens/FlightBook';
import FlightList from '../screens/FlightList';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ForgotOtp"
          component={ForgotOtp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FlightHistory"
          component={FlightHistory}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="RegisterAddress"
          component={RegisterAddress}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="RegisterCompany"
          component={RegisterCompany}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FlightBook"
          component={FlightBook}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlightList"
          component={FlightList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

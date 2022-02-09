import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {connect, Provider} from 'react-redux';
import reduxStore from './src/Store/store';
import MainNavigation from './src/Navigator/MainNavigation';

function App({navigation, props}) {
  const {store, persistor} = reduxStore();
  const [isCalled, setCalled] = useState(false);
  // if (!isCalled) {
  //   requestUserPermission();
  //   if (!messaging().isDeviceRegisteredForRemoteMessages) {
  //     messaging()
  //       .registerDeviceForRemoteMessages()
  //       .then((value) => {
  //         console.log('REGISTER ', value);
  //         console.log('REGISTER ', value);
  //       });
  //   }
  //   console.log('REGISTER 2', messaging().isDeviceRegisteredForRemoteMessages);
  //   setCalled(true);
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  // add_pushnotification_token,
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

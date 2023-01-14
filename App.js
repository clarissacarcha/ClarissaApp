// @flow
import React, {useEffect} from 'react';
import {StatusBar, LogBox, View, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
//NAV
import {default as Nav} from 'src/nav';
//REDUX
import store from './src/reducers/store';
import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

const App = (): React$Element<React$FragmentType> => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <View style={styles.container}>
          <Nav />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

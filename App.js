// @flow
import React from 'react';
import {StatusBar, LogBox, View, StyleSheet} from 'react-native';
import {getStatusbarHeight, moderateScale} from 'src/helper';
import {default as Nav} from 'src/nav';
import {SafeAreaProvider} from 'react-native-safe-area-context';

LogBox.ignoreAllLogs();

const App = (): React$Element<React$FragmentType> => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: moderateScale(getStatusbarHeight),
    flex: 1,
  },
});

export default App;

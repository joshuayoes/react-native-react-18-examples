import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {
  RootStackNavigator,
  rootStackRef,
} from './src/navigators/RootStackNavigator';

function App(): JSX.Element {
  return (
    <View style={styles}>
      <NavigationContainer ref={rootStackRef}>
        <RootStackNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = {
  flex: 1,
} as const;

export default App;

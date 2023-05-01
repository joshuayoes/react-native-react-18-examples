import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {UseTransitionExampleScreen} from './src/screens/UseTransitionExample';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <UseTransitionExampleScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

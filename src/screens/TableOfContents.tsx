import React from 'react';
import {Button, View, ViewStyle} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  RootStackParamList,
  RootStackScreens,
} from '../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'TableOfContentsScreen'
>;

export function TableOfContentsScreen(props: Props) {
  const screens = Object.values(RootStackScreens).filter(
    screen => screen.name !== 'TableOfContentsScreen',
  );

  return (
    <View style={styles.root}>
      {screens.map(screen => (
        <Button
          key={screen.name}
          title={screen.name}
          accessibilityLabel={`Navigate to ${screen.name}`}
          onPress={() => {
            props.navigation.navigate(screen.name);
          }}
        />
      ))}
    </View>
  );
}

const root: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  gap: 10,
  margin: 10,
};

const styles = {root} as const;

import React from 'react';
import {Button, View, ViewStyle} from 'react-native';

import type {RootStackProps} from '../navigators/RootStackNavigator';
import {RootStackScreens} from '../navigators/RootStackNavigator';

type Props = RootStackProps<'TableOfContentsScreen'>;

export function TableOfContentsScreen(props: Props) {
  const screens = Object.values(RootStackScreens)
    .filter(screen => screen.name !== 'TableOfContentsScreen')
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View style={styles.root}>
      {screens.map(screen => (
        <Button
          key={screen.name}
          title={screen.title}
          accessibilityLabel={`Navigate to ${screen.title}`}
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

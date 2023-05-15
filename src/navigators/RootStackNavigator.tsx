import React from 'react';

import {createNavigationContainerRef} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {UseTransitionExampleScreen} from '../screens/UseTransitionExample';
import {AutomaticBatchingExampleScreen} from '../screens/AutomaticBatchingExample';
import {TableOfContentsScreen} from '../screens/TableOfContents';

export type RootStackParamList = {
  UseTransitionExample: undefined;
  AutomaticBatchingExample: undefined;
  TableOfContentsScreen: undefined;
};

export const RootStackScreens = {
  UseTransitionExample: {
    name: 'UseTransitionExample',
    component: UseTransitionExampleScreen,
  },
  AutomaticBatchingExample: {
    name: 'AutomaticBatchingExample',
    component: AutomaticBatchingExampleScreen,
  },
  TableOfContentsScreen: {
    name: 'TableOfContentsScreen',
    component: TableOfContentsScreen,
  },
} as Record<
  keyof RootStackParamList,
  {
    name: keyof RootStackParamList;
    component:
      | React.ComponentType
      | React.ComponentType<
          NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>
        >;
  }
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const rootStackRef = createNavigationContainerRef<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={RootStackScreens.TableOfContentsScreen.name}
      screenOptions={{title: 'React 18 Examples'}}>
      <RootStack.Screen
        name={RootStackScreens.TableOfContentsScreen.name}
        component={RootStackScreens.TableOfContentsScreen.component}
      />
      <RootStack.Screen
        name={RootStackScreens.UseTransitionExample.name}
        component={RootStackScreens.UseTransitionExample.component}
      />
      <RootStack.Screen
        name={RootStackScreens.AutomaticBatchingExample.name}
        component={RootStackScreens.AutomaticBatchingExample.component}
      />
    </RootStack.Navigator>
  );
}

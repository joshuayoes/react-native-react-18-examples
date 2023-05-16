import React from 'react';

import {createNavigationContainerRef} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {UseTransitionExampleScreen} from '../screens/UseTransitionExample';
import {AutomaticBatchingExampleScreen} from '../screens/AutomaticBatchingExample';
import {UseDeferredValueExampleScreen} from '../screens/UseDeferredValueExample';
import {TableOfContentsScreen} from '../screens/TableOfContents';

export type RootStackParamList = {
  UseTransitionExample: undefined;
  AutomaticBatchingExample: undefined;
  TableOfContentsScreen: undefined;
  UseDeferredValueExample: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackProps<
  Screen extends keyof RootStackParamList = keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, Screen>;

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
  UseDeferredValueExample: {
    name: 'UseDeferredValueExample',
    component: UseDeferredValueExampleScreen,
  },
} satisfies Record<
  keyof RootStackParamList,
  {
    name: keyof RootStackParamList;
    component: React.FC<any>;
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
      <RootStack.Screen
        name={RootStackScreens.UseDeferredValueExample.name}
        component={RootStackScreens.UseDeferredValueExample.component}
      />
    </RootStack.Navigator>
  );
}

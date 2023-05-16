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
import {SuspenseExampleScreen} from '../screens/SuspenseExample';

export type RootStackParamList = {
  UseTransitionExample: undefined;
  AutomaticBatchingExample: undefined;
  TableOfContentsScreen: undefined;
  UseDeferredValueExample: undefined;
  SuspenseExample: undefined;
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
  SuspenseExample: {
    name: 'SuspenseExample',
    component: SuspenseExampleScreen,
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
      {Object.values(RootStackScreens).map(screen => (
        <RootStack.Screen
          key={screen.name}
          name={screen.name as any}
          component={screen.component}
        />
      ))}
    </RootStack.Navigator>
  );
}

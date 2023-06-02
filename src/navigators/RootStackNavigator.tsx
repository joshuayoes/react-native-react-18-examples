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
import {UseSyncExternalStoreExampleScreen} from '../screens/UseSyncExternalStoreExample';
import {StrictModeExampleScreen} from '../screens/StrictModeExample';

export type RootStackParamList = {
  AutomaticBatchingExample: undefined;
  StrictModeExample: undefined;
  SuspenseExample: undefined;
  TableOfContentsScreen: undefined;
  UseDeferredValueExample: undefined;
  UseSyncExternalStoreExample: undefined;
  UseTransitionExample: undefined;
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
  AutomaticBatchingExample: {
    name: 'AutomaticBatchingExample',
    title: 'Automatic Batching example',
    component: AutomaticBatchingExampleScreen,
  },
  UseTransitionExample: {
    name: 'UseTransitionExample',
    title: 'useTransition example',
    component: UseTransitionExampleScreen,
  },
  TableOfContentsScreen: {
    name: 'TableOfContentsScreen',
    title: 'React 18 Examples',
    component: TableOfContentsScreen,
  },
  UseDeferredValueExample: {
    name: 'UseDeferredValueExample',
    title: 'useDeferredValue example',
    component: UseDeferredValueExampleScreen,
  },
  SuspenseExample: {
    name: 'SuspenseExample',
    title: 'Suspense example',
    component: SuspenseExampleScreen,
  },
  UseSyncExternalStoreExample: {
    name: 'UseSyncExternalStoreExample',
    title: 'useSyncExternalStore example',
    component: UseSyncExternalStoreExampleScreen,
  },
  StrictModeExample: {
    name: 'StrictModeExample',
    title: 'Strict Mode example',
    component: StrictModeExampleScreen,
  },
} satisfies Record<
  keyof RootStackParamList,
  {
    name: keyof RootStackParamList;
    title: string;
    component: React.FC<any>;
  }
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const rootStackRef = createNavigationContainerRef<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={RootStackScreens.TableOfContentsScreen.name}>
      {Object.values(RootStackScreens).map(screen => (
        <RootStack.Screen
          key={screen.name}
          name={screen.name as any}
          component={screen.component}
          options={{title: screen.title}}
        />
      ))}
    </RootStack.Navigator>
  );
}

import React from 'react';
import {Text} from 'react-native';

/**
 * @see https://react.dev/blog/2022/03/08/react-18-upgrade-guide#automatic-batching
 * @see https://github.com/reactwg/react-18/discussions/21
 */
export function AutomaticBatchingExampleScreen() {
  return (
    <>
      <Text>Automatic Batching</Text>
    </>
  );
}

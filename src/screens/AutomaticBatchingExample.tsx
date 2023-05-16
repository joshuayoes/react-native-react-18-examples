import React from 'react';
import {Button, Text, View} from 'react-native';

/**
 * @see https://react.dev/blog/2022/03/08/react-18-upgrade-guide#automatic-batching
 * @see https://github.com/reactwg/react-18/discussions/21
 */
export function AutomaticBatchingExampleScreen() {
  const [count, setCount] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  function handleClick() {
    setCount(c => c + 1);
    setFlag(f => !f);
  }

  return (
    <View>
      <Button title="Next" onPress={handleClick} />
      <Text>Count: {count}</Text>
      <Text>Flag: {`${flag}`}</Text>
    </View>
  );
}

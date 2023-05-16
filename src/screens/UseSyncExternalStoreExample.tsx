import React from 'react';
import {Button, Text, View, ViewStyle} from 'react-native';
import {todosStore} from '../data/todoStore';

/**
 * @see https://react.dev/reference/react/useSyncExternalStore#usage
 */
export function UseSyncExternalStoreExampleScreen() {
  const todos = React.useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot,
  );
  return (
    <View style={$container}>
      <Button onPress={() => todosStore.addTodo()} title="Add Todo" />

      {todos.map(todo => (
        <Text key={todo.id}>&bull; {todo.text}</Text>
      ))}
    </View>
  );
}

const $container: ViewStyle = {
  gap: 10,
  padding: 10,
};

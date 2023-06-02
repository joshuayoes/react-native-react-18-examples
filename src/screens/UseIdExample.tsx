import React from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

function PasswordField() {
  const passwordHintId = React.useId();

  const [password, setPassword] = React.useState('');

  return (
    <View style={$style.container}>
      <Text style={$style.label} nativeID={passwordHintId}>
        Password:
      </Text>
      <TextInput
        aria-describedby={passwordHintId}
        value={password}
        onChangeText={setPassword}
        style={$style.input}
        secureTextEntry
      />
      <Text id={passwordHintId} style={$style.hint}>
        Hint id is {passwordHintId}.
      </Text>
    </View>
  );
}

const $style = {
  input: {
    margin: 8,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  } satisfies TextStyle,
  label: {
    fontSize: 16,
    marginLeft: 8,
  } satisfies TextStyle,
  hint: {
    fontSize: 12,
    marginLeft: 8,
  } satisfies TextStyle,
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
  } satisfies TextStyle,
  container: {
    marginVertical: 8,
  } satisfies ViewStyle,
};
export function UseIdExampleScreen() {
  return (
    <>
      <Text style={$style.header}>Choose password</Text>
      <PasswordField />
      <Text style={$style.header}>Confirm password</Text>
      <PasswordField />
    </>
  );
}

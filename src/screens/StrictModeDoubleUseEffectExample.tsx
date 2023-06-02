import React from 'react';
import {Button, Text, TextStyle, View, ViewStyle} from 'react-native';

import {createConnection} from '../data/chat';

const serverUrl = 'https://localhost:1234';

/** @see https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-re-running-effects-in-development */
export function ChatRoom({roomId}: {roomId: string}) {
  React.useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
  }, [roomId]);
  return <Text style={$styles.header}>Welcome to the {roomId} room!</Text>;
}

function App() {
  const [roomId, setRoomId] = React.useState<'general' | 'travel' | 'music'>(
    'general',
  );
  const [show, setShow] = React.useState(false);

  const toggleSwitch = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <View style={$styles.container}>
      <Text style={$styles.header}>Choose the chat room:</Text>
      <Button title="general" onPress={() => setRoomId('general')} />
      <Button title="travel" onPress={() => setRoomId('travel')} />
      <Button title="music" onPress={() => setRoomId('music')} />
      <Button
        title={show ? 'Close chat' : 'Open chat'}
        onPress={toggleSwitch}
      />
      {show && <View style={$styles.show} />}
      {show && <ChatRoom roomId={roomId} />}
    </View>
  );
}

const $styles = {
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    gap: 10,
  } satisfies ViewStyle,
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  } satisfies TextStyle,
  show: {borderBottomWidth: 1, marginVertical: 10} satisfies ViewStyle,
} as const;

export function StrictModeDoubleUseEffectExampleScreen() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

import React from 'react';
import {Text, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {fetchData} from '../data/albums';
import {use} from '../hooks/use';

/**
 * @see https://react.dev/reference/react/useDeferredValue#usage
 *
 * To see the "old" way in action and get the "Loading"
 * message on each press, follow the two comments below
 */
export function UseDeferredValueExampleScreen() {
  const [query, setQuery] = React.useState('');
  // 1. Comment the line below
  const deferredQuery = React.useDeferredValue<string>(query);
  return (
    <View style={$container}>
      <Text>Search albums:</Text>
      <TextInput
        value={query}
        onChangeText={text => setQuery(text)}
        style={$textInput}
        autoCapitalize="none"
      />
      <React.Suspense fallback={<Text style={$loading}>Loading...</Text>}>
        {/* 2. Change `deferredQuery` to `query` */}
        <SearchResults query={deferredQuery} />
      </React.Suspense>
    </View>
  );
}

const $container: ViewStyle = {
  gap: 10,
  padding: 10,
};

const $textInput: TextStyle = {
  backgroundColor: 'white',
  padding: 5,
  borderRadius: 5,
  minHeight: 40,
};

const $loading: TextStyle = {
  fontWeight: 'bold',
  fontSize: 20,
};
export default function SearchResults({query}: {query: string}) {
  if (query === '') {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return (
      <View>
        <Text>
          No matches for <Text>{query}</Text>
        </Text>
      </View>
    );
  }

  return (
    <View>
      {albums.map(album => (
        <Text key={album.id}>
          &bull; {album.title} ({album.year})
        </Text>
      ))}
    </View>
  );
}

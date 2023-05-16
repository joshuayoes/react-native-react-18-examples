import React from 'react';
import {Text, View} from 'react-native';
import {fetchData} from '../data/albums';
import {use} from '../hooks/use';

export default function Albums({artistId}: {artistId: string}) {
  const albums = use(fetchData(`/${artistId}/albums`));
  return (
    <View>
      {albums.map(album => (
        <Text key={album.id}>
          {album.title} ({album.year})
        </Text>
      ))}
    </View>
  );
}

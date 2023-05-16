import React from 'react';
import {Text} from 'react-native';

import Albums from './Album';

export interface Artist {
  id: string;
  name: string;
}

export function ArtistPage({artist}: {artist: Artist}) {
  return (
    <>
      <Text>{artist.name}</Text>
      <React.Suspense fallback={<Loading />}>
        <Albums artistId={artist.id} />
      </React.Suspense>
    </>
  );
}

function Loading() {
  return <Text>🌀 Loading...</Text>;
}

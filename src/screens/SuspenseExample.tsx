import React from 'react';
import {Button} from 'react-native';

import {ArtistPage} from '../components/ArtistPage';

/** @see https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading */
export function SuspenseExampleScreen() {
  const [show, setShow] = React.useState(false);
  if (show) {
    return (
      <ArtistPage
        artist={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}
      />
    );
  } else {
    return (
      <Button
        onPress={() => setShow(true)}
        title="Open The Beatles artist page"
      />
    );
  }
}

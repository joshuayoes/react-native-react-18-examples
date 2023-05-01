import React, {memo} from 'react';
import {View, Text, ViewProps} from 'react-native';

function PostsTabComponent() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <View style={styles.itemsContainer}>{items}</View>
    </View>
  );
}
const PostsTab = memo(PostsTabComponent);
export {PostsTab};

function SlowPost({index}: {index: number}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <View style={styles.item}>
      <Text>Post #{index + 1}</Text>
    </View>
  );
}

const styles: Record<string, ViewProps['style']> = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
  },
  itemsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
};

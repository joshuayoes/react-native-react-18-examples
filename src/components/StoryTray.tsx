import React from 'react';
import {Text, View, ViewStyle} from 'react-native';

export interface Story {
  id: number;
  label: string;
}

/** @see https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development */
export function BadStoryTray({stories}: {stories: Story[]}) {
  const items = stories;
  items.push({id: 2, label: 'Create Story'});
  return (
    <View style={$styles.container}>
      {items.map(story => (
        <Text style={$styles.card} key={story.id}>
          {story.label}
        </Text>
      ))}
    </View>
  );
}

const $styles = {
  card: {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    margin: 10,
  },
} satisfies Record<string, ViewStyle>;

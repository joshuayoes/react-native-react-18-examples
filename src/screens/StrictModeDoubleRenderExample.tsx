import React from 'react';
import {View} from 'react-native';
import {BadStoryTray, Story} from '../components/StoryTray';

const initialStories = [
  {id: 0, label: "Ankit's Story"},
  {id: 1, label: "Taylor's Story"},
] satisfies Story[];

/** @see https://react.dev/reference/react/StrictMode */
export function StrictModeDoubleRenderExampleScreen() {
  let [stories] = React.useState(initialStories);
  return (
    <React.StrictMode>
      <View>
        <BadStoryTray stories={stories} />
      </View>
    </React.StrictMode>
  );
}

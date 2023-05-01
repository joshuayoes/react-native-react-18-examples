import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function ContactTab() {
  return (
    <View style={styles.container}>
      <Text>You can find me online here:</Text>
      <View style={styles.listItem}>
        <Text style={styles.text}>admin@mysite.com</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.text}>+123456789</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
});

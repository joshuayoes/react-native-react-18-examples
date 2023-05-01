import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface TabButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({children, isActive, onClick}: TabButtonProps) {
  const buttonStyle = isActive ? styles.activeButton : styles.inactiveButton;

  return (
    <TouchableOpacity onPress={onClick} style={buttonStyle}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 8,
  },
  inactiveButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

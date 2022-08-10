import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Todo TDD</Text>
      <TextInput placeholder="+ Add a Task" />
      <Text>Learn React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

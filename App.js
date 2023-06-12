import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>
          search
        </Text>
      </View>
      <View style={styles.list}>
        <Text>
          list
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  search: {
    padding: 15,
    backgroundColor: 'green'
  },
  list : {
    flex: 1,
    padding: 15,
    backgroundColor: 'blue'
  }
});
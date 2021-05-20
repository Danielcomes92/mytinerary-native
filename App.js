import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/components/Menu'

export default function App() {
  return (
    <>
        <SafeAreaView style={styles.container}>

            <Menu />        
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'gray'
  }

});

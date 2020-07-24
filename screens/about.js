import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '/Users/mac/Desktop/testreact/gamezone1/styles/global';

export default function About() {
  return (
<View style={globalStyles.container}>
<Text >About screen</Text>
</View>
  )}
  const styles = StyleSheet.create({
    container: {
      padding:24
    },
  });
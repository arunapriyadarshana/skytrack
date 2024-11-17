import {  Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>This screen doesn't exist.</Text>
      </View>
    </>
  );
}


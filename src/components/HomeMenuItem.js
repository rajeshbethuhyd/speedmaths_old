import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function HomeMenuItem({navigation}) {
  return (
    <View style={styles.HomeMenuItemStyles}>
      <Pressable
        onPress={() => {
          navigation.navigate('Tables');
        }}>
        <Text style={styles.HomeMenuItemText}>Tables</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeMenuItemStyles: {
    backgroundColor: '#6495ed',
    borderRadius: 2,
    padding: 10,
    margin: 5,
  },
  HomeMenuItemText: {
    fontSize: 20,
    fontWeight: 600,
  },
});

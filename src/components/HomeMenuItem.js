import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function HomeMenuItem({navigation}) {
  return (
    <View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Tables');
          }}>
          <Text style={styles.HomeMenuItemText}>TABLES</Text>
        </Pressable>
      </View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Squares');
          }}>
          <Text style={styles.HomeMenuItemText}>SQUARES</Text>
        </Pressable>
      </View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Cubes');
          }}>
          <Text style={styles.HomeMenuItemText}>CUBES</Text>
        </Pressable>
      </View>
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

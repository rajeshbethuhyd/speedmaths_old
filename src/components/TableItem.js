import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

export default function TableItem({
  tableNum = null,
  navigation,
  is_mixed = false,
}) {
  return (
    <Pressable
      style={styles.TableItemStyles}
      onPress={() => {
        navigation.navigate('Practice', {
          tableNum: tableNum,
          is_mixed: is_mixed,
        });
      }}>
      <Text style={{color: 'white'}}>{is_mixed ? 'Mixed' : tableNum}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  TableItemStyles: {
    padding: 10,
    margin: 5,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
});

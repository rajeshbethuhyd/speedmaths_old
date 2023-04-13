import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeMenuItem from '../components/HomeMenuItem'

export default function Home({navigation}) {
  return (
    <View style={styles.Container}>
        <HomeMenuItem navigation={navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
  Container:{
    paddingTop:10,
    height:'100%',
    backgroundColor:'#fff'
  }
});
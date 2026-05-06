import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View style={{flex: 1}}>
        
        <Stack screenOptions={{
          headerStyle: {backgroundColor: "#eef"},
          headerTintColor: "#ff1"
        }}>
          <Stack.Screen name="index" options={{title: "Home", headerTintColor: "#000"}} />
          <Stack.Screen name="about" options={{title: "About"}} />
          <Stack.Screen name="contact" options={{title: "Contact", headerShown: false}} />
        </Stack>
        
        <View style={styles.footer}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </View>

    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  footer: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-around"
  }
})
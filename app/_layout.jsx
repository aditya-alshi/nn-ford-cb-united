import { StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack, Link } from "expo-router";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        />
      </Stack>

      <View style={[styles.footer, { backgroundColor: theme.uiBackground }]}>
        <Link href="/about" style={{ color: theme.title }}>
          About
        </Link>
        <Link href="/contact" style={{ color: theme.title }}>
          Contact
        </Link>
      </View>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  footer: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

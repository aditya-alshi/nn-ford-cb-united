import { StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack, Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";

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
        // For auth page
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>

      
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

import { StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack, Link } from "expo-router";
import { Colors } from "../../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          
          animation: "none",
          headerStyle : {backgroundColor: "#111"}
        }}
      >
      </Stack>

      
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

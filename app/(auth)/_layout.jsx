import { StatusBar, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { Colors } from "../../constants/Colors";

const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        animation: "none"
      }}
      
    >
        <Stack.Screen name="login" options={{title:"Login"}}></Stack.Screen>
        <Stack.Screen name="register" options={{title:"Register"}}></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;

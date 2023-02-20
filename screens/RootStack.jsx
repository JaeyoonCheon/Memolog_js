import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTab from "./MainTab";
import MySearchScreen from "./MySearchScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import WriteScreen from "./WriteScreen";
import DocumentDetailScreen from "./DocumentDetailScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="MySearch"
        component={MySearchScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={DocumentDetailScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootStack;

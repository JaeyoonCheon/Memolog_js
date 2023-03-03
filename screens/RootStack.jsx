import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTab from "./MainTab";
import MySearchScreen from "./MySearchScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import WriteScreen from "./WriteScreen";
import DocumentDetailScreen from "./DocumentDetailScreen";
import SplashScreen from "./SplashScreen";
import WelcomeScreen from "./WelcomeScreen";
import useLoadAuthEffect from "../hooks/useLoadAuthEffect";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  useLoadAuthEffect();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
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

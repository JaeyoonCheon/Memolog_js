import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

import RootStack from "./screens/RootStack";
import { UserContextProvider } from "./contexts/UserContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack></RootStack>
        </NavigationContainer>
      </QueryClientProvider>
    </UserContextProvider>
  );
};

export default App;

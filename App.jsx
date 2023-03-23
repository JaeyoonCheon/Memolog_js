import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

import RootStack from "./screens/RootStack";
import { UserContextProvider } from "./contexts/UserContext";
import { TokenContextProvider } from "./contexts/TokenContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <TokenContextProvider>
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <RootStack></RootStack>
          </NavigationContainer>
        </QueryClientProvider>
      </UserContextProvider>
    </TokenContextProvider>
  );
};

export default App;

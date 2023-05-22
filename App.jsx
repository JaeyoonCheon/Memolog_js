import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

import RootStack from "./screens/RootStack";
import { UserContextProvider } from "./contexts/UserContext";
import { TokenContextProvider } from "./contexts/TokenContext";
import { ModalContextProvider } from "./contexts/ModalContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <TokenContextProvider>
      <UserContextProvider>
        <ModalContextProvider>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <RootStack></RootStack>
            </NavigationContainer>
          </QueryClientProvider>
        </ModalContextProvider>
      </UserContextProvider>
    </TokenContextProvider>
  );
};

export default App;

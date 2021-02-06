import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { createStackNavigator } from "@react-navigation/stack";

import { Home, Profile } from "./screens";

const App: React.FC = () => {
  const App = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <App.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <App.Screen name="Home" component={Home} />
        <App.Screen name="Profile" component={Profile} />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default App;

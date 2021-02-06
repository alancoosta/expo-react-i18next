import "react-native-gesture-handler";
import "./locales";

import React, { Suspense } from "react";
import { View, ActivityIndicator } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AppProvider from "./hooks";

import { Home, Profile } from "./screens";

const LoadingContainer: React.FC = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={64} color="#e4007d" />
    </View>
  );
};

const App: React.FC = () => {
  const App = createStackNavigator();

  return (
    <NavigationContainer>
      <Suspense fallback={<LoadingContainer />}>
        <AppProvider>
          <StatusBar style="light" backgroundColor="transparent" translucent />

          <App.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <App.Screen name="Home" component={Home} />
            <App.Screen name="Profile" component={Profile} />
          </App.Navigator>
        </AppProvider>
      </Suspense>
    </NavigationContainer>
  );
};

export default App;

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home, Profile } from "../screens";

const App = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  );
};

export default AppStack;

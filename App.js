import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// components
import Registro from "./src/components/Registro";
import Onboarding from "./src/components/Onboarding";
import RegistroExitoso from "./src/components/RegistroExitoso";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="RegistroExitoso" component={RegistroExitoso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

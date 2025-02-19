import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import topbar from '@/shared/Topbar';

import { useColorScheme } from '@/hooks/useColorScheme';
import Topbar from '@/shared/Topbar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <Stack>
      <Stack.Screen name= "chatscreen" options = {{ title: "чаты"}}/>
      <Stack.Screen name= "lastchatscreen" options = {{ title: "последний чат"}}/>
      <Stack.Screen name= "contactsscreen" options = {{ title: "контакты"}}/>
    </Stack>
    <Topbar/>
    </>
  );
}

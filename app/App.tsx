import { FiraCode_400Regular, FiraCode_500Medium, FiraCode_600SemiBold } from '@expo-google-fonts/fira-code';
import { ReadexPro_200ExtraLight, ReadexPro_300Light, ReadexPro_400Regular, ReadexPro_500Medium, ReadexPro_600SemiBold, ReadexPro_700Bold } from '@expo-google-fonts/readex-pro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Linking, Platform, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatePostScreen from './CreatePostScreen';
import HomeScreen from './HomeScreen';
import PostsScreen from './PostsScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const DEV_ROUTE: string | null = 'Posts';
const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);
  
  let [fontsLoaded] = useFonts({
    ReadexPro_200ExtraLight,
    ReadexPro_300Light,
    ReadexPro_400Regular,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
  });

  if (!isReady) {
    return null;
  }

  if (!fontsLoaded) {
    return <View>App is loading...</View>
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        } 
      >
        {/* @ts-ignore */}
        <Stack.Navigator initialRouteName={DEV_ROUTE ?? 'Home'} screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Posts" component={PostsScreen} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        </Stack.Navigator>

        <StatusBar />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

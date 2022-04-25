import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import CreatePostScreen from './CreatePostScreen';
import HomeScreen from './HomeScreen';
import PostsScreen from './PostsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Do not remove the navigation container
    <NavigationContainer>
      {/* @ts-ignore */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
  );
}

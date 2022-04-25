import { View, Text, Button } from "react-native";

export default function PostsScreen({ navigation }) {
  return (
    <View>
      <Text>Posts Screen</Text>

      {/* Navigation buttons */}
      <Button title="Go to Create Post" onPress={() => {
        navigation.navigate("CreatePost");
      }} />
      <Button title="Go to Home" onPress={() => {
        navigation.navigate("Home");
      }} />
    </View>
  );
}

import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>

      {/* Navigation buttons */}
      <Button title="Go to Create Post" onPress={() => {
        navigation.navigate("CreatePost");
      }} />
      <Button title="Go to Posts" onPress={() => {
        navigation.navigate("Posts");
      }} />
    </View>
  );
}
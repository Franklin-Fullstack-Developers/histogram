import { View, Button } from "react-native";

export default function CreatePostScreen({ navigation }) {
  return (
    <View>
      <Button title="Go back" onPress={() => {
        navigation.goBack()
      }} />
    </View>
  )
}

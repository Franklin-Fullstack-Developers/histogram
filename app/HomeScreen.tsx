import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "./theme";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Histogram</Text>
        <Text style={styles.authorSubheading}>BY FULLSTACK DEVELOPERS</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("CreatePost");
        }}>
          Create Post
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Posts");
        }}>
          Go to Posts
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  button: {
    textAlign: 'center',
    width: '85%',
    height: 50,
    marginHorizontal: 'auto',
    backgroundColor: theme.colors.secondary,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: theme.fonts.button,
    color: 'white',
    borderRadius: 20,
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.title,
    fontSize: 64,
    color: theme.colors.secondary
  },
  authorSubheading: {
    textAlign: 'center',
    fontFamily: theme.fonts.codeSubtitle,
    fontSize: 18,
    marginTop: 10
  }
});

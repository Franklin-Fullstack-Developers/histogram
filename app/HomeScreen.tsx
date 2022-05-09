import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleContainer}>Home Screen</Text>

        <Text style={styles.title}>Histogram</Text>
        <Text style={styles.authorSubheading}>BY FULLSTACK DEVELOPERS</Text>
      </View>

      <View>
        {/* Navigation buttons */}
        <TouchableOpacity style={styles.button} /*title="Go to Create Posts"*/  onPress={() => {
          navigation.navigate("CreatePost");
        }}>
          Create Posts
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.button, ...styles.buttonContainer}}/*title="Go to Posts"*/  onPress={() => {
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
    justifyContent: 'space-between'
  },
  button: {
    textAlign: 'center',
    color: 'white',
    width: 50,
    height: 30,
    backgroundColor: '#860EC7',
    borderRadius: 50,
    shadowColor: '#ffffff',
    shadowRadius: 1
  },
  buttonContainer: {
    marginBottom: 50
  },
  title: {
    textAlign: 'center'
  },
  titleContainer: {
    textAlign: 'center',
    /*fontFamily: ' '*/
  },
  authorSubheading: {
    textAlign: 'center',
    fontColor: '#A011ED',
    /*fontFamily: ''*/
  }
});
